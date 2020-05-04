const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', './views')
app.set('view engine', 'pug')
var users = [
    {id : 1, name: 'Tiến'},
    {id : 2, name: 'Lâm'}
];

app.get('/', (req, res) => res.render('index',{
    name:'Tiến'
}))
app.get('/users',(req, res) => res.render('users/index',{
    users: users
}))

app.get('/users/search',function(req,res){
    var q = req.query.q;
    var matt = users.filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render('users/index',{
        users: matt,
        text:q
    })
})

app.get('/users/create',function(req,res){
    res.render('users/create')
})

app.post('/users/create',function(req,res, next){
    users.push(req.body);
    res.redirect('/users');
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))