import Footer from '@/components/Footer'
import Navbar from '@/components/navbar/Navbar'
import Head from 'next/head'
import React from 'react'
import styles from './johnD.module.css'

export default function index() {
  return (
    <>
  <Head>
        <title>Bio-JohnMartin</title>
        <link
          rel="icon"
          href="https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_fav_icon_new.png"
        />
          <meta property="og:title" content="John D. Martin: Expert Healthcare Consultant | Polaris Business Consultants"></meta>
        <meta name="keywords" content="John D. Martin, Healthcare Consultant, Healthcare Consulting, Polaris Business Consultants, Strategic Planning, Financial Management, Operational Improvement, Physician-Hospital Integration, Project Development"></meta>
        <meta property="og:description" content="With over 35 years of progressive healthcare leadership, John D. Martin is a trusted name in healthcare consulting. Explore his career highlights, expertise, and projects at Polaris Business Consultants. "></meta>
        <meta property="og:url" content="https://polaris.betoparedes.com/bio-johnmartin "></meta>
        <meta property="og:image" content="https://all-frontend-assets.s3.amazonaws.com/polaris_project/og_img/Bio-johnmartin_OG_image.webp"></meta>
        <meta property="og:image:width" content="1200"></meta>
        <meta property="og:image:height" content="627"></meta>
        </Head>


  <div className="polaris_j_martin_page_main_width">

    <div className={styles.polaris_j_martin_page_full_width}>

      <div className={styles.j_martin_page_banner_main_width}>
      <Navbar/>
        <div className={styles.common_width}>
          <div className={styles.j_martin_bnr_left_cont}>
            <h1>BIO</h1>

            <div className={styles.yellow_box_sec_main_width}>
              <h2>Our leadership team</h2>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.j_martin_page_block1_main_width}>
        <div className={styles.common_width}>
          <div className={styles.j_martin_page_block1_white_box}>
            <div className={styles.block1_white_box_grey_bar}>
              <h1>John D Martin</h1>
            </div>

            <div className={styles.block1_white_box_main_wrpr}>

              <div className={styles.block1_white_box_left_sec}>
                <div className={styles.white_box_left_sec_img_box}>
                  <div className={styles.left_sec_img_sub_box}>
                    <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/john_d_martin/john_d_martin_img.webp'></img>
                  </div>
                </div>
              </div>

              <div className={styles.block1_white_box_right_sec}>
                <p>John Martin is the Managing Director – Healthcare Consulting of Polaris Business Consultants. With over thirty-five years of experience in healthcare, he has worked in large medical practices, specialty hospitals, and health systems. John graduated with an accounting degree from the Indiana University Kelley School of Business in 1988. His career has included roles as Director of Business Development, Administrator, Chief Financial Officer, and Chief Executive Officer.</p>

                <p>John began his consulting career in 2012 after leaving his role as Chief Executive Officer of Orthopaedics Indianapolis in Indianapolis, IN. Throughout his career in healthcare, he has participated in more than 20 development projects including hospitals, specialty hospitals, ambulatory surgery centers, and medical office buildings. The cornerstone of every project has been to achieve alignment between hospitals and physicians in the delivery of healthcare services. He has participated in service line development covering every major specialty in healthcare delivery improving financial performance, care delivery, and creating specialty specific physician alignment strategies.</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <div className={styles.j_martin_page_block2_main_width}>
        <div className={styles.common_width}>
          <div className={styles.j_martin_page_block2_blue_box}>

            <div className={styles.block2_grey_bar}>
              <h1>Career Highlights</h1>
            </div>

            <div className={styles.block2_blue_box_sub_white_box}>
              <p>John is a senior executive with over thirty-five years of progressive financial management, strategic planning, and operational experience in the healthcare industry. In addition to all facets of financial and operational management, he has most recently been involved with financial feasibility studies, joint venture planning and execution, physician hospital development, physician/hospital integration, process improvement, hospital and physician practice management, and enterprise level strategic and operational planning.</p>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
  
      {/* <Navbar /> */}
      <div className={styles.polaris_JDM_BIO_width}>
   
      <div className={styles.JDM_bio_page}>
        <img src="https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/POLARIS_JOHN_D_MARTIN_BIO.webp"/>
      </div>
      <div className={styles.JDM_bio_page}>
        <img src="https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/POLARIS_JOHN_D_MARTIN_BLOCK1.webp"/>
      </div>
      <div className={styles.JDM_bio_page}>
        <img src="https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_john_d_block2.webp"/>
      </div>
      
      
    </div>
    <Footer />
    </>
  )
}
