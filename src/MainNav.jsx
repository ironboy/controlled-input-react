import { NavLink } from "react-router";
import routes from "./routes";

export default function MainNav() {
  return routes.map(({ label, path }) =>
    <NavLink key={path} to={path}>{label}</NavLink>);
}