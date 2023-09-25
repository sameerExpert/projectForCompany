import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck,faBars} from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'


const Navbar=()=>{
    const [handleOnClick,sethandleOnClick]=useState(false);
   

    return(
        <>
           <header className='header'>
             <section className='sec'>
              <nav className="conatiner navbar nav1">
                <div className='conatiner1'>
                    
                    <ul type='none' className=' nav-list1'>
                        <li className='free'><FontAwesomeIcon icon={faTruck} size="lg" style={{color: "#959595",}} /></li>
                       <li> <a className='a' href="/">Free Delivery</a></li> 
                       <li><a className='a' href="/">|</a></li> 
                       <li><a className='a' href="/">Return Policy</a></li> 
                    </ul>

                    <ul type='none' className='nav-list2 '>
                    <a className='a' href="">Login</a>
                    <li className='list1'><a className='a f' href="">Follow Us</a>
                    <a className='a' href="/"><FontAwesomeIcon icon={faFacebook} size="lg" style={{color: "#959595",}} /></a>
                    <a className='a' href="/"><FontAwesomeIcon icon={faLinkedin} size="lg" style={{color: "#959595",}} /></a>
                    <a className='a' href="/"><FontAwesomeIcon icon={faTwitter} size="lg" style={{color: "#959595",}} /></a>
                    <a className='a' href="/"><FontAwesomeIcon icon={faInstagram} size="lg" style={{color: "#959595",}} /></a>
                    </li>
                    </ul>
                </div>
              </nav>
              </section>


                <section className=' section'>
                  <div className='container'>
                    <div className='group15'>
              <nav className="container navbar nav2  ">

                <div className='container container2'>

                    <div className="container Shopkart-nav-list">
                    <p className='Shopkart'>ShopKart</p> 
                    <p className=' p'>Wishlist(0)  Bag(0)</p>
                    <button className="menu" onClick={()=>sethandleOnClick(!handleOnClick)}><FontAwesomeIcon icon={faBars}  size="2xl" style={{color: "white",}} /></button>
                    </div>
                    <p className='container line'></p>
                       <ul type='none' className={handleOnClick ?"mobile-nav-list3 nav-list3":"container nav-list3"} onClick={()=>sethandleOnClick(false)}>
                        <li><a className='a1' href="/">Home</a></li>
                        <li><a className='a1' href="/">About</a></li>
                        <li><select name="" id="product" className='product'>
                            <option value="" className='product'>Our Product</option>
                            <option value="Our Product1" className='product'>Our Product1</option>
                            <option value="Our Product2" className='product'>Our Product2</option>
                            <option value="Our Product3" className='product'>Our Product3</option>
                            </select></li>
                            <li><a className='a1' href="/">Contact</a></li>
                        </ul>
               <div className=" container style">
                <div className="fresh"></div>
                <div className="year"></div>
                <div className="look"></div>
              </div>
              <div className='container seeMore'><button className='seemore'>See More?</button></div>
                </div>

                
                
               
              </nav>
              </div>
              </div>
              </section>
           </header>
        </>
    )

}


export default Navbar