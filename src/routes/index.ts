import { RouteData } from "../types";
import { LoginPage } from "../modules/login";
import { MainPage } from "../modules/app";
import { UsersPage } from "../modules/users";

const routes: RouteData[] = [
  { path: "/", component: MainPage, menuLabel: "Главная" },
  { path: "/users", component: UsersPage, menuLabel: "Пользователи" },
  { path: "/login", component: LoginPage, menuLabel: "Профиль" },
  { component: MainPage }
];

export default routes;
