import firestore from '@react-native-firebase/firestore';

async function getQuizzes(){
    let json = [];

    //from Quiz collection, get each document and push it in an array
    await firestore().collection('Quiz').get()
        .then(collection => {
            collection.forEach(document => {
                json.push({"id":document.id,...document.data()});
            })
        });
    
    //return resulting array
    return json;
}






export {getQuizzes};