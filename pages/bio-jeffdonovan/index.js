import Footer from '@/components/Footer'
import Navbar from '@/components/navbar/Navbar'
import Head from 'next/head'
import React from 'react'
import styles from './jeffD.module.css'
import Head from 'next/head'

export default function index() {
  return (
    <>
      <Head>
        <title>Jeffdonovan</title>
        <link
          rel="icon"
          href="https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_fav_icon_new.png"
        />
          <meta property="og:title" content="Jeff Donovan, Certified Public Accountant (CPA) | Tax Planning & Financial Strategies"></meta>
        <meta name="keywords" content="Jeff Donovan, CPA, Tax Planning, Financial Strategies, Business Valuations, Forensic Accounting, Certified Valuation Analyst, Master Analyst in Financial Forensics, Indiana University"></meta>
        <meta property="og:description" content="Meet Jeff Donovan, a Managing Partner with extensive experience in tax planning, business valuations, and forensic accounting. With a Bachelor's degree in Accounting from Indiana University, Jeff offers clients the knowledge and resources to navigate complex financial decisions. "></meta>
        <meta property="og:url" content=" https://polaris.betoparedes.com/bio-jeffdonovan "></meta>
        </Head>

  <div className="polaris_j_donovan_page_main_width">

    <div className={styles.polaris_j_donovan_page_full_width}>

      <div className={styles.j_donovan_page_banner_main_width}>
      <Navbar/>
        <div className={styles.common_width}>
          <div className={styles.j_donovan_bnr_left_cont}>
            <h1>BIO</h1>

            <div className={styles.yellow_box_sec_main_width}>
              <h2>Our leadership team</h2>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.j_donovan_page_block1_main_width}>
        <div className={styles.common_width}>
          <div className={styles.j_donovan_page_block1_white_box}>
            <div className={styles.block1_white_box_grey_bar}>
              <h1>Jeff Donovan</h1>
            </div>

            <div className={styles.block1_white_box_main_wrpr}>

              <div className={styles.block1_white_box_left_sec}>
                <div className={styles.white_box_left_sec_img_box}>
                  <div className={styles.left_sec_img_sub_box}>
                    <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/jeff_donovan/j_donovan_block1_left_img.webp'></img>
                  </div>
                </div>

                <div className={styles.white_box_left_sec_sky_box}>
                  <h2>Managing Partner</h2>
                  <h3>Tax Planning</h3>
                </div>
              </div>

              <div className={styles.block1_white_box_right_sec}>
                <p>Jeff graduated from the Indiana University School of Business in 1990 with a Bachelor of Science degree in Accounting. Directly out of school, Jeff began his public accounting career in the Guam and Saipan offices of the international accounting firm KPMG Peat Marwick. During his time overseas, Jeff gained invaluable experience in the fields of tourism and international accounting. In 1994, Jeff returned to Indiana to continue his career at Donovan.</p>

                <p>Jeff spends most of his time consulting and assisting clients with financial strategies and long-term planning. Whether it is investments, starting a business, or selling a business, Jeff’s experience offers our clients the knowledge and resources to effectively plan the most financially beneficial course of action for their company. Jeff also oversees all of the firm’s business valuations and forensic accounting services.</p>

                <p>Jeff holds licenses and certificates as a Certified Public Accountant, Certified Valuation Analyst, and Master Analyst in Financial Forensics. He is a member of the American Institute of Certified Public Accountants, the Indiana CPA Society, the Guam CPA Society and the National Association of Certified Valuators & Analysts.</p>

                <p>Jeff is an active member of his church and has served on various boards and committees in the communities in which he has lived. Currently, he is a board member of Hendricks County Bank and Trust and Hendricks Regional Health Foundation.</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* <div className={styles.polaris_JD_BIO_width}>
      <div className={styles.jd_bio_page}>
        <img src="https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_bio_jeff_d_bnnr_img.webp"/>
      </div>
      <div className={styles.jd_bio_page}>
        <img src="https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_jeff_d_block1_img.webp"/>
      </div>
    </div> */}

    <Footer />

  </div>

      
    </>
  )
}
