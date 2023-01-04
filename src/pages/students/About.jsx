import React from 'react';
import '../../styles/home.css'
import '../../styles/style.css'


function About(props) {
    return (
        <>
     <p className="title-section">About us</p>
      <div class="about-img">
        <div class="about-content">
          <p class="about-heading">FPT Education not only impresses students with the unique architecture of buildings across 3 regions of the country but also the green and comfortable campuses. This has brought a dynamic learning space for students from North to South.
            From the beginning days, starting with FPT Aptech's simple class at Yet Kieu in Hanoi and Nam Quoc Cang City in HCM City, FPT Edu people dreamed of a strong educational institution which owns multi-level and multi-location schools with large and modern campuses, meeting the learning and living needs of students.</p>
          <div class="about-description">
            <a href="https://www.facebook.com/FPTU.HCM/?ref=page_internal" class="btn-app btn--primary">See more at facebook</a>
          </div>
        </div>
      </div>
      </>
    );
}

export default About;