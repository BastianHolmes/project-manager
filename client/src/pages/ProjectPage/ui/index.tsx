import { useState } from "react";
import MaterialSymbolsAddBoxSharp from "../../../shared/Icons/IconAdd";
import { ProjectItem } from "../../../entities/Projects";
import styles from "./ProjectPage.module.scss";
import Modal from "../../../shared/components/Modal";
import ModalContent from "../../../features/Projects/create-project/ui/ProjectModal";
import { formatDate } from "../../../shared/helpers/formatDate";
import { Project } from "../../../shared/types/types";
import Pagination from "../../../shared/components/Pagination";
import Loader from "../../../shared/components/Loader";
import { useLoading } from "../../../shared/hooks/useLoading";
import { useProjects } from "../utils/useProjects";

const ProjectPage = ({}) => {
  const { projects: allProjects } = useProjects();
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
                    number={(indexOfFirstProject + index + 1).toString()}
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
