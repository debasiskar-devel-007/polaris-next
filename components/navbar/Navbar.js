
import { Button, Link } from '@mui/material'
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import styles from './navbar.module.css'
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {

  const [anchorEl5, setAnchorEl5] = useState(null);

  const handleClose5 = () => setAnchorEl5(false);

  const router = useRouter();
  const location = useRouter();
  const { pathname } = location;


  return (
  <>
  <div className={styles.polaris_header_main_wrp}>
   
      <div className={styles.common_width}>
      <div className={styles.polaris_header_sub1_wrp}>
        <div className={styles.polaris_header_sub1_sec1_wrp}>
         <Link> <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/poralis_header_logo.png'/></Link>
        </div>

        <div className={styles.polaris_header_sub1_sec2_wrp}>
          <div className={styles.polaris_header_sub1_sec2_1wrp}>
            <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_navbar_fb_logo.png'/>
          </div>
          <div className={styles.polaris_header_sub1_sec2_1wrp}>
            <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_navbar_tw_logo.png'/>
          </div>
          <div className={styles.polaris_header_sub1_sec2_1wrp}>
            <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_navbar_insta_logo.png'/>
          </div>



        </div>

      </div>
      <div className={styles.polaris_header_sub2_wrp}> 
           <div className={styles.res_menu}>
                <Button ><MenuIcon /></Button>
            </div>
        <div className={styles.polaris_header_sub2_left_wrp}>
          <ul>
            <li><Link >Home</Link></li>
            <li><Link>About</Link></li>
            <li><Link>Services</Link></li>
            <li><Link>Blog</Link></li>
            <li><Link>Contact</Link></li>




          </ul>
        </div>
        <div className={styles.polaris_header_sub2_right_wrp}>
          <div className={styles.polaris_header_login_logo_wrp}>
            <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/banner_login_logo.png'/>
          </div>
          <div className={styles.polaris_header_login_text_wrp}>
            <p>Log In</p>
          </div>
        </div>

      </div>
    </div>
  </div>
  
  </>
  )
}
