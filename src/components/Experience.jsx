import styles from '../assets/css/ExperienceStyles.module.css'


const Experience = () => {
  return (
    <section className={`row ${styles.experience}`} id='experience'>
      <h1 data-aos="fade-up">Experience</h1>
      <div className={`col-12 ${styles.subExperience}`}>
      <div className={`col-10  col-lg-3 card border-dark mb-5 ${styles.border}`} id='exp-card' data-aos="fade-up">
        <div className="card-header d-flex justify-content-between">
          <h5 className="card-title">Prudent (USCOURT) - Remote</h5>
          <p>December 2023 – Present</p>
        </div>
        <div className="card-body">
          <h5>Sr. QA Automation Engineer/PM</h5>
        </div>
      </div>
      <div className={`col-10 col-lg-3 card border-dark mb-5 ${styles.border}`} id='exp-card' data-aos="fade-up">
        <div className="card-header d-flex justify-content-between">
          <h5 className="card-title">TechCircle</h5>
          <p>May 2019 – December 2023</p>
        </div>
        <div className="card-body">
          <h5>CEO Co-founder of TechCircle</h5>
        </div>
      </div>
      <div className={`col-10 col-lg-3 card border-dark mb-5 ${styles.border}`} id='exp-card' data-aos="fade-up">
        <div className="card-header d-flex justify-content-between">
          <h5 className="card-title">Prudent (USCIS) - Remote</h5>
          <p>July 2020 – March 2022</p>
        </div>
        <div className="card-body">
          <h5>Full Stack Engineer</h5>
        </div>
      </div>
      </div>

      <div className={`col-12 ${styles.subExperience}`}>
      <div className={`col-10 col-lg-3 card border-dark mb-5 ${styles.border}`} id='exp-card' data-aos="fade-up">
        <div className="card-header d-flex justify-content-between">
          <h5 className="card-title">USPS, Chantilly, VA</h5>
          <p>June 2019 – July 2020</p>
        </div>
        <div className="card-body">
          <h5>Sr. Software Engineer</h5>
        </div>
      </div>
      <div className={`col-10 col-lg-3 card border-dark mb-5 ${styles.border}`} id='exp-card' data-aos="fade-up">
        <div className="card-header d-flex justify-content-between">
          <h5 className="card-title">USPTO, Alexandria VA</h5>
          <p>Oct’15 – June 2019</p>
        </div>
        <div className="card-body">
          <h5>Lead Test Automation Engineer</h5>

        </div>
      </div>
      <div className={`col-10 col-lg-3 card border-dark mb-5 ${styles.border}`} id='exp-card' data-aos="fade-up">
        <div className="card-header d-flex justify-content-between">
          <h5 className="card-title">Vanguard, Malvern, PA</h5>
          <p>Jul’15 – Oct’15</p>
        </div>
        <div className="card-body">
          <h5>Sr Test Automation Engineer</h5>

        </div>
      </div>
      </div>

    </section>
  )
}

export default Experience