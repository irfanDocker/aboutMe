import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
import { useEffect } from 'react';
import styles from '../assets/css/AboutMeStyles.module.css';
import profileImg from '../images/irfanProImg.png';
import cucumberLogo from '../images/cucumberLogo.png'
import htmlLogo from '../images/htmllogo.png'
import github from '../images/githublogo.png'
import gitLogo from '../images/gitlogo.png'
import javaLogo from '../images/java.png'
import jenkinsLogo from '../images/jenkinsLogo.png'
import jUnit from '../images/junitLogo.png'
import maven from '../images/maveLogo.png'
import postman from '../images/postman.png'
import selenium from '../images/seleniumLogo.png'
import testng from '../images/testngLogo.png'
import SkillList from '../assets/context/SkillList';
import checkMarkIconLight from '../images/checkmark-light.svg'

const AboutMe = () => {
  return (
    <section className={`row ${styles.profileContainer}`} id='about'>
        <div className={`${styles.abouth1}`} data-aos="fade-up">
            <h1>About Me</h1>   
        </div>
        <div className={`col-lg-6 col-10 ${styles.profileImage}`} data-aos="fade-up">
            <img src={profileImg} alt="Irfan Yuksel Picture" />
        </div>
        <div className={`col-lg-6 col-10 ${styles.aboutMe}`} data-aos="fade-up">
            <p>I am a seasoned full stack developer with over 10 years of experience, specializing in both quality assurance and Java development. As a team player and effective communicator, I excel in problem-solving and am always eager to learn new technologies. Beyond work, I enjoy working out, gardening, and spending quality time with my kids, embracing my role as a fun and active dad.</p>
        </div>
        <div className={`col-lg-6 col-md-10 col-12 ${styles.technologies}`} data-aos="fade-up">
            <h3>Technologies I've worked with</h3>
            <div className={`${styles.technologiesImg}`}>
                <img src={cucumberLogo} alt="Cucumber Testing tool" />
                <img src={htmlLogo} alt="HTML logo"/>
                <img src={github} alt="GitHub" />
                <img src={gitLogo} alt="Git" />
                <img src={javaLogo} alt="Java" />
                <img src={jenkinsLogo} alt="Jenkins" />
                <img src={jUnit} alt="Jenkins" />
                <img src={maven} alt="Maven" />
                <img src={postman} alt="Postman" />
                <img src={selenium} alt="Selenium Webdriver" />
                <img src={testng} alt="Maven" />
            </div>
        </div>
        <div className={`col-lg-7 col-md-10 col-10  ${styles.skillsContainer}`} data-aos="fade-up">
            <h3>Education and Certifications</h3>
            <div className={styles.skillList}>
                <SkillList src={checkMarkIconLight} skill="DevOps Foundation" />
                <SkillList src={checkMarkIconLight} skill="AWS Certified Developer-Associate" />
                <SkillList src={checkMarkIconLight} skill="Certified SoapUI Pro" />
                <SkillList src={checkMarkIconLight} skill="Oracle Certified Java Programmer Associate (SE7)" />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIconLight} skill="Certified Scrum Product Owner" />
                <SkillList src={checkMarkIconLight} skill="Certified Scrum Developer" />
                <SkillList src={checkMarkIconLight} skill="Certified Scrum Master" />
                <SkillList src={checkMarkIconLight} skill="DevOps Practitioner" />
            </div>
        </div>
    </section>
  )
}

export default AboutMe