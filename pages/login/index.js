import React from 'react'
import styles from './login.module.css'
import Head from 'next/head'
export default function Index() {
  return (
    <>
    <Head>
        <title>Polaris-Login</title>
        <link
          rel="icon"
          href="https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_fav_icon_new.png"
        />
        </Head>
      <div className={styles.login_main_wrpr}>
        <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/login/Polarise_Login_Page.webp'/>
      </div>
    </>
  )
}
