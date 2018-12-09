const express = require('express');
const router = express.Router();
const book = require('../models/book.js');
const booksDiscount = require('../models/booksDiscount.js');
const jsonFile = require('jsonfile')
const jsonFileName = './routes/listeDesLivres.json';


router.get('/', (rep, res) => {
    
    jsonFile.readFile(jsonFileName, function (err, jsonData) {
        if (err) throw err;
        var listBooksResponse = new Array();
        for (var i = 0; i < jsonData.length; ++i) {

            var bookk = new book(
                jsonData[i].isbn,
                jsonData[i].title,
                jsonData[i].price,
                jsonData[i].cover,
                jsonData[i].synopsis
            );
           
            listBooksResponse.push(bookk);
        }
        res.send(listBooksResponse);
    });
    
   
});
router.get('/:nbrOfBooks', (rep, res) => {

    var listOfDiscounts = new Array();
    var dis1 = new booksDiscount(
        "percentage",
        4,
        0
    );
    var dis2 = new booksDiscount(
        "minus",
        15,
        0
    );
    var dis3 = new booksDiscount(
        "slice",
        12,
        100
    );

    listOfDiscounts.push(dis1);

    if (rep.params.nbrOfBooks > 1) {
        listOfDiscounts.push(dis2);
        listOfDiscounts.push(dis3);
    }
   res.send(listOfDiscounts);

});

module.exports = router;
