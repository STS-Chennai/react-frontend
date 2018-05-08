const posts = (state = [], action) => {
  console.log(action, state);
  switch (action.type) {
    case 'POST_LIST':
      return [
        ...state,
        {
          posts: action.posts,
        }
      ]
    default:
      return state
  }
}
export default posts