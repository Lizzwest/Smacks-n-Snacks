const express = require("express")
const app = express()
let ejsLayouts = require('express-ejs-layouts')
let db = require('./models')
let moment = require('moment')
// let router = express.Router()


app.set('view engine', 'ejs')

app.use(require('morgan')('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(ejsLayouts)
app.use(express.static(__dirname + '/public/'))
app.use((req, res, next) => {
    res.locals.moment = moment
    next()
  })


app.use('/meal-plans', require('./controllers/food'))
app.use('/order-form', require('./controllers/orderContact'))
app.use('/owner', require('./controllers/owner'))
app.use('/smacks-n-snacks', require('./controllers/main'))

//homepage success
app.get('/', (req, res) => {
    res.render('main/homepage')
})
//
app.get('/contact', (req, res) => {
    res.render('main/contact')
})
app.get('/login', (req, res) => {
    res.render('main/login')
})
app.get('/about', (req, res) => {
    res.render('main/about')
})
app.get('/signup', (req, res) => {
    res.render('main/signup')
})

app.get('/mealplans', (req, res) => {
    res.render('food/mealPlan')
})
app.get('/bbq-sauce', (req, res) => {
    res.render('food/sauce')
})
app.get('/smacks', (req, res) => {
    res.render('food/smacks')
})

app.get('/snacks', (req, res) => {
    res.render('food/snacks')
})
app.get('/order', (req, res) => {
    res.render('orderContact/order')
})
app.get('/delivery', (req, res) => {
    res.render('orderContact/delivery')
})
app.get('/contact', (req, res) => {
    res.render('orderContact/contact')
})
app.get('/owner-only', (req, res) => {
    res.render('owner/orderInfo')
})


let server = app.listen(process.env.PORT || 3000
)
  
  module.exports = server