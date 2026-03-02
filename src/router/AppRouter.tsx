import { Route, Routes } from "react-router-dom";
import App from "@/App.tsx";
import ProjectDetails from "@/components/ProjectDetails";
import HomePage from "@/components/HomePage";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
