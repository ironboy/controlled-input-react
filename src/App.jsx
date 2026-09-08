import { Outlet } from "react-router";
import MainNav from "./MainNav";


export default function App() {
  return <>
    <header><MainNav /></header>
    <main><Outlet /></main>
    <footer>© {new Date().getFullYear()} The Company</footer>
  </>;
}