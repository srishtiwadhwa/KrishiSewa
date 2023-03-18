const express = require('express');
const router = express.Router();
const {database} = require('config-helper')({
    path: 'config/'
});

/* GET users listing. */
router.get('/', function (req, res) {
    database.table('users')
        .withFields([ 'username' , 'email', 'fname', 'lname', 'age', 'role', 'user_id', 'contact'])
        .getAll().then((list) => {
        if (list.length > 0) {
            res.json({users: list});
        } else {
            res.json({message: 'NO USER FOUND'});
        }
    }).catch(err => res.json(err));
});

/**
 * ROLE 777 = ADMIN
 * ROLE 555 = CUSTOMER
 */


/* GET ONE USER MATCHING ID */
router.get('/:userId', (req, res) => {
    let userId = req.params.userId;
    database.table('users').filter({user_id: userId})
        .withFields([ 'username' , 'email','fname', 'lname', 'age', 'role', 'user_id' ,'contact'])
        .get().then(user => {
        if (user) {
            res.json({user});
        } else {
            res.json({message: `NO USER FOUND WITH ID : ${userId}`});
        }
    }).catch(err => res.json(err) );
});

/* UPDATE USER DATA */
router.patch('/:userId', async (req, res) => {
    let userId = req.params.userId;     // Get the User ID from the parameter

  // Search User in Database if any
    let user = await database.table('users').filter({user_id: userId}).get();
    if (user) {

        let userEmail = req.body.email;
        let userPassword = req.body.password;
        let userFirstName = req.body.fname;
        let userLastName = req.body.lname;
        let userUsername = req.body.username;
        let age = req.body.age;
        let contact = req.body.contact

        // Replace the user's information with the form data ( keep the data as is if no info is modified )
        database.table('users').filter({user_id: userId}).update({
            email: userEmail !== undefined ? userEmail : user.email,
            password: userPassword !== undefined ? userPassword : user.password,
            username: userUsername !== undefined ? userUsername : user.username,
            fname: userFirstName !== undefined ? userFirstName : user.fname,
            lname: userLastName !== undefined ? userLastName : user.lname,
            age: age !== undefined ? age : user.age,
            contact: contact !==undefined ? contact : user.contact
        }).then(result => res.json('User updated successfully')).catch(err => res.json(err));
    }
});

module.exports = router;
