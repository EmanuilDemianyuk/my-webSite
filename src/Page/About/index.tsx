import InfoTag from 'src/components/InfoTag';
import styles from './style.module.scss';
import aboutImage from 'src/assets/aboutImage.jpg';
import classNames from 'classnames';

const About = () => {
  return (
    <section className={classNames("container", styles.about)}>
      <div className={styles.about__iconCon}>
        <img src={aboutImage} alt="about Me" />
      </div>
      <div className={styles.about__desc}>
        <div className={styles.about__descCon}>
          <h3>About Me</h3>
          <p>
            I am a front-end developer with excellent communication and teamwork skills. 
            I have experience as a team leader in a startup project, as well as in full-stack and backend development.
            I am currently expanding my library toolkit and working on freelance projects. 
            The goals I set for myself are to work to work in a friendly team where I can use my skills to the maximum and improve them. 
            
            In my spare time, I play music and spend time with my family.
          </p>
        </div>
        <div className={styles.about__tagCon}>
          <InfoTag title='NAME' description='Emanuil Demianyuk'/>
          <InfoTag title='LOCATION' description='Chernivtsi, Ukraine'/>
          <InfoTag title='EMAIL' description='emikbemik@gmail.com'/>
          <InfoTag title='EMPLOYMENT' description='Open'/>
        </div>
      </div>
    </section>
  )
}

export default About