import Introduce from "../Introduce";
import App from "../app";
console.log();
export default [
  {
    path: "/",
    component: Introduce,
    redirect: "/introduce"
  },
  {
    path: "/introduce",
    component: Introduce
  }
];
