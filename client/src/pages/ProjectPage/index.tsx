import { useEffect, useState } from "react";
import MaterialSymbolsAddBoxSharp from "../../components/project/Icon";
import ProjectItem from "../../components/project/Item";
import styles from "./ProjectPage.module.scss";
import Modal from "../../components/shared/Modal";
import ModalContent from "../../components/project/ModalContent";
import { GET_PROJECTS } from "../../redux/actionTypes";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../../helpers/formatDate";
import { Project } from "../../types/projectsTypes";
import { LoadTask } from "../../redux/modules/tasks/actions";

const ProjectPage = () => {
  const projects = useSelector(
    (store: { projects: Project[] }) => store.projects || []
  );
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchProjects() {
      dispatch({ type: GET_PROJECTS });
      dispatch(LoadTask());
    }
    fetchProjects();
  }, [dispatch]);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <main className={styles.container}>
      {isOpenModal && (
        <Modal id="project">
          <ModalContent onClose={setIsOpenModal} />
        </Modal>
      )}
      {projects.length === 0 ? (
        <h1>
          Список <span className={styles.highlight}>проектов</span>
        </h1>
      ) : (
        <h1>
          Создать <span className={styles.highlight}>проект</span>
        </h1>
      )}
      <section className={styles.list}>
        <MaterialSymbolsAddBoxSharp
          className={styles.icon}
          onClick={() => toggleModal()}
        />
        {projects.length > 0 && (
          <ul className={styles.project_list}>
            {projects
              .sort((a: Project, b: Project) => b.id - a.id)
              .map((item: Project) => (
                <ProjectItem
                  key={item.id}
                  name={item.title || ""}
                  id={item.id.toString()}
                  date={formatDate(item.created_at)}
                />
              ))}
          </ul>
        )}
      </section>
    </main>
  );
};

export default ProjectPage;
