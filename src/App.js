import { useDispatch } from "react-redux";
import HomePage from "./pages/homePage";
import * as actions from "./redux/actions";
// import dotEnv from 'dotenv'
function App() {
  // dotEnv.config()
  // const dispatch = useDispatch();
  // dispatch(actions.getPosts.getPostsRequest());
console.log(process.env.REACT_APP_URL);
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
