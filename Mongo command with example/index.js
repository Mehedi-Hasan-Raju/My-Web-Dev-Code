const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
.then((res) => {
    console.log("connection succcessful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});


const user = mongoose.model("user", userSchema);



// user.deleteOne({name: 'Adam'})
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });




user.findByIdAndDelete({_id: '66c4a73ac02ccf3eb8b7db61'})
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
});




// user.findOneAndUpdate({name: 'Adam'}, {age: 434},{new: true})
// .then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });



// user.updateOne({name: 'avi'}, {age: 22}).then((res) => {
//   console.log(res);
// });



// user.find({})
// .then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });



// const user1 = new user({
//   name: "Adam",
//   email: 'adam@yahoo.in',
//   age: 25,
// });

// user1.save();

// user.insertMany([
//   {name: 'avi', email: 'avi@yahoo.com',age: 32},
//   {name: 'avi', email: 'avi@yahoo.com',age: 32},
//   {name: 'avi', email: 'avi@yahoo.com',age: 32},
// ]).then((res) => {
//   console.log(res);
// });

