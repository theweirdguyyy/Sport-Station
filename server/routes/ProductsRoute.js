const express = require('express');
const router = express.Router();
const mysql = require('mysql');
// Showing all available products to a user

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sportStation'
})

router.get('/products',(req,res)=>{
    const q = 'SELECT * FROM products';
    db.query(q,(err,data)=>{
        if(err) return res.json('an error occurred');
        return res.json(data);
    })
})
router.get('/product/:id',(req,res)=>{
    const q = 'SELECT * FROM products WHERE `pid`=?';
    const id = req.params.id;
    db.query(q,[id],(err,data)=>{
        if(err) return res.json('an error occurred');
        return res.json(data);
    })
})
router.post('/addproduct',(req,res)=>{
    const q = 'INSERT INTO products (`pid`,`pname`,`description`,`image`,`price`) VALUES(?)';
    const q2 = 'INSERT INTO stock (`pid`,`price`,`s`,`m`,`l`,`xl`,`xxl`) VALUES(?)';
    const id = uuidv4().slice(0,13);
    const products = [
        id,
        req.body.name,
        req.body.description,
        req.body.image,
        req.body.price
    ]
    const size = [
        id,
        req.body.price,
        req.body.quant,
        req.body.quant,
        req.body.quant,
        req.body.quant,
        req.body.quant
    ]
    db.query(q,[products],(err,data)=>{
        if(err) return res.json("an error occured");
        // return res.json(data);
    });
    db.query(q2,[size],(err,data)=>{
        if(err) return res.json("an error occured");
        return res.json(data);
    });
})
module.exports = router;