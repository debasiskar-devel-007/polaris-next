import { Link } from '@mui/material'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

export default function Footer() {

    const router = useRouter();
    const location = useRouter();
    const { pathname } = location;
    const [showTopBtn, setShowTopBtn] = useState(false);


    useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 100) {
            setShowTopBtn(true);
          } else {
            setShowTopBtn(false);
          }
        });
      }, []);
    
    
      const goToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };

  return (
    <>
      
<div className='polar_footer_main'>

    <div className='common_width'>

        <div className='polar_footer_sub'>

            <div className='polar_logo'>
                <Link href="/">
                <img src="https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/poralis_header_logo.png"/>
                </Link>
            </div>

            <div className='polar_menu'>
          
             <ul className="foot_ul">
                 <li className={(pathname && pathname == '/') ? 'active1' : ''}><Link onClick={() => router.push('/')}>Home</Link></li>
                 <li className={(pathname && pathname == '/about') ? 'active1' : ''}><Link onClick={() => router.push('/about')}>About</Link></li>
                 <li className={(pathname && pathname == '/services') ? 'active1' : ''}><Link onClick={() => router.push('/services')}>Services</Link></li>
                 <li className={(pathname && pathname == '/blog') ? 'active1' : ''}><Link onClick={() => router.push('/blog')}>Blog</Link></li>
                 <li className={(pathname && pathname == '/contact') ? 'active1' : ''}><Link onClick={() => router.push('/contact')}>Contact</Link></li>
             </ul>
             
            </div>

            <div className='polar_link'>
               <span><p>© 2024 Polaris,  All rights reserved.</p> </span> <span><div className="polaris_footer_sub1_sec2_wrp">
          <div className="polaris_footer_sub1_sec2_1wrp">
           <Link href="https://www.facebook.com/kajabi" target="_blank"> <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_navbar_fb_logo.png'/> </Link>
          </div>
          <div className="polaris_footer_sub1_sec2_1wrp">
          <Link href="https://twitter.com/kajabi" target="_blank"> <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_navbar_tw_logo.png'/></Link>
          </div>
          <div className="polaris_footer_sub1_sec2_1wrp">
          <Link href="https://www.instagram.com/kajabi/" target="_blank"> <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_navbar_insta_logo.png'/> </Link>
          </div>



        </div></span>
        
            </div>

        </div>

    </div>

    {/* <div className="top-to-btm">
        {" "}
        {showTopBtn && (
          <a className="icon-position icon-style" onClick={goToTop}>
            <KeyboardDoubleArrowUpIcon />
          </a>
        )}{" "}
      </div> */}

</div>

    </>
  )
}
