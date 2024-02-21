import Footer from '@/components/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import styles from './jayB.module.css'
import Head from 'next/head'

export default function Index() {
  return (
    <>

<Head>
        <title>johnmartin</title>
        <link
          rel="icon"
          href="https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_fav_icon_new.png"
        />
          <meta property="og:title" content="John D. Martin: Expert Healthcare Consultant | Polaris Business Consultants"></meta>
        <meta name="keywords" content="John D. Martin, Healthcare Consultant, Healthcare Consulting, Polaris Business Consultants, Strategic Planning, Financial Management, Operational Improvement, Physician-Hospital Integration, Project Development"></meta>
        <meta property="og:description" content="With over 35 years of progressive healthcare leadership, John D. Martin is a trusted name in healthcare consulting. Explore his career highlights, expertise, and projects at Polaris Business Consultants. "></meta>
        <meta property="og:url" content=" https://polaris.betoparedes.com/bio-jeffdonovan "></meta>
        </Head>

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
