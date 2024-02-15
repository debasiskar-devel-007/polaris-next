import React from 'react'
import styles from "./servicepage.module.css";
import Navbar from '@/components/navbar/Navbar';

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"></link>

export default function index() {
  return (
    <>

    <div className={styles.polaris_service_page_full_width}>
        
        <div className={styles.service_page_banner_main_width}>
            <Navbar/>
            <div className={styles.common_width}>
                <div className={styles.service_bnr_left_cont}>
                    <h1>OUR SERVICES</h1>
                    <p>Polaris offers a comprehensive list of services for its healthcare clients. Our extensive list of services may be found in three broad categories. You may click on each service to find a more detailed description of the services we offer.</p>

                    <div className={styles.box_sec_main_wrpr}>
                        <div className={styles.box_section}>
                            <h2>Ambulatory Surgery Center Development</h2>
                        </div>
                        <div className={`${styles.box_section} ${styles.yellow_box}`}>
                            <h2>Healthcare<br></br> Consulting</h2>
                        </div>
                        <div className={`${styles.box_section} ${styles.skyblue_box}`}>
                            <h2>Operational<br></br> Improvement</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.service_page_block1_main_width}>
            <div className={styles.common_width}>
                <div className={styles.service_block1_right_cont}>
                    <div className={styles.green_heading}>
                        <h1>ASC Development Training and Education</h1>
                    </div>

                    <div className={styles.cont_part1}>
                        <p>We have developed a training and education program for those who are considering the development of an ambulatory surgery center (ASC), perhaps for the first time</p>
    
                        <h4>Our program covers six (6) key aspects of planning and developing an ASC:</h4>
                        <div className={styles.cont_part1_sub_bullet_cont}>
                            <h5>Project Assessment</h5>
                            <h5>Pre-Project Planning</h5>
                            <h5>Facility Design and Construction</h5>
                            <h5>Non-Clinical Operations</h5>
                            <h5>Clinical Operations </h5>
                            <h5>Go-Live</h5>
                        </div>
                    </div>

                    <div className={styles.cont_part2}>
                        <p>For those who have made the decision to develop an ambulatory surgery center, we offer three levels of consulting assistance:</p>
    
                        <h4>Mastermind Group</h4>

                        <h5>Group size: Up to fifteen (15) participants per group</h5>
                        <h5>Meetings: Semi-monthly; 1½ hours per week; email access for questions</h5>
                        <h5>Participants are not in direct competition with other members of the group</h5>

                        <h4>Mentoring</h4>

                        <h5>Group size: Individuals only; no other participants</h5>
                        <h5>Meetings: Weekly; 1 hour per week; 4 weeks per month; email access for questions</h5>

                        <h4>Consulting Services</h4>

                        <h5>Traditional consulting services may be engaged on an individualized basis</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className={styles.service_demo_img}>
        {/* <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/polaris_service_page/Polaris_service_banner_demo.webp'></img> */}
        {/* <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/polaris_service_page/Polaris_service_block1_demo.webp'></img> */}
        <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/polaris_service_page/Polaris_service_block2_demo.webp'></img>
        <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/polaris_service_page/Polaris_service_block3_demo.webp'></img>
        <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/polaris_service_page/Polaris_service_block4_demo.webp'></img>
        <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/polaris_service_page/Polaris_service_block5_demo.webp'></img>
        <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/polaris_service_page/Polaris_service_block6_demo.webp'></img>
        <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/polaris_service_page/Polaris_service_block7_demo.webp'></img>
        <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/polaris_service_page/Polaris_service_block8_demo.webp'></img>
    </div>

    </>
  )
}
