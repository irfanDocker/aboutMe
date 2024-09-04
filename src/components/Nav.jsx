import styles from '../assets/css/NavStyles.module.css';
import { useEffect, useState } from 'react';

const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
      const navLinksLi = document.querySelectorAll(`.${styles.navLinks} li`);
  
      if (isNavOpen) {
        navLinksLi.forEach((link, index) => {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 15 + 0.5}s`;
        });
      } else {
        navLinksLi.forEach(link => {
          link.style.animation = '';
        });
      }
    }, [isNavOpen]);
  
    const handleBurgerClick = () => {
      setIsNavOpen(!isNavOpen);
      document.querySelector(`.${styles.navLinks}`).classList.toggle(styles.navActive);
    };

    return (
        <>
            <nav className={`row ${styles.navContainer}`} id='nav'>
                <div className= {`col-lg-3 col-md-3 col-10 col-sm-6`}>
                  <a href="#profile">
                    <h5>IY</h5>
                  </a>
                </div>
                <div className={`col-lg-9 col-md-9 col-sm-6 ${styles.navLinks}`}>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="https://www.linkedin.com/in/irfan-tursun-6855bb140/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" id="linkLinkedIn" target="_blank">LinkedIn</a></li>
                        <li><a href="https://github.com/irfanDocker" id="linkGithub" target="_blank">Github</a></li>
                    </ul>
                </div>
                <div className={`col-2 col-md-9 ${styles.burger}`} onClick={handleBurgerClick}>
                    <div className={`${styles.line1} ${isNavOpen ? styles.toggle : ''}`}></div>
                    <div className={`${styles.line2} ${isNavOpen ? styles.toggle : ''}`}></div>
                    <div className={`${styles.line3} ${isNavOpen ? styles.toggle : ''}`}></div>
                </div>
            </nav>
        </>
    );
};

export default Nav;
