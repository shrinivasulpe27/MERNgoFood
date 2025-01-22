const express = require('express');
const mongoose = require('mongoose');
const mongoDB = require('./db.js')
const app = express();
const port = 5000;
// Call connectDB to establish a connection
// mongoDB();
app.use((req,res,next)=> {
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})
app.use(express.json())


// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello world. ...');
});

app.use('/api',require("./Routes/CreateUser"))
// const fetchData = async () => {
//   try {
//     const fetched_data = mongoose.connection.db.collection("food_items");
//     const data = await fetched_data.find({}).toArray();
//     console.log(data, 'data'); // Log the data from the collection
//   } catch (err) {
//     console.log(err); // Handle any errors that occur during the fetch operation
//   }
// };
// fetchData();

// Start the Express server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

