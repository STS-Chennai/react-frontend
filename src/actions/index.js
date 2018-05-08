import axios from 'axios';
export const postList = () => {
  return dispatch => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/`)
      .then(res => {
        const posts = res.data;
        return dispatch({type:'POST_LIST', posts: posts});
      });
  }
}