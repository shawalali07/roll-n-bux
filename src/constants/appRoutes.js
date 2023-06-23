import Dashboard from "../pages/Dashboard";
import { browserRoutes } from "../routes/browserRoutes";

export const appRoutes = [
  {
    id: 1,
    path: browserRoutes.DASHBOARD,
    element: <Dashboard />,
  },
];
