const express = require('express');
const routesHTML = require('./routes/routesHTML');
const routesAPI = require('./routes/routesAPI');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded(
    { 
        extended: true 
    }
));

app.use(express.static('public'));
app.use(express.json());
app.use('/api', routesAPI);
app.use('/', routesHTML);
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});