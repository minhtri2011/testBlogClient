import { INIT_STATE } from "../../constants";
import { getPosts, getType, createPost, updatePost } from "../actions";

export default function postsReducers(state = INIT_STATE.posts, actions) {
  switch (actions.type) {
    case getType(getPosts.getPostsRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getPosts.getPostsSuccess):
      return {
        ...state,
        isLoading: false,
        data: actions.payload,
      };
    case getType(getPosts.getPostsFailure):
      return {
        ...state,
        isLoading: false,
      };
    case getType(createPost.createPostSuccess):
      return {
        ...state,
        data: [...state.data, actions.payload],
      };
    case getType(updatePost.updatePostSuccess):
      return {
        ...state,
        data: state.data.map((post) =>
          post._id === actions.payload._id ? actions.payload : post
        ),
      };
    default:
      return state;
  }
}
