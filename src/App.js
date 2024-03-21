import { Route, Routes, redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage";
import SignUp from "./Components/auth/SignUp";
import LogIn from "./Components/auth/LogIn";
import Profile from "./Components/Profile";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<LogIn />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
