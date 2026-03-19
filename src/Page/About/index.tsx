import InfoTag from 'src/components/InfoTag';
import styles from './style.module.scss';
import aboutImage from 'src/assets/image/aboutImage.jpg';
import classNames from 'classnames';

const About = () => {
  return (
    <section id='about' className={classNames("container", styles.about)}>
      <div className={styles.about__iconCon}>
        <img src={aboutImage} alt="about Me" />
      </div>
      <div className={styles.about__desc}>
        <div className={styles.about__descCon}>
          <h3>About Me</h3>
          <p>
            Full-Stack Developer with strong expertise in building scalable web applications and delivering end-to-end solutions — from architecture design to production deployment.

            I bring hands-on experience in both backend and frontend development, along with a proven track record of leading startup teams and driving projects from idea to launch. I focus on writing clean, maintainable code and creating products that deliver real business value.

            Actively integrating modern development trends into my workflow, including AI-assisted development, performance optimization, and scalable system design. Continuously expanding my tech stack and improving development efficiency through new tools and best practices.

            I thrive in collaborative, product-oriented teams where I can take ownership, contribute to decision-making, and grow alongside experienced professionals.

            Outside of work, I’m passionate about music and value quality time with my family, which helps me stay creative and balanced.
          </p>
        </div>
        <div className={styles.about__tagCon}>
          <InfoTag title='NAME' description='Emanuil Demianyuk' />
          <InfoTag title='LOCATION' description='Chernivtsi, Ukraine' />
          <InfoTag title='EMAIL' description='emikbemik@gmail.com' />
          <InfoTag title='EMPLOYMENT' description='Open' />
        </div>
      </div>
    </section>
  )
}

export default About