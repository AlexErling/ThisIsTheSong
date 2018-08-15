import React, {Component} from 'react';
import Post from './../posts/Post.js';

class Search extends Component {

    render() {
      const results = this.props.location.state.results
      return(

        <div>
          <div className = "heading centered">
            <h3> Search results for: </h3>
            <h5>{this.props.match.params.query}</h5>
          </div>
          <div>
          {results.map((post) => {
            return(
                <Post key = {post.id} post={post}/>
            )
          })}
          </div>
        </div>
      );
    }
}

export default Search
