import Demo from "../page/demo";
import Home from "../page/home";
import Issue from "../page/issue";
import Login from "../page/login";
import Register from "../page/register";
import UserType from "../page/userType";
import ViewProfile from "../page/viewProfile";
import Navigation from "../page/Navigation";
import LayoutTop from "../page/LayoutTop.1";
import LayoutSide from "../page/LayoutSide";
import EmpList from "../page/EmpList";
import AdminDash from "../page/AdminDash";
import AddEmp from "../page/AddEmp";


const routes = [
  {
    path: "/",
    component: Home,
    title: "Home:ChargeBack Calcuator",
  },
  {
    path: "/home",
    component: Home,
    title: "Home:ChargeBack Calcuator",
  },
  {
    path: "/demo",
    component: Demo,
    title: "Demo:ChargeBack Calcuator",
  },
  {
    path: "/userselection",
    component: UserType,
    title: "User Selection",
  },
  {
    path: "/issue",
    component: Issue,
    title: "Issue Page",
  },
  {
    path: "/login",
    component: Login,
    title: "Login",
  },
  {
    path: "/register",
    component: Register,
    title: "Issue Page",
  },
  {
    path: "/view-profile",
    component: ViewProfile,
    title: "Profile",
  },
  {
    path: "/Navigation",
    component: Navigation,
    title: "Navigation",
  },
  {
    path: "/LayoutTop",
    component: LayoutTop,
    title: "LayoutTop",
  },
  {
    path: "/LayoutSide",
    component: LayoutSide,
    title: "LayoutSide",
  },
  {
    path: "/EmpList",
    component: EmpList,
    title: "EmpList",
  },
  {
    path: "/AdminDash",
    component: AdminDash,
    title: "AdminDash",
  },
  {
    path: "/AddEmp",
    component: AddEmp,
    title: "AddEmp",
  },
];

export default routes;
