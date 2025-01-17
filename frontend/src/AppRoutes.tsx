import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";

const appRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout>Home Page</Layout>} />
      <Route path="/user-profile" element={<span>user profile Page</span>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default appRoutes;
