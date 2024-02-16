import React from 'react'
import styles from './home.module.css'
import Navbar from '../navbar/Navbar'

export default function Homes() {

    
  return (
    <>

    <div className={styles.polaris_home_main_wrp}>
        <div className={styles.polaris_home_wrp}>
            <img className={styles.polaris_position_img}  src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_banner_man_img.webp'/>
        <Navbar/>
            <div className={styles.common_width}>
                <div className={styles.polaris_home_sub_wrp}>
                    <div className={styles.polaris_home_sub_left_wrp}>
                        <h1>POLARIS BUSINESS CONSULTANTS</h1>
                    </div>
                    <div className={styles.polaris_home_sub_left1_wrp}>
                        <h1>Experts in <span>Strategic</span> Healthcare & Financial  Consulting</h1>
                        <div className={styles.polaris_home_sub_left1_mini1_wrp}>
                            <p>Your partner in creating sustainable strategic, financial, and operational strategies to provide for continued 
growth and success.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className={styles.polaris_blk1_main_wrp}>
          <div className={styles.common_width}>
            <div className={styles.polaris_blk1_sub_wrp}>
              <h1>AMBULATORY SURGERY CENTER DEVELOPMENT COURSE</h1>
              <p>Unlock the Blueprint of Success in Ambulatory Surgery Center Development! Join our immersive six-week course and gain comprehensive insights into the strategic stages of ASC development. Elevate your expertise, navigate regulatory intricacies, and master the art of creating a cutting-edge ambulatory surgery center. Transform your vision into reality with our expert-led program. Enroll now for a future in healthcare innovation!</p>
              <button className={styles.polaris_home_button}>Click Here to Learn More</button>
            </div>
          </div>
        </div>
    </div>

    
          {/* <div className={styles.polaris_demo_wrp}>
            <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/home_bnr_demo.webp'/>
          </div> */}
          
          {/* <div className={styles.polaris_demo_wrp}>
            <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_home_blk1_img.webp'/>
          </div> */}
          <div className={styles.polaris_demo_wrp}>
            <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_home_blk2_img.webp'/>
          </div>
          <div className={styles.polaris_demo_wrp}>
            <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_home_blk3_img.webp'/>
          </div>
          <div className={styles.polaris_demo_wrp}>
            <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_home_last_blk_img.webp'/>
          </div>
    </>
  )
}
