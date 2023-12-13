import { FC } from 'react';
import styles from './style.module.scss';
import { ProjectCardProps } from 'src/Type';
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
           <a href={urlLink.demo} target='_blanck'> 
            <img src={img} alt="logoCard"/>
           </a>
        </div>
        <div className={styles.card__textBlock}>
            <div className={styles.card__text}>
                <h5>{title}</h5>
                <p>{description}</p>
                <div className={styles.card__tech}>
                    {technology.map((el, index) => <Technology key={index} name={el}/>)}
                </div>
            </div>
            <div className={styles.card__link}>
                <a href={urlLink.code} target='_blanck'>
                    <p>Code</p> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                </a>
                <a href={urlLink.demo} target='_blanck'>
                    <p>Live Demo</p> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard;

{/* <img src="/static/media/gymate-home.52d00d03c15713c601c4.webp" alt="website" style="transform: translateY(0%); transition: transform 10s ease-in-out 0s;"></img> */}