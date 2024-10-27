import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom'


export const Navbar = ({ isLoggedIn, home, login,register,size}) => {
  return (
    <>
    <nav className="c_navbar navbar navbar-expand-lg z-1 w-full position-fixed">
        <div className="container-fluid d-flex justify-content-between">
            <a className= {size} href="/">
                      <svg width="200" height="47" viewBox="0 0 207 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 23.9799L28.3042 3.57047C29.1578 2.88192 30.3789 3.02327 31.0682 3.89042L50.0377 27.7542C51.1238 29.1208 50.1954 31.1937 48.4969 31.1937H35.0784C33.9715 31.1937 33.0741 32.1329 33.0741 33.2914V48.8027M52.7715 38.7641V54.9562C52.7715 56.1145 51.8743 57.0539 50.7673 57.0539H9.32011C8.21322 57.0539 7.31589 56.1145 7.31589 54.9562V32.2217C7.31589 31.5732 7.60247 30.9611 8.09217 30.5638L24.9333 16.8987" stroke="url(#paint0_linear_410_153)" stroke-width="4.49258" stroke-linecap="round"/>
              <path d="M72.7127 47.0743C70.597 47.0743 68.9548 46.4914 67.7858 45.326C66.6164 44.1607 66.0321 42.5291 66.0321 40.4313V22.9499C66.0321 20.9104 66.5886 19.3225 67.702 18.1863C68.8433 17.0499 70.4162 16.4818 72.4203 16.4818H82.066C85.2947 16.4818 87.7861 17.1957 89.5398 18.6233C91.2936 20.0509 92.1706 22.1196 92.1706 24.8292C92.1706 26.1694 91.7945 27.4223 91.0431 28.5877C90.2913 29.724 89.3172 30.5835 88.1204 31.1662V31.2099C89.4565 31.7635 90.5421 32.6521 91.3769 33.8758C92.2399 35.0704 92.6716 36.3669 92.6716 37.7655C92.6716 40.679 91.7667 42.9661 89.9574 44.6269C88.1759 46.2583 85.7123 47.0743 82.5669 47.0743H72.7127ZM82.066 29.1122C83.4854 29.1122 84.5852 28.7479 85.3644 28.0195C86.1718 27.2911 86.5752 26.2423 86.5752 24.8729C86.5752 23.5326 86.1995 22.542 85.4477 21.901C84.6963 21.26 83.5688 20.9396 82.066 20.9396H73.2974C72.7405 20.9396 72.2951 21.129 71.9613 21.5077C71.6548 21.8865 71.5018 22.4109 71.5018 23.081V29.1122H82.066ZM82.066 42.6165C85.4062 42.6165 87.0762 41.0286 87.0762 37.8528C87.0762 36.4835 86.6308 35.42 85.7401 34.6625C84.8771 33.905 83.6525 33.5262 82.066 33.5262H71.5018V40.475C71.5018 41.1452 71.6548 41.6696 71.9613 42.0484C72.2951 42.4271 72.7405 42.6165 73.2974 42.6165H82.066ZM99.2368 47.5114C98.3738 47.5114 97.7057 47.2783 97.2326 46.8121C96.7594 46.346 96.5226 45.7049 96.5226 44.8893V27.8447C96.5226 26.9998 96.7453 26.3588 97.1907 25.9218C97.6638 25.4556 98.3182 25.2225 99.1534 25.2225C99.9882 25.2225 100.643 25.4556 101.116 25.9218C101.589 26.3879 101.826 27.0289 101.826 27.8447V29.2869C102.689 28.1215 103.69 27.2329 104.832 26.621C106.001 25.98 107.253 25.6596 108.59 25.6596H109.509C110.399 25.6596 111.081 25.8635 111.555 26.2714C112.056 26.6502 112.306 27.2038 112.306 27.9321C112.306 28.6605 112.056 29.2287 111.555 29.6366C111.081 30.0153 110.399 30.2047 109.509 30.2047H108.089C106.224 30.2047 104.734 30.8311 103.621 32.084C102.535 33.3077 101.993 34.9975 101.993 37.1536V44.8893C101.993 45.7049 101.742 46.346 101.241 46.8121C100.74 47.2783 100.072 47.5114 99.2368 47.5114ZM117.276 22.5129C116.246 22.5129 115.411 22.2215 114.771 21.6388C114.159 21.027 113.852 20.2403 113.852 19.2788C113.852 18.3173 114.159 17.5453 114.771 16.9626C115.411 16.3507 116.246 16.0448 117.276 16.0448C118.307 16.0448 119.141 16.3507 119.782 16.9626C120.45 17.5453 120.784 18.3173 120.784 19.2788C120.784 20.2403 120.45 21.027 119.782 21.6388C119.141 22.2215 118.307 22.5129 117.276 22.5129ZM117.318 47.5114C116.455 47.5114 115.787 47.2783 115.314 46.8121C114.841 46.346 114.604 45.7049 114.604 44.8893V27.8447C114.604 27.0289 114.841 26.3879 115.314 25.9218C115.787 25.4556 116.455 25.2225 117.318 25.2225C118.153 25.2225 118.821 25.4556 119.323 25.9218C119.823 26.3879 120.074 27.0289 120.074 27.8447V44.8893C120.074 45.7049 119.823 46.346 119.323 46.8121C118.821 47.2783 118.153 47.5114 117.318 47.5114ZM135.975 47.5114C132.245 47.5114 129.349 46.5352 127.29 44.5832C125.23 42.602 124.2 39.8486 124.2 36.3232C124.2 32.7978 125.23 30.0736 127.29 28.1507C129.349 26.1986 132.245 25.2225 135.975 25.2225C137.951 25.2225 139.733 25.5722 141.319 26.2714C142.934 26.9415 144.201 27.903 145.119 29.1558C145.453 29.5929 145.62 30.0591 145.62 30.5543C145.62 31.3119 145.244 31.982 144.493 32.5647C144.159 32.8269 143.741 32.9581 143.24 32.9581C142.85 32.9581 142.447 32.8706 142.029 32.6958C141.612 32.4919 141.25 32.2151 140.944 31.8654C140.387 31.1953 139.663 30.6855 138.772 30.3358C137.909 29.9571 136.977 29.7677 135.975 29.7677C133.998 29.7677 132.453 30.3504 131.34 31.5158C130.254 32.6521 129.711 34.2546 129.711 36.3232C129.711 38.4501 130.254 40.0963 131.34 41.2617C132.453 42.398 133.998 42.9661 135.975 42.9661C138.174 42.9661 140.053 42.1941 141.612 40.6499C142.391 39.834 143.156 39.4262 143.908 39.4262C144.409 39.4262 144.869 39.601 145.286 39.9506C145.954 40.5042 146.288 41.1743 146.288 41.961C146.288 42.4563 146.093 42.937 145.703 43.4032C144.423 44.8309 142.99 45.8798 141.403 46.55C139.844 47.191 138.035 47.5114 135.975 47.5114ZM152.409 47.5114C151.546 47.5114 150.878 47.2783 150.405 46.8121C149.931 46.346 149.695 45.7049 149.695 44.8893V16.5255C149.695 15.7097 149.931 15.0687 150.405 14.6026C150.878 14.1364 151.546 13.9033 152.409 13.9033C153.244 13.9033 153.912 14.1364 154.413 14.6026C154.914 15.0687 155.165 15.7097 155.165 16.5255V33.9195L167.357 25.7032C167.97 25.2954 168.526 25.0914 169.027 25.0914C169.834 25.0914 170.419 25.4847 170.781 26.2714C171.004 26.7959 171.115 27.2329 171.115 27.5825C171.115 28.34 170.684 28.9956 169.821 29.5491L163.349 33.7447C165.798 35.2889 167.622 36.9205 168.818 38.6395C170.043 40.3585 170.795 42.3834 171.073 44.7143C171.101 44.8309 171.115 45.0056 171.115 45.2387C171.115 45.967 170.906 46.5352 170.489 46.9432C170.099 47.3221 169.542 47.5114 168.818 47.5114C168.067 47.5114 167.44 47.3512 166.939 47.0304C166.466 46.7101 166.16 46.244 166.021 45.632C165.603 43.9422 165.13 42.5728 164.601 41.5239C164.1 40.475 163.432 39.5718 162.597 38.8143C161.79 38.0277 160.69 37.2264 159.298 36.4106L155.165 39.3825V44.8893C155.165 45.7049 154.914 46.346 154.413 46.8121C153.912 47.2783 153.244 47.5114 152.409 47.5114ZM178.077 47.5114C177.214 47.5114 176.546 47.2783 176.072 46.8121C175.599 46.346 175.363 45.7049 175.363 44.8893V16.5255C175.363 15.7097 175.599 15.0687 176.072 14.6026C176.546 14.1364 177.214 13.9033 178.077 13.9033C178.911 13.9033 179.58 14.1364 180.081 14.6026C180.582 15.0687 180.832 15.7097 180.832 16.5255V44.8893C180.832 45.7049 180.582 46.346 180.081 46.8121C179.58 47.2783 178.911 47.5114 178.077 47.5114ZM195.851 57.9999C193.819 57.9999 191.968 57.6653 190.298 56.9952C188.655 56.3541 187.389 55.4508 186.498 54.2854C186.136 53.7902 185.955 53.2802 185.955 52.7559C185.955 52.0566 186.276 51.4156 186.916 50.8326C187.333 50.4832 187.793 50.3083 188.294 50.3083C189.045 50.3083 189.769 50.7016 190.465 51.4885C191.662 52.8288 193.416 53.4985 195.726 53.4985C197.703 53.4985 199.192 52.9451 200.194 51.8379C201.224 50.7602 201.739 49.172 201.739 47.0743V45.2387C201.071 45.9089 200.208 46.4623 199.15 46.8994C198.092 47.3074 197.09 47.5114 196.143 47.5114C192.664 47.5114 189.95 46.55 188.001 44.6269C186.053 42.6748 185.079 39.9652 185.079 36.498V27.6699C185.079 26.9706 185.343 26.3879 185.872 25.9218C186.401 25.4556 187.055 25.2225 187.834 25.2225C188.586 25.2225 189.226 25.4702 189.755 25.9655C190.284 26.4316 190.548 26.9998 190.548 27.6699V36.498C190.548 38.5958 191.036 40.2274 192.01 41.3928C193.012 42.5583 194.39 43.141 196.143 43.141C197.842 43.141 199.164 42.5583 200.11 41.3928C201.057 40.2274 201.53 38.5958 201.53 36.498V28.1507C201.53 27.2183 201.767 26.5045 202.24 26.0092C202.741 25.4847 203.423 25.2225 204.286 25.2225C205.149 25.2225 205.817 25.4847 206.29 26.0092C206.763 26.5045 207 27.2183 207 28.1507V46.3312C207 50.0023 206.012 52.8579 204.035 54.897C202.087 56.9656 199.359 57.9999 195.851 57.9999Z" fill="url(#paint1_linear_410_153)"/>
              <defs>
              <linearGradient id="paint0_linear_410_153" x1="52.7715" y1="54.257" x2="19.8899" y2="21.7551" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0368FE"/>
              <stop offset="1" stop-color="#023E98"/>
              </linearGradient>
              <linearGradient id="paint1_linear_410_153" x1="75.1345" y1="28.909" x2="143.865" y2="56.8899" gradientUnits="userSpaceOnUse">
              <stop offset="0.535" stop-color="#0368FE"/>
              <stop offset="1" stop-color="#3CD36D"/>
              </linearGradient>
              </defs>
              </svg>
        </a>
    <div className="collapse navbar-collapse col-12" id="navbarSupportedContent">
    
    {home=='home' ? (

      <>
      
      
      <ul className="navbar-nav mb-2  mb-lg-0">
            <li className="nav-item">
                <a className="nav-link p-36 " href="#">Cómo funciona</a>
            </li>
            <li className="nav-item">
               <Link className="nav-link" to="Login">Ingresar</Link>
            </li>
            <li>
              <Link className="btn btn-outline-primary" to="/Register">Crear cuenta</Link>
            </li>
          </ul>
      </>
    ) : login=="login" ? (
      <>
         <ul className="navbar-nav mb-2 col-12 mb-lg-2">
               <Link className="btn btn-outline-primary btn-rlogin" to="/Register">Crear cuenta</Link>
        </ul>
      </>
     
    ): register=="register" ?
    <>
     <ul className="navbar-nav mb-2  mb-lg-0">
              <li className="nav-item">
                    <Link className="nav-link" to="/Login">Ingresar</Link>
              </li>
    </ul>
    </>

    :""}
        
    </div>
      
  </div>
</nav>

    </>
  );
};
