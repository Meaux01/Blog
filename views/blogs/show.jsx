const React = require('react')
const Navbar = require('../components/Navbar')

class Show extends React.Component {
    render(){
        const {blog} = this.props
        return(<div>
            <head>
                <link rel="stylesheet" href="/CSS/app.css" />
            </head>

            <Navbar/>

            <h1>{blog.title}</h1><br />

             <h4>{blog.author}</h4><br />

             <p>{blog.body}</p>

             <h6>{blog.likes}</h6>
           </div>
        )
    }
}

module.exports= Show