import React from 'react';
import './styles.css';
import SearchBar from './SearchBar';
import {Link} from 'react-router-dom';

class PostTable extends React.Component {
    state = {
        selected: [],
        query: ""
    }

    queryCallBack = (childData) => {
        this.setState({
            query: childData
        })
    }

    tableHeader() {
        return(
            <tr>
                <th id='inputText'> Select </th>
	 			<th id='inputText'> Post ID </th>
                <th id='inputText'> Title </th>
	 			<th id='inputText'> Genre </th>
	 			<th id='inputText'> User </th>
                <th id='inputText'> Date Posted </th>
                <th id='inputText'> Edit </th>
                <th id='inputText'> View </th>
                <th id='inputText'> Delete </th>
            </tr>
        )
    }

    removePost = (post) => {
        const filteredPosts = this.props.posts.filter((p) => { return p !== post })
        this.props.setPosts(filteredPosts)
        this.props.setLog("removed post '" + post.name + "'")
    }

    handleChange = (post) => {
        const selectedList = this.state.selected
        const find = selectedList.indexOf(post)
      
        if (find > -1) {
          selectedList.splice(find, 1)
        } else {
          selectedList.push(post)
        }
      
        this.setState({
            selected: selectedList
        })
    }

    deleteSelected = () => {
        const selected = this.state.selected
        let postList = this.props.posts
        for (let post of selected ) {
            let filteredList = postList.filter((p) => { return p !== post })
            postList = filteredList
            this.props.setLog("removed post '" + post.name + "'")
        }
        this.setState({
            selected: []
        })
        this.props.setPosts(postList)
    }

    filterPosts = (posts, query) => {
        if (query === "") {
            return this.tableData(this.props.posts)
        }
        const lowerQuery = query.toLowerCase()

        const filteredList =  posts.filter((post) => {
            const name = post.name.toLowerCase()
            return name.includes(lowerQuery)
        })

        return this.tableData(filteredList)
    };


    tableData = (searchResult) => {
        return searchResult.map((post) => {
            return (
                <tr key= {post.postID}>
                    <td><input type="checkbox" onChange={ () => this.handleChange(post) }/></td>
                    <td id='inputText'>{post.postID}</td>
                    <td id='inputText'>{post.name}</td>
                    <td id='inputText'>{post.genre}</td>
                    <td id='inputText'>{post.user}</td>
                    <td id='inputText'>{post.date}</td>
                    <td><Link to='/CoverPageSettings'><button type="edit">Edit</button></Link></td>
                    <td><Link to='/CoverPage'><button type="view">View</button></Link></td>
                    <td><button type="select" onClick={ () => this.removePost(post) }>Delete</button></td>
                </tr>
            )
        })
    }

   render() { 
      return (
        <div className="table-container">
            <h3 className="box-title">Post Management</h3>
                <SearchBar parentCallBack={ this.queryCallBack }/>
                <table className='table'>
                <tbody>
                        { this.tableHeader() }
                        { this.filterPosts(this.props.posts, this.state.query) }
                </tbody>
                </table>
                <div className='footer'>
                    <button id='right-button' type="deleteAll" onClick={ this.deleteSelected }>Delete Selected</button>
                </div>
        </div>
      )
   }
}

export default PostTable