import { useEffect, useState } from "react";
import MaterialSymbolsAddBoxSharp from "../../components/project/Icon";
import ProjectItem from "../../components/project/Item";
import styles from "./ProjectPage.module.scss";
import Modal from "../../components/shared/Modal";
import ModalContent from "../../components/project/ModalContent";
import { GET_PROJECTS } from "../../redux/constants";
import { useDispatch } from "react-redux";
import { getProjects } from "../../api/projectsAPI";

const DummyProjects = [
  { name: "имя", date: "12 313 4" },
  { name: "имя", date: "12 313 4" },
  { name: "имя", date: "12 313 4" },
];

const ProjectPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch({ type: GET_PROJECTS });
  // }, [dispatch]);

  useEffect(() => {
    async function fetchData() {
      const data = await getProjects();
      console.log({ ...data });
    }
    fetchData();
  }, []);
  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  let Project = null;
  return (
    <main className={styles.container}>
      {isOpenModal && (
        <Modal id="project">
          <ModalContent onClose={setIsOpenModal} />
        </Modal>
      )}
      {!Project ? (
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
        {!Project && (
          <ul className={styles.project_list}>
            {DummyProjects.map((item, index) => (
              <ProjectItem key={index} name={item.name} date={item.date} />
            ))}
          </ul>
        )}
      </section>
    </main>
  );
};

export default ProjectPage;
