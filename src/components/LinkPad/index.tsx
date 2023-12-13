import styles from './style.module.scss';
import gitHubLogoWhite from 'src/assets/svg/gitHubLogoWhite.svg';
import linkedInLogo from 'src/assets/svg/linkedInLogo.svg';

const LinkPad = () => {
  return (
    <div className={styles.LinkPad}>
        <a href='https://github.com/EmanuilDemianyuk' target='_blanck'>
            <img src={gitHubLogoWhite} alt="gitLogo"/>
        </a>
        <a href='https://www.linkedin.com/in/emanuil-demianyuk-260826276/' target='_blanck'>
            <img src={linkedInLogo} alt="linkedInLogo" />
        </a>
    </div>
  )
}

export default LinkPad;