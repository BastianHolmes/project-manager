import MaterialSymbolsAddBoxSharp from "../../components/project/ProjectIcon/ProjectIcon";
import ProjectItem from "../../components/project/ProjectItem/ProjectItem";
import styles from "./ProjectPage.module.scss";

const DummyProjects = [
  { name: "имя", date: "12 313 4" },
  { name: "имя", date: "12 313 4" },
  { name: "имя", date: "12 313 4" },
];

const ProjectPage = () => {
  let Project = null;
  return (
    <main className={styles.container}>
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
        <MaterialSymbolsAddBoxSharp className={styles.icon} />
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
