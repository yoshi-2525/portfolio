import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import WorksPage from "./pages/WorksPage";
import WorksDetailPage from "./pages/WorksDetailPage";
import LearningPage from "./pages/LearningPage";
import LearningDetailPage from "./pages/LearningDetailPage";
import CommitmentPage from "./pages/CommitmentPage";
import DreamsPage from "./pages/DreamsPage";
import ProfilePage from "./pages/ProfilePage";

export const router = createBrowserRouter([
  { path: "/", Component: HomePage },
  { path: "/works", Component: WorksPage },
  { path: "/works/:id", Component: WorksDetailPage },
  { path: "/learning", Component: LearningPage },
  { path: "/learning/:id", Component: LearningDetailPage },
  { path: "/commitment", Component: CommitmentPage },
  { path: "/dreams", Component: DreamsPage },
  { path: "/profile", Component: ProfilePage },
]);
