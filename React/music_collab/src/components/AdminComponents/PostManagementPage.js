import React from 'react'
import PostTable from './PostTable'
import 'react-router-dom'


class PostManagementPage extends React.Component {

  //a get request will be made to the server to get the post details

  render() {
    return (
      <div className='management-container'>
        <PostTable setLog={this.props.setLog} posts={this.props.posts} setPosts = {this.props.setPosts}/>
      </div>
    )
  }
}

export default PostManagementPage;