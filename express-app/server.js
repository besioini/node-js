const express = require('express');
const morgan = require('morgan');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.post('/submit-form', (req, res) => {
    console.log(req.body);
    res.send('Form submitted successfully!');
});

app.get('/users/:userId', (req, res) => {
    res.send(`User ID: ${req.params.userId}`);
});

app.get('/download-image', (req, res) => {
    const file = `${__dirname}/images/node.png`;
    res.download(file);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
