const mongoose = require('mongoose')


const mongoURI = 'mongodb+srv://gofood:gofood123@cluster0.22hd4.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB using async/await
const mongoDB = async () => {
  try {
    // Await the connection promise 
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB database...");
    const fetched_data =  mongoose.connection.db.collection("food_items");
    await fetched_data.find({}).toArray(function(err,data){
      if(err) console.log(err);
      else console.log(data,'data');
      
      
    })
    

  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit process if unable to connect to DB

  }
};
module.exports= mongoDB();