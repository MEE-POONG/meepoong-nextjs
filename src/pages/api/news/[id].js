
import firebase from '../../../firebase';
import _ from 'lodash';
const database = firebase.database();

export default (req, res) => {
    let data
    const blogsRef = database.ref('/blogs/' + req.query.id);
    blogsRef.on('value', (snapshot) => {
        data = snapshot.val();
    });
    res.json(data);
};