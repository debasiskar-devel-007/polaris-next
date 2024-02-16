import React from 'react'
import styles from './home.module.css'
import Navbar from '../navbar/Navbar'

export default function Homes() {


  return (
    <>

      <div className={styles.polaris_home_main_wrp}>
        <div className={styles.polaris_home_wrp}>
          <img className={styles.polaris_position_img} src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_banner_man_img.webp' />
          <Navbar />
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

        <div className={styles.polaris_blk2_main_wrp}>
          <div className={styles.polaris_blk2_main1_wrp}>

            <div className={styles.common_width}>
              <div className={styles.polaris_blk2_sub1_wrp}>
                <h1>About Polaris</h1>
                <h4>Polaris was formed in 2023 as a partnership between Donovan Consulting and JD Martin Healthcare Advisors</h4>
                <h4>Polaris  is a full-service healthcare consulting firm with more than three decades of experience in the healthcare industry</h4>
                <h4>Our services include:</h4>
                <p>Ambulatory surgical center development training and education</p>
                <p>Healthcare consulting specializing in strategic planning, financial planning and analysis (FP&A), transactions support, and project management and development</p>
                <p>Operational improvement including revenue recovery strategies and workflow automation</p>
              </div>
            </div>
          </div>
          <div className={styles.polaris_blk2_main2_wrp}>
            <div className={styles.common_width}>
              <div className={styles.polaris_blk2_sub2_wrp}>
                <div className={styles.polaris_blk2_sub2_left_wrp}>
                  <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_logo.png' />
                </div>
                <div className={styles.polaris_blk2_sub2_right_wrp}>
                  <h1>Healthcare is changing rapidly, faster than <span>at any other time.</span></h1>
                  <p>Polaris Business Consultants brings together an innovative and winning formula - Donovan's over five decades of financial solutions with JD Martin Healthcare Advisors three-plus decades of experience in working within the healthcare industry. Polaris brings an experienced and innovative team together to provide an extensive offering of services to this rapidly changing market.</p>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className={styles.polaris_blk3_main_wrp}>
          <div className={styles.common_width}>
            <div className={styles.polaris_blk3_sub_wrp}>
              <h1>Services</h1>
              <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/home_page_table_img.webp' />
              <div className={styles.polaris_blk3_sub_sec_wrp}>
                <div className={`${styles.polaris_blk3_sub_sec_mini1_wrp} ${styles.polaris_blk3_sub_sec_mini_wrp}`}>
                  <div className={styles.polaris_blk3_logo_wrp}>
                    <div className={styles.polaris_blk3_logo_sec_wrp}>
                      <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_healthcare_logo.png' />
                    </div>
                  </div>
                  <div className={styles.polaris_blk3_text_wrp}>
                    <p>35+ Years in
                      the Healthcare
                      Industry</p>
                  </div>

                </div>
                <div className={`${styles.polaris_blk3_sub_sec_mini2_wrp} ${styles.polaris_blk3_sub_sec_mini_wrp}`}>
                  <div className={styles.polaris_blk3_logo_wrp}>
                    <div className={styles.polaris_blk3_logo_sec_wrp}>
                      <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/business_tax_logo.png' />
                    </div>
                  </div>
                  <div className={styles.polaris_blk3_text_wrp}>
                    <p>50+ Years in 
Business and 
Tax Strategy 
Planning</p>
                  </div>
                </div>
                <div className={`${styles.polaris_blk3_sub_sec_mini3_wrp} ${styles.polaris_blk3_sub_sec_mini_wrp}`}>
                  <div className={styles.polaris_blk3_logo_wrp}>
                    <div className={styles.polaris_blk3_logo_sec_wrp}>
                      <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/development_logo.png' />
                    </div>
                  </div>
                  <div className={styles.polaris_blk3_text_wrp}>
                    <p>20+ Healthcare 
Development 
Projects</p>
                  </div>
                </div>
                <div className={`${styles.polaris_blk3_sub_sec_mini4_wrp} ${styles.polaris_blk3_sub_sec_mini_wrp}`}>
                  <div className={styles.polaris_blk3_logo_wrp}>
                    <div className={styles.polaris_blk3_logo_sec_wrp}>
                      <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/business_transformations_logo.png' />
                    </div>
                  </div>
                  <div className={styles.polaris_blk3_text_wrp}>
                    <p>Endless 
Business 
Transformations</p>
                  </div>
                </div>

              </div>
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
      {/* <div className={styles.polaris_demo_wrp}>
        <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_home_blk2_img.webp' />
      </div> */}
      {/* <div className={styles.polaris_demo_wrp}>
        <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_home_blk3_img.webp' />
      </div> */}
      <div className={styles.polaris_demo_wrp}>
        <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_home_last_blk_img.webp' />
      </div>
    </>
  )
}
