// CRUD = create read update delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectId;

const {MongoClient, ObjectId} = require('mongodb');

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// const id = new ObjectId();
// console.log(id);
// console.log(id.id);
// console.log(id.id.length);
// console.log(id.toHexString().length);
// console.log(id.getTimestamp());

MongoClient.connect( connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);

    // console.log("Connected Successfully");

///////////////////////////////////////////////////////////////////////////////////////////////////////

    // db.collection("users").insertOne({
    //   // _id: id,
    //   name: "Kuldeep",
    //   age: 24
    // }, (error, result) => {
    //   if (error) {
    //     return console.log('Unable to insert user!');
    //   }

    //  // console.log(result.ops); // .ops won't work in mongodb version 4.0.0 and above
    //   console.log(result);
    // });

    // db.collection("users").insertMany([
    //   {
    //     name: "Ashwani Tiwari",
    //     age: 27
    //   }, {
    //     name: "Kuldeep Tiwari",
    //     age: 27
    //   }
    // ], (error, result) => {
    //   if (error) {
    //       return console.log('Unable to insert user!');
    //     }
    //   console.log(result);
    // });

    // db.collection('tasks').insertMany([
    //   {
    //     description: 'Currently working',
    //     completed: true
    //   }, {
    //     description: 'Working as planned',
    //     completed: false
    //   }, {
    //     description: 'Trying to working',
    //     completed: true
    //   }
    // ], (error, result) => {
    //   if (error) {
    //     return console.log("Unable to insert task");
    //   }

    //   console.log(result);
    // });

///////////////////////////////////////////////////////////////////////////////////////////////////////

    // db.collection("users").findOne({name: 'Kuldeep'}, (error, user) => {
    //   if (error) {
    //     return console.log('Unable to fetch');
    //   }

    //   console.log(user)
    // });

    // db.collection("users").find({age: 24}).toArray((error, users) => {
    //   if (error) {
    //     return console.log('Unable to fetch');
    //   }

    //   console.log(users);
    // });

    // db.collection("users").find({age: 24}).count((error, count) => {
    //   if (error) {
    //     return console.log('Unable to fetch');
    //   }

    //   console.log(count);
    // });


    // db.collection('tasks').findOne({_id: new ObjectId("61b3d8afb83082f7bfbc130d")}, (error, task) => {
    //   console.log(task);
    // });

    // db.collection('tasks').find({completed: true}).toArray((error, task) => {
    //   console.log(task);
    // });
    
///////////////////////////////////////////////////////////////////////////////////////////////////////

    // db.collection('users').updateOne({
    //   _id: new ObjectId("61b3e22607784cf0602b6f54")
    // }, {
    //   $inc: { //increment operater
    //     age: 1
    //   }
    //   // $set: {
    //   //   name: 'Batman'
    //   // }
    // }).then((result) => {
    //   console.log(result);
    // }).catch((error) => {
    //   console.log(error);
    // });

    // db.collection('tasks').updateMany({
    //   completed: false
    // }, {
    //   $set: {
    //     completed: true
    //   }
    // }).then((result) => {
    //   console.log(result);
    // }).catch((error) => {
    //   console.log(error);
    // });

/////////////////////////////////////////////////////////////////////////////////////

    // db.collection('users').deleteMany({
    //   age: 26
    // }).then((result) => {
    //   console.log(result);
    // }).catch((error) => {
    //   console.log(error);
    // })

    db.collection('tasks')
    .deleteOne({description: "Working as planned"})
    .then((result) => {console.log(result);})
    .catch((error) => {console.log(error);});

});
