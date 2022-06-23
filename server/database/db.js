//import { express } from 'express';
// import { createPool } from 'mysql2';

// //const{ createPool } = require('mysql2');

// const Connection = createPool({
//     host: "localhost",
//     user: "root",
//     password: "kohli@183",
//     database: "product",
//     connectionLimit: 5,
//     insecureAuth : true

// });

// Connection.getConnection(function(err, tempCont){
//     if(!!err){  console.log("Error");}
//     else {console.log("Connected");

//         tempCont.query(`SELECT * FROM product`, (err, result, tempCont) => {
//             //tempCont.release();
//             if(!!err) {
//                 return console.log(err);
//             }
//             else { return console.log(result); }
//        })
//    }
//  });




import mongoose from 'mongoose';


const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@flipkartweb.vul1e.mongodb.net/WEBAPPLICATIONS?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true});
        console.log("Database connected successfully");
    } catch (error) {
        console.log('Error: ', error.message);
    }
}
export default Connection;