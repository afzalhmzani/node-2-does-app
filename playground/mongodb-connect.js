const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to MangoDB server');
    }
    console.log('Connected to MongoDB server'); 

    // db.collection('Todos').insertOne({
    //     text: 'Somthing to do',
    //     completed: false
    // },(err, result) =>{
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2)); 
    // });

    db.collection('Users').insertOne({
        name: 'Abdullah', 
        age: 25, 
        location: 'Hail'
    }, (err, result)=>{
        if(err){
            return console.log('Unable to inset todo ', err); 
        }

        console.log(result.ops);
    });
    db.close();
});