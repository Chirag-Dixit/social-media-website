import { Route, Routes, redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage";
import SignUp from "./Components/auth/SignUp";
import LogIn from "./Components/auth/LogIn";
import Profile from "./Components/Profile";
import CreatePost from "./Components/posts/CreatePost";
import Users from "./Components/Users";
import SetupPage from "./Components/SetupPage";
import CommentsPage from "./Components/CommentsPage";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<LogIn />} />
          <Route path="profile" element={<Profile/>} />
          <Route path="users/:user" element={<Users/>}/>
          <Route path="createpost" element={<CreatePost />} />
          <Route path="setup" element={<SetupPage />} />
          <Route path="post/:postId" element={<CommentsPage />} />
        </Routes>
      </div>
  );
}

export default App;
