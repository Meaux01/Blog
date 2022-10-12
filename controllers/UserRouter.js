const express = require('express')
const userModel = require('../models/UserSchema')

const router = express.Router()

// GET: All Blogs
router.get('/', async (req, res) => {
    try {
        const user = await userModel.find({})
        res.send(user)
    } catch (error) {
        console.log(error);
        res.status(403).send('Cannot get')
    }
})

// GET: Blog by ID
router.get('/:id', async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id)
        res.send(user)
    } catch (error) {
        console.log(error);
        res.status(403).send('Cannot get')
    }
})

// POST: CREATE a New Blog
router.post('/', async (req, res) => {
    try{
        const userAlreadyExist = await userModel.find({email: req.body.email})
        if (userAlreadyExist[0]){
            return res.send('User Already Exist')
        }
        const newUser = await userModel.create(req.body)
        res.send(newUser)
    } catch(error){
        console.log(error);
        res.status(403).send('Cannot create')
    }
})

// PUT: Update By ID
router.put('/:id', async (req, res)=> {
   try {
    const updatedUser = await userModel.findByIdAndUpdate(req.params.id, req.body, {'returnDocument' :"after"})
    res.send(updatedUser)
   } catch (error) {
        console.log(error);
        res.status(403).send('Cannot put')
   }
})


// DELETE
router.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await userModel.findByIdAndRemove(req.params.id)
        console.log(deletedUser);
        res.send('Blog Deleted')
    } catch (error) {
        console.log(error);
        res.status(403).send('Cannot put')
    }
})

module.exports = router;