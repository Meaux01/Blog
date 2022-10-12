const React = require('react')

class Blogs extends React.Component {
    render(){
        const {blogs} = this.props
        return(<div>
            <h1>Blogs</h1>
            <ul>
                {blogs.map((blog)=>(
                    <div>
                        <a href={`blog/${blog._id}`}>{blog.title}</a>
                    </div>
                ))}
            </ul>
        </div>)
    }
}

module.exports= Blogs