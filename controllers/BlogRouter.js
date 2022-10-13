const express = require('express')
const BlogModel = require('../models/BlogSchema')

const router = express.Router()

// GET: All Blogs
router.get('/', async (req, res) => {
    try {
        const blogs = await BlogModel.find({})
        res.render('blogs/Blogs.jsx',{blogs})
    } catch (error) {
        console.log(error);
        res.status(403).send('Cannot get')
    }
})
router.get('/new', async (req, res) => {
    // res.send('words')
    res.render('blogs/New.jsx')
})

// GET: Blog by ID
router.get('/:id', async (req, res) => {
    try {
        const blog = await BlogModel.findById(req.params.id)
        res.render('blogs/show.jsx',{blog})
    } catch (error) {
        console.log(error);
        res.status(403).send('Cannot get')
    }
})
// POST: CREATE a New Blog
// ^ Create a new Blog
router.post('/', async (req, res) => {
    // ^ Try-Catch Method
    try {
        if (req.body.sponsored === "on") {
            req.body.sponsored = true;
          } else {
            req.body.sponsored = false;
          }
      
        const newBlog = await BlogModel.create(req.body)
        console.log(newBlog)
        res.redirect('/blog')
        // res.send('Blog successfully created!')
    } catch(error) {
        console.log(error)
        res.status(403).send('Cannot create')
    }
})

// PUT: Update By ID
router.put('/:id', async (req, res)=> {
   try {
    const updatedBlog = await BlogModel.findByIdAndUpdate(req.params.id, req.body, {'returnDocument' :"after"})
    res.send(updatedBlog)
   } catch (error) {
        console.log(error);
        res.status(403).send('Cannot put')
   }
})


// DELETE
router.delete('/:id', async (req, res) => {
    try {
        const deletedBlog = await BlogModel.findByIdAndRemove(req.params.id)
        console.log(deletedBlog);
        res.send('Blog Deleted')
    } catch (error) {
        console.log(error);
        res.status(403).send('Cannot put')
    }
})

module.exports = router;