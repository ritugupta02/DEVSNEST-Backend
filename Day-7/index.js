const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.sendStatus(201);
    // res.send("Hello get");
    res.send();
})

app.post('/', (req, res) => {
    res.send("Hello post");
})

app.put('/', (req, res) => {
    res.send("Hello put");
})

app.delete('/', (req, res) => {
    res.send("Hello delete");
})

//.....................................................................................
//Pipelining

app.get('/', (req, res) => {
    res.status(200).send("Hello");
})

//....................................................................................
// Query and params

app.get('/day7', (req, res) => {

    res.send(req.query.THA);
})

app.get('/ab?cd', (req, res) => {

    res.send('ab?cd');
})

app.get('/ab+cd', (req, res) => {

    res.send('ab+cd');
})

app.get('/ab*cd', (req, res) => {

    res.send('ab*cd');
})
app.get('/ab(cd)?e', (req, res) => {

    res.send('ab(cd)?e');
})

app.get(/a/, (req, res) => {

    res.send('anything that contains a');
})

app.get(/.*fly$/, (req, res) => {

    res.send('contain fly');
})

app.get('/user/:id/books/:bookid', (req, res) => {

    res.send(req.params);
})



app.listen(5000);

