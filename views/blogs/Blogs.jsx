const React = require('react')
const Navbar = require('../components/Navbar')


class Blogs extends React.Component {
    render(){
        const {blogs} = this.props
        return(<div>
             <head>
                <link rel="stylesheet" href="/CSS/app.css" />
            </head>
            <Navbar/>
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