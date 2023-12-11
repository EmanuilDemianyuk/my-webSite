import { FC } from 'react';
import { InfoTagProps } from 'src/Type';
import styles from './style.module.scss';

const InfoTag: FC<InfoTagProps> = ( { title, description } ) => {
  return (
    <div className={styles.container}>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default InfoTag;