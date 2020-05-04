const express = require('express')
const app = express()
const port = 3000

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

app.get('/users/search',(req,res) => console.log(req.query))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))