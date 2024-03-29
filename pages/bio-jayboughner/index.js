import Footer from '@/components/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import styles from './jayB.module.css'
import Head from 'next/head'

export default function Index() {
  return (
    <>

<Head>
        <title>Bio-JayBoughner</title>
        <link
          rel="icon"
          href="https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_fav_icon_new.png"
        />
          <meta property="og:title" content="Jay Boughner: Experienced Managing Director at Donovan CPAs "></meta>
        <meta name="keywords" content="Jay Boughner, Managing Director, Donovan CPAs, Partner, Process Design, Workflow, Business Strategy, Finance, Accounting, IT, Growth, Development, Experience"></meta>
        <meta property="og:description" content="Jay Boughner is a seasoned Managing Director and Partner at Donovan CPAs, with over 25 years of experience in business strategy and finance. Focused on helping clients achieve success in accounting, finance, and IT, Jay is known for his passion for partnering with businesses to establish a solid financial foundation and effective processes. "></meta>
        <meta property="og:url" content="  https://polaris.betoparedes.com/bio-jayboughner "></meta>
        <meta property="og:image" content="https://all-frontend-assets.s3.amazonaws.com/polaris_project/og_img/Bio-Jay_Boughner_OG_image.webp"></meta>
        <meta property="og:image:width" content="1200"></meta>
        <meta property="og:image:height" content="627"></meta>
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

      <div className={styles.j_boughner_page_block1_main_width}>
        <div className={styles.common_width}>
          <div className={styles.j_boughner_page_block1_white_box}>
            <div className={styles.block1_white_box_grey_bar}>
              <h1>Jay Boughner</h1>
            </div>

            <div className={styles.block1_white_box_cont_sec}>

              <div className={styles.block1_white_box_left_sec}>
                <div className={styles.white_box_left_sec_img_box}>
                  <div className={styles.left_sec_img_sub_box}>
                    <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/jay_boughner/jay_boughner_img.webp'></img>
                  </div>
                </div>

                <div className={styles.white_box_left_sec_sky_box}>
                  <h2>Managing Director</h2>
                  <h3>Process Design and Workflow</h3>
                </div>
              </div> 

              <div className={styles.block1_white_box_right_sec_cont}>
                <p>Jay recently became Partner at Donovan CPAs, providing services to business clients, including part-time CFO and controllership functions. He is responsible for coordinating the firm’s strategies and initiatives for growth and development as well. Jay has 25 years of experience in business strategy and finance, starting his career as a financial analyst in the student loan industry. After earning his CPA, his focus shifted to the construction industry, and he became the VP of Finance for an Indianapolis electrical subcontractor. Prior to joining the Donovan team, he spent 11 years at a fast-growing ceiling fan company overseeing the financial, human resource and IT departments.</p>

                <p>Jay is passionate about helping those in business reach success, particularly in the areas of accounting, finance, and IT. He finds connecting with people who have a passion and vision for their business and then being able to partner with them in terms of the financial foundation, processes, and systems that will help them reach their goals, a blessing.</p>

                <p>Over the years, Jay has given his time in service to  Grace Community Church and St Luke’s UMC, including time with Shepherd Community Center in their food pantry. He was also treasurer and a founding board member of Christian Youth Theater during its start in central Indiana.</p>

                <p>When away from work, you will often find Jay building furniture or completing home renovations,  running on the Monon Trail, or relaxing at a local pub listening to live music with friends or family. Jay also loves to travel, meeting new people, and experiencing new cultures. He looks forward to more travel, both domestically and internationally, in the future. Jay’s an avid breakfast fan and loves to start the day with almost any variation of eggs, and good coffee!</p>
              </div>

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
