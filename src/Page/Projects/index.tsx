import classNames from 'classnames';
import styles from './style.module.scss';
import ProjectCard from 'src/components/ProjectCard';
import strumScreen from 'src/screenshots/strum-template.png';
import yumScreen from 'src/screenshots/store-template.png';
import { strumLink, yumLink } from 'src/constants/linkForProjectsCard';

const Projects = () => {
  return (
    <div className={classNames("container", styles.projects)}>
      <div className={styles.projects__header}>
        <h3>Projects</h3>
        <p>Each project is a unique piece of development 🧩</p>
      </div>
      <div className={styles.projects__cardContainer}>
        <ProjectCard
          title={"YumPizza"}
          description={"This is a e-commerce website built with React(Typescript) and TailwindCSS. This is a team project   written by 2 developers. This is the site of a restaurant specializing in pizzas, hence the name YumPizza."}
          technology={["React", "SCSS", "TS", "TailwindCSS", "Node.js", "MongoDB"]}
          img={yumScreen}
          urlLink={yumLink}
        />
        <ProjectCard
          title={"Strum.cv"}
          description={"The project was made for a team of electricians and was built on the principle of a single page. This   is a team project written by 2 developers.The main idea of this project is simplicity and accessible information."}
          technology={["React", "JS", "TailwindCSS", "Vite"]}
          img={strumScreen}
          urlLink={strumLink}
        />
      </div>
    </div>
  )
}

export default Projects