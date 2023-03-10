import { Typography } from "@material-ui/core";
import useStyle from './style';

export default function Header() {
  const classes = useStyle()
  return (
    <Typography variant="h4" align="center" className={classes.container}> Blog </Typography>
  );
}
