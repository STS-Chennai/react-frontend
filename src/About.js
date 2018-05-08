import React, { Component } from "react";
import { connect } from 'react-redux';
import {postList} from './actions'
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (this.props.posts == null) {
      const {dispatch} = this.props;
      dispatch(postList());
    }
  }
  render() {
    console.log("********", this.props.posts);
    let postLists = "";
    if (this.props.posts) {
      postLists = this.props.posts.map((list) =>
                          <li key={list.id}>
                            {list.title}
                          </li>
                        );
    }

    return (
      <div>
        <h2>About</h2>
        <p>Services</p>
        <ol>
          {postLists}
        </ol>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
  };
}

function mapStateToProps(state) {
  return {
    posts: state[0] ? state[0]['posts'] : null,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(About);