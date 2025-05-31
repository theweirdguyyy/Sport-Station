const express = require('express');
const router = express.Router();
const mysql = require('mysql');
// Showing all available products to a user

router.post('/signup',(req,res)=>{

    var id = Date.now().toString().slice(-5)+uuidv4().slice(8,13);
    const q = 'INSERT INTO users (`uid`,`uname`,`uemail`,`ucontact`,`upwd`,`isAdmin`) VALUES(?)';
    const values = [
        id,
        req.body.name,
        req.body.email,
        req.body.contact,
        req.body.password,
        0
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json("an error occured");
        return res.json(data);
    });
})

router.post('/login',(req,res)=>{
    const q = 'SELECT * FROM users WHERE `uemail`=? AND `upwd`=?';
    const q2 = 'SELECT isAdmin FROM users WHERE `uemail`=? AND `upwd`=?';
    const email = req.body.email,password = req.body.password;
    db.query(q,[email,password],(err,data)=>{
        if(err) 
            return res.json("an error occured");
        if(data.length>0){
            req.session.username = data[0].uname;
            req.session.role = data[0].isAdmin;
            return res.json("SUCCESS");
        }
        else{
            return res.json("FAILED");
        }
    });
    // db.query(q2,[email,password],(err,data)=>{
    //     if(err) return res.json("role error");
    //     if(data.len)
    // });
})

router.get('/logout',(req,res)=>{
    req.session.destroy();
    return res.json("LOGGED OUT");
})

module.exports = router;