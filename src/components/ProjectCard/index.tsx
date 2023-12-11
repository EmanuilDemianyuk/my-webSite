import { FC } from 'react';
import styles from './style.module.scss';
import { ProjectCardProps } from 'src/Type';
import demoLogo from 'src/assets/svg/demoLogo.svg';
import gitHubLogo from 'src/assets/svg/gitHubLogo.svg';
import Technology from './Technology';

const ProjectCard: FC<ProjectCardProps> = ({
    title,
    description,
    technology,
    img,
    urlLink
}) => {
  return (
    <div className={styles.card}>
        <div className={styles.card__imgBlock}> 
            <img src={img} alt="logoCard"/>
        </div>
        <div className={styles.card__textBlock}>
            <div>
                <h5>{title}</h5>
                <p>{description}</p>
                <div className={styles.card__tech}>
                    {technology.map((el, index) => <Technology key={index} name={el}/>)}
                </div>
            </div>
            <div className={styles.card__link}>
                <a href={urlLink.code} target='_blanck'>
                    <p>Code</p> <img src={gitHubLogo} alt="gitLogo" />
                </a>
                <a href={urlLink.demo} target='_blanck'>
                    <p>Live Demo</p> <img src={demoLogo} alt="demoLogo" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard;