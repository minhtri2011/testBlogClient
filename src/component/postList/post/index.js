import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React, { useCallback } from "react";
import moment from "moment";
import useStyles from "./style";
import { useDispatch } from "react-redux";
import { updatePost } from "../../../redux/actions";

export default function Post({ post }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const onLikeBtnClick = useCallback(() => {
    dispatch(updatePost.updatePostRequest({...post,likeCount : post.likeCount+1}));
  },[dispatch,post]);
  return (
    <Card>
      <CardHeader
        avatar={<Avatar>A</Avatar>}
        title={post.author}
        subheader={moment(post.updatedAt).format("HH:MM MMM DD, YYYY")}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardMedia
        image={post.attachment}
        className={classes.media}
        component="img"
        title="title"
      />
      <CardContent>
        <Typography variant="h5" color="textPrimary">
          {post.title}
        </Typography>
        <Typography variant="body2" component="p" color="textPrimary"> 
          {post.content}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={onLikeBtnClick}>
          <FavoriteIcon  />
          <Typography component="span" color="textSecondary">
            {post.likeCount}
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}
