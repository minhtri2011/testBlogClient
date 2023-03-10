import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api";

function* fetchPostSaga(action) {
  try {
    const posts = yield call(api.fetchPosts);
    yield put(actions.getPosts.getPostsSuccess(posts.data));
  } catch (error) {
    console.log(error);
    yield put(actions.getPosts.getPostsFailure(error))
  }
}

function* createPostSaga(action) {
  try {
    const posts = yield call(api.createPost,action.payload);
    yield put(actions.createPost.createPostSuccess(posts.data));
    yield put(actions.hideModal())
  } catch (error) {
    console.log(error);
    yield put(actions.createPost.createPostFailure(error))
  }
}

function* updatePostSaga(action) {
  try {
    const posts = yield call(api.updatePost,action.payload);
    yield put(actions.updatePost.updatePostSuccess(posts.data));
    yield put(actions.hideModal())
  } catch (error) {
    console.log(error);
    yield put(actions.updatePost.updatePostFailure(error))
  }
}

function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga);
  yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
  yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
}

export default mySaga;
