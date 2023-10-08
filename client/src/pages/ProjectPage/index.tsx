import { useState } from "react";
import MaterialSymbolsAddBoxSharp from "../../components/shared/Icon";
import ProjectItem from "../../components/project/Item";
import styles from "./ProjectPage.module.scss";
import Modal from "../../components/shared/Modal";
import ModalContent from "../../components/project/ProjectModalContent";
import { formatDate } from "../../helpers/formatDate";
import { Project } from "../../types/projectsTypes";
import Pagination from "../../components/shared/Pagination";
import Loader from "../../components/shared/Loader";
import { useGetInfo } from "../../hooks/useGetInfo";
import { useLoading } from "../../hooks/useLoading";

const ProjectPage = () => {
  const { projects: allProjects } = useGetInfo();
  const Loading = useLoading();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

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
      {allProjects.length === 0 ? (
        <h1>
          Создать <span className={styles.highlight}>проект</span>
        </h1>
      ) : (
        <h1>
          Мои <span className={styles.highlight}>проекты</span>
        </h1>
      )}
      <section className={styles.list}>
        <MaterialSymbolsAddBoxSharp
          className={styles.icon}
          onClick={() => toggleModal()}
        />
        {Loading ? (
          <Loader />
        ) : (
          projects.length > 0 && (
            <ul className={styles.project_list}>
              {projects
                .sort((a: Project, b: Project) => a.id - b.id)
                .map((item: Project, index) => (
                  <ProjectItem
                    number={indexOfFirstProject + index + 1}
                    key={item.id}
                    name={item.title || ""}
                    id={item.id ? item.id.toString() : ""}
                    date={
                      item.created_at
                        ? formatDate(item.created_at.toString())
                        : ""
                    }
                  />
                ))}
            </ul>
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
