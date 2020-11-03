const mongoose = require('mongoose');
DB_HOST = process.env.DB_HOST
DB_USER = process.env.DB_USER
DB_PASSWORD = process.env.DB_PASSWORD
DB_NAME = process.env.DB_NAME

MONGODB_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(db => console.log(`Db is connected to ${DB_HOST} to the database ${DB_NAME}`))
    .catch(err => console.log(err));