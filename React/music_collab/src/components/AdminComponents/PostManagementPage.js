import React, {  useState  } from 'react'
import PostTable from './PostTable'
import 'react-router-dom'


class PostManagementPage extends React.Component {

  render() {
    return (
      <div className='box-title'>
        <PostTable posts={this.props.posts} setPosts = {this.props.setPosts}/>
      </div>
    )
  }
}

export default PostManagementPage;