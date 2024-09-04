import styles from '../assets/css/ContactStyles.module.css'
import CV from '../assets/IrfanYuksel_Resume.pdf'

const Contact = () => {
  return (
    <section className={`row ${styles.contactContainer}`} id='contact'>
        <div className="col-lg-8 col-10" data-aos="fade-up">
            <h1>Resume</h1>
            <div className={`col-lg-12 col-12 ${styles.resumeBtn}`} >
                <a href={CV} target='_blank'>
                    <button className='btn'>View Resume
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </a>
                <a href={CV} download>
                    <button className='btn'>Download Resume
                        <i class="fa-solid fa-download"></i>
                    </button>
                </a>
            </div>
        </div>
        <div className="col-lg-8 col-10" data-aos="fade-up">
            <h1>Contact</h1>
            <div className={`${styles.border}`} id='exp-card'>
                    <p>
                        <a href="mailto:IrfanTursunDev@gmail.com" target='_blank'>
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </p>
                    <p>
                        <a href="https://www.linkedin.com/in/irfan-tursun-6855bb140?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target='_blank'>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                    </p>
                    <p>
                        <a href="https://github.com/irfanDocker" target='_blank'>
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </p>
                    <p>
                        <a href="https://www.instagram.com/tursun.irfan?igsh=Y3B4eGVtb3g1NjNn&utm_source=qr" target='_blank'>
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </p>
            </div>
        </div>
        <footer>
            <p>
            &copy; 2024 Irfan Yuksel. <br />
            All rights reserved.
            </p>
        </footer>
    </section>
  )
}

export default Contact