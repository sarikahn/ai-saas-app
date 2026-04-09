import { Navigate } from "react-router-dom";

// Check if user is logged in
const isAuth = () => {
  return localStorage.getItem("token");
};

export default function PrivateRoute({ children }) {
  return isAuth() ? children : <Navigate to="/" />;
}