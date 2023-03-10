import { Button, TextareaAutosize, TextField } from "@material-ui/core";
import Modal from "@mui/material/Modal";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalState } from "../../redux/selectors";
import useStyles from "./style";
import FileBase64 from "react-file-base64";
import { createPost, hideModal } from "../../redux/actions";

export default function CreatePostModal() {
  const [data, setData] = useState({
    content: "",
    attachment: "",
    title: "",
  });
  const { isShow } = useSelector(modalState);
  const classes = useStyles();
  const dispatch = useDispatch();

  const onClose = useCallback(() => {
    dispatch(hideModal());
    setData({
      content: "",
      attachment: "",
      title: "",
    });
  }, [dispatch]);

  const onSubmit = useCallback(() => {
    dispatch(createPost.createPostRequest(data));
  }, [data]);

  useEffect(() => console.log(data), [data]);

  const body = (
    <div className={classes.paper} id="simple-modal-title">
      <h2>Create New Post</h2>
      <form action="" autoComplete="off" noValidate className={classes.form}>
        <TextField
          className={classes.title}
          required
          label="Title"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <TextareaAutosize
          className={classes.textarea}
          onChange={(e) => setData({ ...data, content: e.target.value })}
          minRows={10}
          maxRows={15}
          placeholder="Content.."
          value={data.content}
        />
        <FileBase64
          multiple={false}
          onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
        />
        <div className={classes.footer}>
          <Button
            variant="contained"
            color="primary"
            component="span"
            fullWidth={true}
            onClick={onSubmit}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <Modal open={isShow} onClose={onClose}>
        <>{body}</>
      </Modal>
    </div>
  );
}
