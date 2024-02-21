import Footer from '@/components/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import styles from './jayB.module.css'

export default function Index() {
  return (
    <>

  <div className="polaris_j_boughner_page_main_width">

    <div className={styles.polaris_j_boughner_page_full_width}>

      <div className={styles.j_boughner_page_banner_main_width}>
        <Navbar/>
          <div className={styles.common_width}>
            <div className={styles.j_boughner_bnr_left_cont}>
              <h1>BIO</h1>
  
              <div className={styles.yellow_box_sec_main_width}>
                <h2>Our leadership team</h2>
              </div>
          </div>
        </div>
      </div>

    </div>


    {/* <div className={styles.polaris_JB_BIO_width}>
      <div className={styles.jb_bio_page}>
        <img src="https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_jay_bughner_bio_bnnr_img.webp"/>
      </div>
      <div className={styles.jb_bio_page}>
        <img src="https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_jay_bughner_bio_block1_img.webp"/>
      </div>
    </div> */}
    
    <Footer />

  </div>
    </>
  )
}
