import mongoose from 'mongoose';
import userData from './config';

const uri = `mongodb+srv://${userData.username}:${userData.password}@cluster0.imayf.mongodb.net/${userData.database}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
console.log(db);

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('Connection succeeded.');
});

export default db;