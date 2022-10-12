const React = require('react')

class Show extends React.Component {
    render(){
        const {blog} = this.props
        return(<div>
            <h1>{blog.title}</h1><br />

             <h4>{blog.author}</h4><br />

             <p>{blog.body}</p>

             <h6>{blog.likes}</h6>
           </div>
        )
    }
}

module.exports= Show