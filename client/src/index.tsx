import React from "react";
import ReactDOM from "react-dom/client";
import "./main.module.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import TaskPage from "./pages/TaskPage";
import { Provider } from "react-redux";
import store from "./redux/configureStore";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={ProjectPage} />
        <Route path="/:id/tasks" Component={TaskPage} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
