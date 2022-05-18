import IRoute from "../interfaces/routes";
import Overview from "../pages/overview";
import Finance from "../pages/finance";
import Options from "../pages/options";

export const routes: IRoute[] = [
  {
    path: "/",
    exact: true,
    name: "Overview!",
    component: <Overview />,
  },
  {
    path: "/finance",
    exact: true,
    name: "Finance!",
    component: <Finance />,
  },
  {
    path: "/reports",
    exact: true,
    name: "shoelaces!",
    component: <h2>Shoelaces</h2>,
  },
  {
    path: "/options",
    exact: true,
    name: "Options!",
    component: <Options />,
  },
];
