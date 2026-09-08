import { createBrowserRouter } from "react-router";
import UserList from './UserList';
import UserRegForm from "./UserRegForm";

export default [
  {
    label: "Användare",
    path: "/",
    element: <UserList />
  },
  {
    label: "Registrera användare",
    path: "/user-registration",
    element: <UserRegForm />
  }
];