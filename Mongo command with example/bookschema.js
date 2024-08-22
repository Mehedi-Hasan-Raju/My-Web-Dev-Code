const mongoose = require('mongoose');


main()
.then((res) => {
    console.log("connection succcessful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

}

const bookschema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
    price : {
        type: Number,
        min: [0, "Price is too low for Amazon seeling"],
    },
    discount: {
        type: Number,
        default: 0,
    },
});

const Book = mongoose.model("Book", bookschema);

Book.findByIdAndUpdate('66c73a7e8b6a401990e7e9f9'
    ,{price: -200},{runValidators: true})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err.errors.price.properties.message);
});


// let book1 = new Book({
//     title: "Quantam Physics",
//     author: "newton",
//     price: 8889,
// });
// book1.save().then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });
