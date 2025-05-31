const express = require('express');
const port = 3305;
const mysql = require('mysql');
const generateUniqueId = require('generate-unique-id');
const cors = require('cors');
const session = require('express-session');
const date = require('date-and-time');
const cp = require('cookie-parser');
const bp = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const Product = require('./routes/ProductsRoute');
// const User = require('./routes/UserRoute');

const app = express();
app.use('/ppp',Product);
// app.use('/pp',User);
app.use(cors({
    origin:["http://localhost:3000"],
    methods:["POST","GET"],
    credentials:true
}));
app.use(express.json());
app.use(cp());
app.use(bp.json());
app.use(session({
    secret : 'qwerty',
    resave: false,
    saveUninitialized: false,
    cookie:{
        secure: false,
        maxAge: 3000*24*60*60
    }
}))
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sportStation'
})
app.get('/products',(req,res)=>{
    const q = 'SELECT * FROM products';
    db.query(q,(err,data)=>{
        if(err) return res.json('an error occurred');
        return res.json(data);
    })
})
app.get('/product/:id',(req,res)=>{
    const q = 'SELECT * FROM products WHERE `pid`=?';
    const id = req.params.id;
    db.query(q,[id],(err,data)=>{
        if(err) return res.json('an error occurred');
        return res.json(data);
    })
})
app.post('/shipping',(req,res)=>{
    const tid = generateUniqueId();
    const q = 'INSERT INTO shipping (`oid`,`trxnid`,`city`,`address`,`paid`) VALUES(?)';
    const q2 = 'INSERT INTO transactions (`trxnid`,`oid`,`amount`) VALUES(?)';
    const values = [
        req.body.oid,
        req.body.id,
        req.body.city,
        req.body.address,
        req.body.amount
    ]
    const v2 = [
        tid,
        req.body.oid,
        req.body.amount
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json("an error occured");
        // return res.json(data);
    });
    db.query(q2,[v2],(err,data)=>{
        if(err) return res.json("an error occured");
        // return res.json(data);
    });
})

app.get('/orders',(req,res)=>{
    const q = 'SELECT * FROM orders NATURAL JOIN transactions';
    db.query(q,(err,data)=>{
        if(err) return res.json('an error occurred');
        return res.json(data);
    })
})

app.post('/order',(req,res)=>{
    const q = 'INSERT INTO orders (`oid`,`pid`,`time`,`details`,`status`) VALUES(?)';
    const values = [
        req.body.oid,
        req.body.pid,
        req.body.time,
        req.body.details,
        req.body.status
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json("an error occured");
        return res.json(data);
    });
})
app.post('/addproduct',(req,res)=>{
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


app.get('/',(req,res)=>{
    if(req.session.username){
        return res.json({valid:true,user:req.session.username,role:req.session.role})
    }
    else return res.json({valid:false});
})
app.get('/logout',(req,res)=>{
    req.session.destroy();
    return res.json("LOGGED OUT");
})

app.get('/users',(req,res)=>{
    const q = 'SELECT * FROM users';
    db.query(q,(err,data)=>{
        if(err) return res.json('an error occurred');
        return res.json(data);
    })
})

app.post('/signup',(req,res)=>{

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

app.post('/profile',(req,res)=>{
    const q = 'SELECT * FROM users WHERE `uname`=?';
    const email = req.session.username;
    console.log(req.session.username,"here");
    db.query(q,[email],(err,data)=>{
        if(err) return res.json('an error profile occurred');
        return res.json(data);
    })
})
app.post('/login',(req,res)=>{
    const q = 'SELECT * FROM users WHERE `uemail`=? AND `upwd`=?';
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
}) 

app.get('/logout',(req,res)=>{
    req.session.destroy();
    return res.json("LOGGED OUT");
})


app.listen(port,()=>{
    console.log(`listening... from ${port}`);
})