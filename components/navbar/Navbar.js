
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

  const handleClick5 = () => {
    setAnchorEl5((current) => !current);
  };

  return (
  <>
  <div className="polaris_header_main_wrp">
   
      <div className="common_width">
      <div className="polaris_header_sub1_wrp">
        <div className="polaris_header_sub1_sec1_wrp">
         <Link onClick={() => router.push('/')}> <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/poralis_header_logo.png'/></Link>
        </div>

        <div className="polaris_header_sub1_sec2_wrp">
          <div className="polaris_header_sub1_sec2_1wrp">
           <Link href="https://www.facebook.com/kajabi" target="_blank"> <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_navbar_fb_logo.png'/> </Link>
          </div>
          <div className="polaris_header_sub1_sec2_1wrp">
          <Link href="https://twitter.com/kajabi" target="_blank"> <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_navbar_tw_logo.png'/></Link>
          </div>
          <div className="polaris_header_sub1_sec2_1wrp">
          <Link href="https://www.instagram.com/kajabi/" target="_blank"> <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_navbar_insta_logo.png'/> </Link>
          </div>



        </div>

      </div>
      <div className="polaris_header_sub2_wrp"> 
           <div className="res_menu">
                <Button onClick={handleClick5}><MenuIcon /></Button>
            </div>
        <div className={`polaris_header_sub2_left_wrp ${anchorEl5 ? "showdiv" : ""}`}>
          <ul className="nav_ul">
            <li className={(pathname && pathname == '/') ? 'active' : ''}><Link onClick={() => router.push('/')}>Home</Link></li>
            <li className={(pathname && pathname == '/about') ? 'active' : ''}><Link onClick={() => router.push('/about')}>About</Link></li>
            <li className={(pathname && pathname == '/services') ? 'active' : ''}><Link onClick={() => router.push('/services')}>Services</Link></li>
            <li className={(pathname && pathname == '/blog') ? 'active' : ''}><Link onClick={() => router.push('/blog')}>Blog</Link></li>
            <li className={(pathname && pathname == '/contact') ? 'active' : ''}><Link onClick={() => router.push('/contact')}>Contact</Link></li>
          </ul>
          
        </div>
        <div className="polaris_header_sub2_right_wrp">
          <Link className='polar_nav_link' href="/login">
          <div className="polaris_header_login_logo_wrp">
            <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/banner_login_logo.png'/>
          </div>
          <div className="polaris_header_login_text_wrp">
            <p>Log In</p>
          </div>
          </Link>
        </div>

      </div>
    </div>
  </div>
  
  </>
  )
}
