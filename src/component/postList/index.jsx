import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import Post from "./post";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { postsState } from "../../redux/selectors";

export default function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(postsState);
  useEffect(() => {
    dispatch(actions.getPosts.getPostsRequest());
  }, [dispatch]);
  return (
    <Grid container spacing={2} alignItems="stretch">
      {posts?.map((post) => (
        <Grid key={post._id} item sm={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
}
