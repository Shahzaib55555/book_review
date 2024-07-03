
const router = require("express").Router();
const bookModel = require("../models/bookModel");

router.post("/add", async (req, res) =>{
    try {
        // data ko console se utta kr model mein dalyin gy
        const data = req.body;
        const newBook = new bookModel(data);
        // data ko ab database prr store kr do....fr then() is use for acknowledgemennt that data is saved
        await newBook.save().then(() =>
        (
            res.status(200).json({message: "Book Added Successfully"})
        ))
    } catch (error) {
        console.log(error)
        
    }
});

router.get("/getall", async (req, res) =>{
    let books;
    try {
       //data ko fetch krne k liye        
    books = await bookModel.find();
    res.status(200).json({ books });
    } catch (error) {
        console.log(error)
    }
});
// get request by ISBN number
// router.get("/getall/:ISBN", async (req, res) =>{
//     let book;
//     const bookISBN = req.params.ISBN;
//     try {
//        //isbn number ki book k data ko fetch krne k liye        
//     book = await bookModel.findOne({ ISBN: bookISBN }); 
//     res.status(200).json({ book });
//     } catch (error) {
//         console.log(error)
//     }
// });

//get request by title
router.get("/getall/:title", async (req, res) =>{
    let book;
    const bookTitle = req.params.title;
    try {
       // ki book k data ko fetch krne k liye        
    book = await bookModel.find({ title: bookTitle }); 
    res.status(200).json({ book });
    } catch (error) {
        console.log(error)
    }
});

//get request by author
// router.get("/getall/:author", async (req, res) =>{
//     let book;
//     const bookauthor = req.params.author;
//     try {
//        //ki book k data ko fetch krne k liye        
//     book = await bookModel.find({ author: bookauthor });
//     res.status(200).json({ book });
//     } catch (error) {
//         console.log(error)
//     }
// });
router.get("/getall/:Review", async (req, res) =>{
    let book;
    const book_Review = req.params.Review;
    try {
        
       //ki book k data ko fetch krne k liye        
    book = await bookModel.find({ Review: book_Review});
    res.status(200).json({ book });
    } catch (error) {
        console.log(error)
    }
});

router.put("/updatebooks/:Review", async (req, res) =>{
    let book;
    const book_Review = req.params.Review;
    try {
       //ki book k data ko fetch krne k liye        
    book = await bookModel.findByIdAndUpdate({ Review: book_Review});
    res.status(200).json({ book });
    } catch (error) {
        console.log(error)
    }
}); 

router.delete("/deletebook/:id", async(req, res) =>{
    const id = req.params.id;
    try {
        await bookModel.findByIdAndDelete(id).then(()=>res.status(200).json({message: "book deleted"}));
    } catch (error) {
        console.log(error)
        
    }
})

module.exports = router;