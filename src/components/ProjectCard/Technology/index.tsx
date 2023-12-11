import { FC } from 'react';
import style from './style.module.scss';
import { TechnologyProps } from 'src/Type';

const Technology: FC<TechnologyProps> = ({name}) => {
  return (
    <div className={style.tech}>
        {name}
    </div>
  )
}

export default Technology