import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";
// const App = () => {
//  return <CustomComponent>
//    <Text>Hi there!</Text>
//  </CustomComponent>
// }
//
// the text element, because it is wrapped inside the CustomComponent
// will be passed down as a prop from  App to the CustomComponent named
// "children"
//
//

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogposts":
      return action.payload;

    case "delete_blogpost":
      return state.filter(blogPost => blogPost.id !== action.payload);

    case "edit_blogpost":
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });

    default:
      return state;
  }
};

const getBlogPosts = dispatch => {
  return async () => {
    // any route will be concatenated with the baseURL in jsonserver
    const response = await jsonServer.get("/blogposts");
    // response.data === [{}, {}, {}]
    dispatch({ type: "get_blogposts", payload: response.data });
  };
};

const addBlogPost = dispatch => {
  return async (title, content, callback) => {
    await jsonServer.post("/blogposts", { title, content });
    if (callback) callback();
  };
};

const deleteBlogPost = dispatch => {
  return async id => {
    // delete on the server side
    await jsonServer.delete(`/blogposts/${id}`);
    // delete from the client side (local)
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

const editBlogPost = dispatch => {
  return async (id, title, content, callback) => {
    // server side
    await jsonServer.put(`/blogposts/${id}`, { title, content });
    // client side
    dispatch({ type: "edit_blogpost", payload: { id, title, content } });
    if (callback) callback();
  };
};

export const { Context, Provider } = createDataContext(blogReducer, {
  addBlogPost,
  deleteBlogPost,
  editBlogPost,
  getBlogPosts
});
