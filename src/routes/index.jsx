import Pages from "layouts/Pages/Pages.jsx";
import Dashboard from "layouts/Dashboard/Dashboard.jsx";
//import Login from "layouts/pages/Login.jsx";

var indexRoutes = [
  { path: "/pages", name: "Pages", component: Pages },
  { path: "/", name: "Home", component: Dashboard } 
  // { path: "/", name: "Login", component: Login }
];


export default indexRoutes;
