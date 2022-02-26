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
import EmpLayoutTop from "../page/EmpLayoutTop";
import EmpLayoutSide from "../page/EmpLayoutSide";
import EmpDash from "../page/EmpDash";
import EmpProfileEdit from "../page/EmpProfileEdit";
import UserLayoutTop from "../page/UserLayoutTop";
import UserLayoutSide from "../page/UserLayoutSide";
import UserDash from "../page/UserDash";
import UserRaise from "../page/UserRaise";
import UserStatements from "../page/UserStatements";
import UserRaiseIssue from "../components/UserRaiseIssue.components";
import UserTrackissue from "../page/UserTrackissue";

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
  {
    path: "/EmpDash",
    component: EmpDash,
    title: "EmpDash",
  },
  {
    path: "/EmpLayoutTop",
    component: EmpLayoutTop,
    title: "EmpLayoutTop",
  },
  {
    path: "/EmpLayoutSide",
    component: EmpLayoutSide,
    title: "EmpLayoutSide",
  },
  {
    path: "/EmpProfileEdit",
    component: EmpProfileEdit,
    title: "EmpProfileEdit",
  },
  {
    path: "/UserDash",
    component: UserDash,
    title: "UserDash",
  },
  {
    path: "/UserRaise",
    component: UserRaise,
    title: "UserRaise",
  },
  {
    path: "/UserLayoutTop",
    component: UserLayoutTop,
    title: "UserLayoutTop",
  },
  {
    path: "/UserLayoutSide",
    component: UserLayoutSide,
    title: "UserLayoutSide",
  },
  {
    path: "/UserStatements",
    component: UserStatements,
    title: "UserStatements",
  },
  {
    path: "/UserRaiseIssue",
    component: UserRaiseIssue,
    title: "UserRaiseIssue",
  },
  {
    path: "/UserTrackissue",
    component: UserTrackissue,
    title: "UserTrackissue",
  },

];

export default routes;
