import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import ResetPassword from "./pages/ResetPassword";
import { Error } from "./pages";
import {
  AddJob,
  AllJobs,
  Profile,
  SharedLayout,
  Stats,
  HomePage
} from "./pages/Dashboard";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
          <Route path="stats" element={<Stats />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/reset-password/:id" element={<ResetPassword />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
