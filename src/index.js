const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose')
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://shashikant_dev247:xABi0UB0ffcFysvC@cluster0.g1sis9f.mongodb.net/shashikant247-db?retryWrites=true&w=majority", {
    useNewUrlParser: true
}).then( () => {
    console.log('MongoDB is running on 27017')
}).catch( err => console.log(err) )

app.use('/', route);



app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
