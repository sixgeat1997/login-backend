const cors = require('cors')
const firebase = require('./firebase').c()

var data = []

let a = firebase.database().ref('/user')
a.on('value',(snapshot) => {
    data= []
    for (const key in snapshot.val()) {
        data.push({...snapshot.val()[key],key})

        
    }

    console.log(data);
})

const express = require("express"),
    app = express(),
    bodyParser = require("body-parser")

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.post('/delete',(req,res)=>{
    console.log(req.body.user);
    
    const user = data.find(item =>{
        return item.user == req.body.user
    })
    const itemsRef = firebase.database().ref('/user');
    console.log(user);
    
    itemsRef.child(user.key).remove();
    res.json({
        message:"success"
    })
    
})

app.get('/user', (req, res) => {
    res.json(data)
})

app.post('/signup', (req, res) => {
    if (req.body.user == "" && req.body.pass == "") {
        res.json({
            message: "space"
        })
    }
    else {
        
        const fb = firebase.database().ref('/user')
        let tmp = {
            user: req.body.user,
            pass: req.body.pass
        }
        fb.push(tmp)
        res.json({
            message: "success"
        })
    }
})

app.post('/login', (req, res) => {
    const user = data.find((item) => {
        return item.user === req.body.user
    })

    if (user.pass == req.body.pass) {
        res.json({
            message: "success",
            user: user.user
        })
    }
    else {
        res.json({
            message: "fail",
            user: ""
        })
    }
})

app.listen(8000, () => console.log("Server is reunning"))