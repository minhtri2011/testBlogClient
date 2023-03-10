import { Container, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import CreatePostModal from "../component/createPostModal";
import Header from "../component/header";
import PostList from "../component/postList";
import { showModal } from "../redux/actions";
import useStyles from "./style";

export default function HomePage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const openCreatePostModal = useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  return (
    <Container maxWidth="lg" className="">
      <Header />
      <PostList />
      <CreatePostModal />
      <Fab
        className={classes.fab}
        color="primary"
        onClick={openCreatePostModal}
      >
        <AddIcon />
      </Fab>
    </Container>
  );
}
