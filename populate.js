require('dotenv').config();

const connectDB = require('./db/connect');

const Product = require('./models/product');

const jsonProducts = require('./products.json');


//use the model to automatically add those json products the one that we have in the file.

const start = async() =>{
    try {
        await connectDB(process.env.MONGO_URI);
        await Product.deleteMany();
        await Product.create(jsonProducts);
        console.log('success!!');
        // exit with a 0 status code when no more async operations are pending
        process.exit(0)
    } catch (error) {
        console.log(error);
        // exit with a 1 status code, there was an uncaught exception, 
        // and it was not handled by a domain or an uncaughtException event handle        
        process.exit(1)
    }
}

start();