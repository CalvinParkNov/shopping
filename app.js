require("dotenv").config();

require("express-async-errors");

const express = require("express");
const app = express();
//connecting to DB
const connectDB = require("./db/connect");
//connect router
const productsRouter = require("./routes/products");
//middleware for error page
const notFoundMilddleware = require("./middleware/not-found.js");
//middle ware for error
const errorMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.json());

// routes
//root for main page
app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products"> products route</a>');
  // res.write("<script>alert('sucess')</script>");
  // res.write("<script>window.location='/api/v1/products'</script>");
});

app.use("/api/v1/products", productsRouter);

//products route

app.use(notFoundMilddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    //connect DB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening port ${port}....`));
  } catch (error) {
    console.log(error);
  }
};

start();
