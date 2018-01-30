var express = require('express');
var bodyParser = require('body-parser');
var validator = require('express-validator');
var app = express();
var cors = require('cors');
var Page = require('./models').Page

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(validator())
app.use(cors())

app.get('/', (req, res) => {
  res.json({message: 'API Example App'})
});

app.get('/pages', (req, res) => {
  Page.findAll().then( (pages) =>{
    res.json({pages: pages})
  })
})

app.get('/pages/:id', (req, res) => {
    let id = parseInt(req.params.id);

    Page.findById(id).then((page) => {
        res.json({
            page: page
        })
    })
})



app.put('/pages/edit/:id', (req, res) => {
    console.log(req.params.name)
    console.log(req.body)
    const { name, content } = req.params
    let id = parseInt(req.params.id);

    Page.findById(id).then((page) => {
        Page.update({
            name: name,
            content: content
        },
        {
            where: {
                id: id
            }

        }).then((page) => {
            res.status(201)
            res.json({page: page})
        })
    })
})


app.post('/pages', (req, res) => {
    req.checkBody('name', 'Is required').notEmpty()


    const { name, content } = req.body

    req.getValidationResult()
        .then((validationErrors) => {
            if(validationErrors.isEmpty()){
                Page.create({
                    name: name,
                    content: content
                }).then((page) => {
                    res.status(201)
                    res.json({page: page})
                })
            } else {

                res.status(400)
                res.json({errors: {validations: validationErrors.array()}})
            }
        })
})



module.exports = app
