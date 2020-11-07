import firestore from '@react-native-firebase/firestore';

//order Quiz/All by result.totalcount. get 'howmany' from top. return type JSON ARRAY
async function getBestQuizzes(howmany) {
  let json = [];
  //sort in result.totalcount descending order and get 'howmany' items after 'lastDocument'
  await firestore()
    .collection('AllQuiz')
    .orderBy('result.totalcount', 'desc')
    .limit(howmany)
    .get()
    .then((collection) => {
      collection.forEach((document) => {
        json.push({id: document.id, ...document.data()});
      });
    });

  //return list and the last and first document of this list
  return json;
}

//get all recommended quiz. return type JSON ARRAY
async function getRecommendedQuizzes() {
  let json = [];

  await firestore()
    .collection('RecommendedQuiz')
    .orderBy('regdate', 'desc')
    .get()
    .then((collection) => {
      collection.forEach((document) => {
        json.push({id: document.id, ...document.data()});
      });
    });

  //return list
  return json;
}

async function getRecentQuizzes(firstDocument, currentcnt) {
  let json = [];
  let firstDoc = {};
  let lastDoc = {};
  await firestore()
    .collection('AllQuiz')
    .orderBy('regdate', 'desc')
    .startAt(firstDocument)
    .limit(currentcnt + 5)
    .get()
    .then((collection) => {
      collection.forEach((document) => {
        json.push({id: document.id, ...document.data()});
      });
      firstDoc = collection.docs[0];
      lastDoc = collection.docs[collection.size - 1];
    });

  //return list and the first document of this list
  return {
    list: json,
    firstDoc: firstDoc,
    lastDoc: lastDoc,
  };
}

async function refreshRecentQuizzes(lastDocument) {
  let json = [];
  let lastDoc = {};
  let firstDoc = {};

  if (lastDocument == null || lastDocument == {}) {
    await firestore()
      .collection('AllQuiz')
      .orderBy('regdate', 'desc')
      .limit(5)
      .get()
      .then((collection) => {
        collection.forEach((document) => {
          json.push({id: document.id, ...document.data()});
        });
        lastDoc = collection.docs[collection.size - 1];
        firstDoc = collection.docs[0];
      });
  } else {
    await firestore()
      .collection('AllQuiz')
      .orderBy('regdate', 'desc')
      .endAt(lastDocument)
      .get()
      .then((collection) => {
        collection.forEach((document) => {
          json.push({id: document.id, ...document.data()});
        });
        lastDoc = collection.docs[collection.size - 1];
        firstDoc = collection.docs[0];
      });
  }
  return {
    list: json,
    lastDoc: lastDoc,
    firstDoc: firstDoc,
  };
}

async function getInitialQuizzes(howmany) {
  let ref = firestore().collection('AllQuiz');
  let best = [];
  let lastDoc = {};
  let firstDoc = {};
  let recent = [];
  let recommended = [];

  //sort in regdate descending order and get 'howmany' items
  await ref
    .orderBy('regdate', 'desc')
    .limit(howmany)
    .get()
    .then((collection) => {
      collection.forEach((document) => {
        recent.push({id: document.id, ...document.data()});
      });
      lastDoc = collection.docs[collection.size - 1];
      firstDoc = collection.docs[0];
    });

  //get all recommended==true. sort in regdate descending order and get 'howmany' items
  await firestore()
    .collection('RecommendedQuiz')
    .orderBy('regdate', 'desc')
    .get()
    .then((collection) => {
      collection.forEach((document) => {
        recommended.push({id: document.id, ...document.data()});
      });
    });

  //sort in result.totalcount descending order and get 'howmany' items
  await ref
    .orderBy('result.totalcount', 'desc')
    .limit(50)
    .get()
    .then((collection) => {
      collection.forEach((document) => {
        best.push({id: document.id, ...document.data()});
      });
    });

  //return best,recent,recommended list and the lastdocs of each
  return {
    best: best,
    recent: recent,
    recommended: recommended,
    lastDoc: lastDoc,
    firstDoc: firstDoc,
  };
}

async function setDummy() {
  var random = Math.floor(Math.random() * 4) + 1;

  var data = {
    description: 'test' + new Date(),
    imgSrc: 'https://reactjs.org/logo-og.png',
    quizType: '',
    recommended: false,
    regdate: new Date(),
    result: {
      totalcount: Math.floor(Math.random() * 100) + 1,
    },
    tag: ['test'],
    title: 'testTitle' + Math.floor(Math.random() * 200) + 1,
  };

  switch (random) {
    case 1:
      data.quizType = 'thisorthat';
      data.recommended = true;
      break;
    case 2:
      data.quizType = '4mc';
      data.recommended = true;
      break;
    case 3:
      data.quizType = '2mc';
      data.recommended = true;
      break;
    case 4:
      data.quizType = 'truefalse';
      data.recommended = false;
      break;
    default:
      data.quizType = 'thisorthat';
      data.recommended = false;
      break;
  }

  await firestore()
    .collection('AllQuiz')
    .add(data)
    .then(() => {
      console.log('dummy added to AllQuiz');
    });

  if (data.recommended == true) {
    await firestore()
      .collection('RecommendedQuiz')
      .add(data)
      .then(() => {
        console.log('dummy added to RecommendedQuiz');
      });
  }
}

export {
  setDummy,
  getBestQuizzes,
  getRecentQuizzes,
  getRecommendedQuizzes,
  getInitialQuizzes,
  refreshRecentQuizzes,
};
