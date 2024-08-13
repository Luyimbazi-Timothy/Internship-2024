import axios from "axios";
import urlConfig from "../Urls";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DisplaySidebarContext } from "../../components/contextHook/useDisplayContext";

const useAuthService = () => {
  const navigate = useNavigate();
  const { setDisplaySidebarPanel } = useContext(DisplaySidebarContext);

  const login = async (username, password, setError) => {
    console.log(username, password);
    const loginUrl = urlConfig.loginUrl;
    try {
      const response = await axios.post(loginUrl, { username, password });

      if (response.status === 200) {
        const loggedInAs = response.data.lastName;
        const loggedInId = response.data.userId;

        console.log(loggedInId);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("loggedInAs", loggedInAs);
        localStorage.setItem("loggedInId", loggedInId);
        setDisplaySidebarPanel(true);
        navigate("/dashboard");
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      if (error.response.status === 500) {
        setError("Invalid username or password");
      } else if (error.response.status === 400) {
        setError("Empty Inputs");
      } else {
        throw error;
      }
    }
  };
  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    setDisplaySidebarPanel(false);
    navigate("/login");
  };

  const isLoggedIn = () => {
    return localStorage.getItem("isLoggedIn") === "true";
  };

  return { login, logout, isLoggedIn };
};

export default useAuthService;
