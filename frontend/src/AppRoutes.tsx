import { Navigate, Route, Routes } from "react-router-dom";

const appRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<span>Home Page</span>} />
      <Route path="/user-profile" element={<span>user profile Page</span>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default appRoutes;
