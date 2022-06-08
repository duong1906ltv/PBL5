import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetPassword from "./pages/ResetPassword";
import Welcome from "./pages/WelcomePage";
import { AddPost, Error, Landing, Register } from "./pages/index";
import "bootstrap/dist/css/bootstrap.min.css";
import Resending from "./pages/Resending";
import {
  AddJob,
  AllPosts,
  ProfileTest,
  SharedLayout,
  Chat,
  ChangePassword,
  HomePage,
  DetailPost,
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
          <Route path="all-jobs" element={<AllPosts />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile/" element={<ProfileTest />}>
            <Route path=":id" element={<ProfileTest />} />
          </Route>
          <Route path="ChangePassword" element={<ChangePassword />} />
          <Route path="chat" element={<Chat />} />
          <Route path="/addpost" element={<AddPost />} />
          <Route path="detail-post/" element={<DetailPost />}>
            <Route path=":id" element={<DetailPost />} />
          </Route>
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/reset-password/:id" element={<ResetPassword />} />
        <Route path="/resending" element={<Resending />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
