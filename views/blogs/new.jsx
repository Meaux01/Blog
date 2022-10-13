const React = require('react')

class NewBlog extends React.Component{
render(){
    return(
        <div>
            <h6>Create New Blog</h6>
            <form action="/new" method='POST'>
                Title:<input type="text" name="title" />
                Author<input type="text" name="author" /><br /><br />
                Body:<textarea type="text" name="body" rows={'4'} cols={'10'} /><br />
                
            </form>
        </div>
    )
}

}

module.exports = NewBlog