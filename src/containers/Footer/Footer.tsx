import WetPriting from "src/components/WetPriting";
import styles from './style.module.scss';
import classNames from "classnames";
import LinkPad from "src/components/LinkPad";
import SecondLogo from "src/components/SecondLogo";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={classNames("container", styles.footer__container)}>
        <SecondLogo/>
        <LinkPad/>
        <WetPriting/>
      </div>
    </footer>
  )
}

export default Footer