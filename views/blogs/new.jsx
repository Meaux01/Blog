const React = require('react')
const Navbar = require('../components/Navbar')

class NewBlog extends React.Component{
render(){
    return(
        <div>
            <head>
                <link rel="stylesheet" href="/CSS/app.css" />
            </head>
            <Navbar/>
            <div style={{display: 'flex', justifyContent: 'center'}}>
        
        <form style={styles.container} action='/blog' method='post'>
        <h1>Create a new Blog</h1>

        <input type="text" name="title" placeholder="title" required/><br/>

        
        <textarea  name="body" placeholder="body" rows="24" cols="50" required /><br />

       
        {/* <input type="text" name="author" placeholder="author" required/><br /> */}

        <div>
        <label>sponsored?</label>
        <input type="checkbox" name="sponsored" /><br />
        </div>
        
        <input type="submit" value="create blog" />
      </form>
      </div>
        </div>
    )
}

}
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

    }
}

module.exports = NewBlog