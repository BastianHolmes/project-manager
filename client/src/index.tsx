import ReactDOM from "react-dom/client";
import "./main.module.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage/ui";
import TaskPage from "./pages/TaskPage/ui";
import { Provider } from "react-redux";
import store from "./redux/configureStore";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProjectPage />} />
            <Route path="/:id/tasks" element={<TaskPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </DndProvider>
  );
}
