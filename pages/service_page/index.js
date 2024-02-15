import React from 'react'
import styles from "./servicepage.module.css";

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"></link>

export default function index() {
  return (
    <>

    <div className={styles.polaris_service_page_full_width}>
        <div className={styles.service_page_banner_main_width}>
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
    </div>

    <div className={styles.service_demo_img}>
        <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/polaris_service_page/Polaris_service_banner_demo.webp'></img>
        <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/polaris_service_page/Polaris_service_block1_demo.webp'></img>
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
