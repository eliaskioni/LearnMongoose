
// docker run --rm --name learn-mongo -e MONGO_INITDB_ROOT_USERNAME=user -e MONGO_INITDB_ROOT_PASSWORD=password -e MONGO_INITDB_DATABASE=learnMongo -v /tmp/mongo-data:/data/db -p 27017:27017 mongo
// mongosh "mongodb+srv://127.0.0.1/learnMongo" --apiVersion 1 --username user

import mongoose, { connect } from "mongoose";
import { MongoClient } from "mongodb";

const connection = async () => {
    try {
        const client = await MongoClient.connect('mongodb://user:password@localhost:27018/learnMongo');
        console.log("Connected successfully to the mongo database");
        // Further operations can be performed using the 'client' object
    } catch (error) {
        console.log("Error connecting to the mongo database");
        console.error(error);
    }
};

connection();

const personSchema = mongoose.Schema(
    {
        name: String
    }
);

const Person = mongoose.model('Person', personSchema);

const James = new Person({'name': 'James'})

await James.save();




