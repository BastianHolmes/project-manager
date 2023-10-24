import styles from "./ProjectPage.module.scss";
import { useState } from "react";
import MaterialSymbolsAddBoxSharp from "../../../shared/Icons/IconAdd";
import Modal from "../../../shared/components/Modal";
import ModalContent from "../../../features/Projects/create-project/ui/ProjectModal";
import Pagination from "../../../shared/components/Pagination";
import Loader from "../../../shared/components/Loader";
import { useLoading } from "../../../shared/hooks/useLoading";
import { useProjects } from "../utils/useProjects";
import ProjectList from "../../../widgets/ProjectList";

const ProjectPage = ({}) => {
  const allProjects = useProjects();
  const Loading = useLoading();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  //Sets items per page for pagination
  const itemsPerPage = 4;

  const indexOfFirstProject = (currentPage - 1) * itemsPerPage;
  const indexOfLastProject = indexOfFirstProject + itemsPerPage;
  const projects = Array.isArray(allProjects)
    ? allProjects.slice(indexOfFirstProject, indexOfLastProject)
    : [];

  const totalPages = Math.ceil(allProjects.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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
      <h1>
        Мои <span className={styles.highlight}>проекты</span>
      </h1>
      <section className={styles.list}>
        <MaterialSymbolsAddBoxSharp
          className={styles.icon}
          onClick={() => toggleModal()}
        />
        {Loading ? (
          <Loader />
        ) : (
          projects.length > 0 && (
            <ProjectList
              projects={projects}
              indexOfFirstProject={indexOfFirstProject}
            />
          )
        )}
      </section>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </main>
  );
};

export default ProjectPage;
