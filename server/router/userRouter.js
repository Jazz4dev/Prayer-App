const express = require('express');
const router = express.Router();
const {check , validationResult} = require('express-validator');
const User = require('../models/User');


/*
    Usage : Register a User
    URL  : http://127.0.0.1:5000/users/register
    Method : POST
    Fields : name , email , password
    Access : Public
 */

router.post('/register' , [
    check('name').notEmpty().withMessage('Name is Required'),
    check('email').isEmail().withMessage('Enter a Proper Email'),
    check('duaDescription').notEmpty().withMessage('Enter a Dua Description'),
], async (request , response) => {
    //register Logic
    let errors = validationResult(request);
    if(!errors.isEmpty()){
        return response.status(400).json({errors : errors.array()});
    }
    try {
        let {name , email , count , prayerType , duaDescription} = request.body;
        // check if already exists or not
        let user = await User.findOne({email});
        if(user){
            return response.status(400).json({errors : [{msg : 'User is Already Exits'}]});
        }
        //store the data to database
        user = new User({name , email , count , prayerType , duaDescription});
        user = await user.save();
    }
    catch (error) {
        console.error(error);
        response.status(500).json({errors : error});
    }
});



module.exports = router;