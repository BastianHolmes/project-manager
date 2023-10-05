import { useEffect, useState } from "react";
import MaterialSymbolsAddBoxSharp from "../../components/shared/Icon";
import ProjectItem from "../../components/project/Item";
import styles from "./ProjectPage.module.scss";
import Modal from "../../components/shared/Modal";
import ModalContent from "../../components/project/ProjectModalContent";
import { formatDate } from "../../helpers/formatDate";
import { Project } from "../../types/projectsTypes";
import Pagination from "../../components/shared/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { LoadTask } from "../../redux/modules/tasks/actions";
import { getProjects } from "../../redux/modules/projects/actions";

const ProjectPage = () => {
  const allProjects = useSelector(
    (store: { projects: Project[] }) => store.projects || []
  );
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchProjects() {
      dispatch(getProjects());
      dispatch(LoadTask());
    }
    fetchProjects();
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const indexOfFirstProject = (currentPage - 1) * itemsPerPage;
  const indexOfLastProject = indexOfFirstProject + itemsPerPage;
  const projects = Array.isArray(allProjects)
    ? allProjects.slice(indexOfFirstProject, indexOfLastProject)
    : [];

  const totalPages = Math.ceil(allProjects.length / itemsPerPage);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className={styles.container}>
      {isOpenModal && (
        <Modal id="project">
          <ModalContent onClose={setIsOpenModal} />
        </Modal>
      )}
      {allProjects.length === 0 ? (
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
              .sort((a: Project, b: Project) => a.id - b.id)
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
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </main>
  );
};

export default ProjectPage;
