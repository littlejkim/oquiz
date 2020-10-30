import firestore from '@react-native-firebase/firestore';

async function getQuizzes() {
  let json = [];

  //from Quiz collection, get each document and push it in an array
  await firestore()
    .collection('Quiz')
    .get()
    .then((collection) => {
      collection.forEach((document) => {
        json.push({id: document.id, ...document.data()});
      });
    });

  //return resulting array
  return json;
}

async function getBestQuizzes(lastDocument,howmany){
  let json = [];
  let lastDoc = {};
  //sort in result.totalcount descending order and get 'howmany' items after 'lastDocument'
  await firestore().collection('Quiz')
  .orderBy('result.totalcount','desc')
  .startAfter(lastDocument)
  .limit(howmany)
  .get()
  .then((collection) => {
    collection.forEach((document) => {
      json.push({id: document.id, ...document.data()});
    });
    lastDoc = collection.docs[collection.docs.length-1];
  });

  //return list and the last and first document of this list
  return {
    list:json,
    last:lastDoc,
  };
}

async function getRecommendedQuizzes(lastDocument,howmany){
  let json = [];
  let lastDoc = {};
  //get all recommended==true. sort in regdate descending order and get 'howmany' items after 'lastDocument'
  await firestore().collection('Quiz')
  .where('recommended','==', true)
  .orderBy('regdate','desc')
  .startAfter(lastDocument)
  .limit(howmany)
  .get()
  .then((collection) => {
    console.log(collection.size);
    collection.forEach((document) => {
      json.push({id: document.id, ...document.data()});
    });
    lastDoc = collection.docs[collection.docs.length-1];
  });

  //return list and the last document of this list
  return {
    list:json,
    last:lastDoc,
  };
}

async function getRecentQuizzes(lastDocument,howmany){
  let json = [];
  let lastDoc = {};

  //sort in regdate descending order and get 'howmany' items after 'lastDocument'
  await firestore().collection('Quiz')
  .orderBy('regdate','desc')
  .startAfter(lastDocument)
  .limit(howmany)
  .get()
  .then((collection) => {
    collection.forEach((document) => {
      json.push({id: document.id, ...document.data()});
    });
    lastDoc = collection.docs[collection.docs.length-1];
  });

    //return list and the last document of this list
  return {
    list:json,
    last:lastDoc
  };
}

async function refreshBestQuizzes(firstDocument){
  let json = [];
  let firstDoc = {};
  await firestore().collection('Quiz').orderBy('result.totalcount','desc').endBefore(firstDocument).get()
  .then((collection) => {
    collection.forEach((document) => {
      json.push({id: document.id, ...document.data()});
    });
    firstDoc = collection.docs[0];
  });

  return{
    list:json,
    first:firstDoc
  }
}

async function refreshRecentQuizzes(firstDocument){
  let json = [];
  let firstDoc = {};
  await firestore().collection('Quiz').orderBy('regdate','desc').endBefore(firstDocument).get()
  .then((collection) => {
    collection.forEach((document) => {
      json.push({id: document.id, ...document.data()});
    });
    firstDoc = collection.docs[0];
  });

  return{
    list:json,
    first:firstDoc
  }
}

async function refreshRecommendedQuizzes(firstDocument){
  let json = [];
  let firstDoc = {};
  await firestore().collection('Quiz').where('recommended','==',true).orderBy('regdate','desc').endBefore(firstDocument).get()
  .then((collection) => {
    collection.forEach((document) => {
      json.push({id: document.id, ...document.data()});
    });
    firstDoc = collection.docs[0];
  });

  return{
    list:json,
    first:firstDoc
  }
}

async function getInitialQuizzes(howmany){
  let ref = firestore().collection('Quiz');
  let best = [];
  let lastDoc = {};
  let firstDoc = {};
  let recent = [];
  let recommended=[];

  //sort in regdate descending order and get 'howmany' items
  await ref.orderBy('regdate','desc').limit(howmany).get()
  .then((collection) => {
    collection.forEach((document) => {
      recent.push({id: document.id, ...document.data()});
    });
    lastDoc['Recent'] = collection.docs[collection.docs.length-1];
    firstDoc['Recent'] = collection.docs[0];
  });

  //get all recommended==true. sort in regdate descending order and get 'howmany' items
  await ref.where('recommended','==',true).orderBy('regdate','desc').limit(howmany).get()
  .then((collection) => {
    collection.forEach((document) => {
      recommended.push({id: document.id, ...document.data()});
    });
    lastDoc['Recommended'] = collection.docs[collection.docs.length-1];
    firstDoc['Recommended'] = collection.docs[0];
  });

  //sort in result.totalcount descending order and get 'howmany' items
  await ref.orderBy('result.totalcount','desc').limit(howmany).get()
  .then((collection) => {
    collection.forEach((document) => {
      best.push({id: document.id, ...document.data()});
    });
    lastDoc['Best'] = collection.docs[collection.docs.length-1];
    firstDoc['Best'] = collection.docs[0];
  });

  //return best,recent,recommended list and the lastdocs of each
  return {
    best:best,
    recent:recent,
    recommended:recommended,
    lastDoc:lastDoc,
    firstDoc:firstDoc
  }


}

async function setDummy(){
  let quizType="";
  let recommended=false
  var random = Math.floor(Math.random()*4)+1;
  switch (random) {
    case 1:
      quizType = "thisorthat"
      recommended = false;
      break;
    case 2:
      quizType = "4mc"
      recommended = true;
      break;
    case 2:
      quizType = "2mc"
      recommended = false;
      break;
    case 2:
      quizType = "truefalse"
      recommended = true;
      break;
    default:
      quizType = "thisorthat"
      recommended = false;
      break;
  }

  await firestore().collection('Quiz').add(
    {
      description:'test'+new Date,
      imgSrc:"https://reactjs.org/logo-og.png",
      quizType: quizType,
      recommended: recommended,
      regdate: new Date,
      result:{
        totalcount: Math.floor(Math.random()*100)+1,
      },
      tag:["test"],
      title:"testTitle"

    }
  ).then(()=>{
    console.log("dummy added");
  });
}

export {getQuizzes,setDummy,getBestQuizzes,getRecentQuizzes,getRecommendedQuizzes,getInitialQuizzes,refreshBestQuizzes,refreshRecentQuizzes,refreshRecommendedQuizzes};
