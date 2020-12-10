import db from '../connection';

export default class UserController {
    static async isUserExist(req, res, next) {
        const {login, password} = req.query;
        console.log(req.query);
        db.collection('users').find({username: login, password}).toArray().then((result) => {
            res.send(result);
        });
    };
    static async saveRegPersonData(req, res, next) {
        const {username, password, email, gender} = req.body;
        db.collection('users').insertOne({username, password, email, gender});
    };
    static async changePersonData(req, res, next) {
        const {username, password, email, gender} = req.body;
        db.collection('users').update({username, password, email, gender});
    };
}