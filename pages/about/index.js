import React from 'react'
import styles from "./about.module.css";
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <>
    

     <div className={styles.polaris_about_main}>

      <div className={styles.polaris_about_bnnr}>
      <div className={styles.pol_about_nav}> <Navbar /></div> 

      <div className={styles.common_width}>

        <div className={styles.pol_about_bnnrleft}>

          <div className={styles.pol_bnnr_h1}>
            <h1><span>About</span></h1>
          </div>
          

          <div className={`${styles.pol_orng_wrpr} ${styles.p_30}`}>
            <p>We are a full-service consulting firm that brings together an innovative and winning formula.</p>
          </div>

        </div>

      </div>


      </div>
      
      <div className={styles.polar_about_block1}>

        <div className={styles.common_width}>
           
           <div className={styles.polar_block1_sub}>

            <div className={styles.gred_txt}><h1><span>About Polaris Business <br></br> Consultants</span></h1></div>

            <div className={`${styles.font_26} ${styles.font_bull}`}>
                 <p>Polaris was formed in 2023 as a partnership between Donovan Consulting and JD Martin Healthcare Advisors</p>
                 <p>Polaris  is a full-service healthcare consulting firm with more than three decades of experience in the healthcare industry</p>
                 <p>Our services include:</p>
            </div>

            <div className={`${styles.font_20} ${styles.padding_35}`}>
              <p>Ambulatory surgical center development training and education</p>
              <p>Healthcare consulting specializing in strategic planning, financial planning and analysis (FP&A), transactions support, and project management and development</p>
              <p>Operational improvement including revenue recovery strategies and workflow automation</p>
            </div>

           </div>

        </div>

      </div>

      <div className={styles.polar_about_block2}>

        <div className={styles.common_width}>
           
           <div className={styles.polar_block2_sub}>

          

            <div className={`${styles.font_26}`}>
                 <p>Polaris Business Consultants brings an experienced and innovative team together to 
provide an extensive offering of financial and operational consulting services to this 
rapidly changing market. We are a full-service consulting firm that brings together an 
innovative and winning formula. We have over five decades of providing financial solutions with three-plus decades of experience in working within the healthcare industry.</p>
                 <p>Whether you are looking to improve your existing business, add additional services, or grow into new markets; Polaris has the experience you need to develop a business strategy and plan that will help you realize your business goals.
</p>
                 <p>Polaris offers its clients a complete offering of services that include: strategic planning, financial advising, operational improvement, growth and expansion, project management and development, transactional advice, and partnership development. We bring a 
complete business resource package to our customers. Our customers have access to critical financial and operational consulting services provided by a team of experts who are not just consultants. Many of our consultants have worked in industry and understand how to provide recommendations that are execution ready. In fact, Polaris stands ready to help its customers implement and manage their growth plans.</p>
            </div>

            

           </div>

        </div>

      </div>

     </div>
    {/* <div className={styles.polaris_about_full_width}>
   
      <div className={styles.about_page}>
        <img src="https://all-frontend-assets.s3.amazonaws.com/polaris_project/about_page/polaris_about_us_bnr_img.webp"/>
      </div>
      <div className={styles.about_page}>
        <img src="https://all-frontend-assets.s3.amazonaws.com/polaris_project/about_page/Polaris_about_us_block1_img.webp"/>
      </div>
      <div className={styles.about_page}>
        <img src="https://all-frontend-assets.s3.amazonaws.com/polaris_project/about_page/polaris_block2_img.webp"/>
      </div>
      
    </div> */}
    <Footer/>
    </>
  )
}
