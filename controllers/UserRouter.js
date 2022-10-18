const express = require('express')
const userModel = require('../models/UserSchema')
const bcrypt = require('bcryptjs')
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

// Render a Signup Form
router.get('/signup', (req, res) => {
    res.render('users/Signup')
  })

  router.post("/signup", async (req, res) => {
    try {
      // check if user exist
      const userAlreadyExist = await userModel.find({ email: req.body.email });
  
      // if there is a object inside of the array
      if (userAlreadyExist[0]) {
        return res.send("User Already exist!");
      }
  
      // Create a new user
      const SALT = await bcrypt.genSalt(10) // how secure your hash will be
      // re-assign the password to the hashed password
      req.body.password = await bcrypt.hash(req.body.password, SALT)
      const user = await userModel.create(req.body);
      res.redirect('/user/signin')
    } catch (error) {
      console.log(error);
      res.status(403).send("Cannot POST");
    }
  });

  router.get('/signin', (req, res) => {
    res.render('users/Signin')
  })
  

  router.post('/signin', async (req, res) => {
    try {
      // find user by email in db
      const user = await userModel.findOne({email: req.body.email})
      if (!user) return res.send('Please check your email and password!')
      // checks if passwords match
      const decodedPassword = await bcrypt.compare(req.body.password, user.password)
      if (!decodedPassword) return res.send('Please check your email and password!')
      // set the user session
      // create a new username in the session obj using the user info from db
      req.session.username = user.username
      req.session.loggedIn = true
      // redirect to /blogs
      res.redirect('/blog')
    } catch (error) {
      console.log(error);
    }
  })


  router.get('/signout', (req, res) => {
    try {
      req.session.destroy()
      res.redirect('/')
    } catch (error) {
      console.log(error);
    }
  })


// GET: Blog by ID
router.get('/:id', async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id)
        res.send(user)
    } catch (error) {
        console.log(error);
        res.status(403).send('Cannot get user by id')
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