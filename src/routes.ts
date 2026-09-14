import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import WorksPage from "./pages/WorksPage";
import LearningPage from "./pages/LearningPage";
import CommitmentPage from "./pages/CommitmentPage";
import DreamsPage from "./pages/DreamsPage";
import ProfilePage from "./pages/ProfilePage";

export const router = createBrowserRouter([
  { path: "/", Component: HomePage },
  { path: "/works", Component: WorksPage },
  { path: "/learning", Component: LearningPage },
  { path: "/commitment", Component: CommitmentPage },
  { path: "/dreams", Component: DreamsPage },
  { path: "/profile", Component: ProfilePage },
]);
