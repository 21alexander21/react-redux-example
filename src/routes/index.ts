import { RouteData } from "../types";
import { LoginPage } from "../modules/login";
import { MainPage } from "../modules/app";

const routes: RouteData[] = [
  { path: "/", component: MainPage, menuLabel: "Главная" },
  { path: "/login", component: LoginPage, menuLabel: "Профиль" },
  { component: MainPage }
];

export default routes;
