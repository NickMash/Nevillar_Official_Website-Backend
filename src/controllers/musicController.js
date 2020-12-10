import db from "../connection";

export default class MusicList {
    static async getMusicList(req, res, next) {
        db.collection('music').find().toArray().then((result) => {
            console.log(result);
        });
    };
}