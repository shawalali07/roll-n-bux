import { Navigate, Route, Routes } from "react-router-dom";
import { appRoutes } from "./constants/appRoutes";
import { browserRoutes } from "./routes/browserRoutes";
import Layout from "./layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to={browserRoutes.DASHBOARD} />} />
        <Route path={browserRoutes.DASHBOARD} element={<Layout />}>
          {appRoutes?.map((route) => (
            <Route key={route.id} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
