import classNames from 'classnames';
import styles from './style.module.scss';

const Contact = () => {
  return (
    <section id='contact' className={classNames("container", styles.contact)}>
        <div className={styles.contact__text}>
          <h3>
            CONTACT
          </h3>
          <p>
            Hurry up and write to me 👇
          </p>
        </div>
        <div className={styles.contact__location}>
          <div className={styles.contact__locSvg}>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round"  strokeLinejoin="round"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2   2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path>
              </svg>
            </div>  
            <span>
              <h5>Mail</h5>
              <span>
                <a href='mailto:emikbemik@gmail.com'>emikbemik@gmail.com</a>
              </span>
            </span>
          </div>
          <div className={styles.contact__locSvg}>
            <div>
                <svg width="24px" height="24px" version="1.1" xmlns="http://www.w3.org/2000/svg"><path id="telegram-1" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"/>
                </svg>
            </div>
            <span>
              <h5>Telegram</h5>
              <span>https://t.me/masterJodu</span>
            </span>
          </div>
          <div className={styles.contact__locSvg}>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path><path d="M9 4v13"></path><path d="M15 7v5"></path><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M20.2 20.2l1.8 1.8"></path>
              </svg>
            </div>
            <span>
              <h5>Location</h5>
              <span>Chernivtsi, Ukraine</span>
            </span>
          </div>
        </div>
    </section>
  )
}

export default Contact;