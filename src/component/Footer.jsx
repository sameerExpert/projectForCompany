import React from 'react'

function Footer() {
  return (
    <>
    <footer className=' footer'>
          <section className=' sec3'>
            <div className='container contact'>

                <div className='container cont'>
                    <div className=' NEWS' style={{color: '#6c757d'}}>Newslleter</div>
                    <div className=' GET' style={{color: '#6c757d'}}>Get news about articles and updates in your indox</div>
                </div>
                   
                   
                    <form className='container form' action="">

                        <div className='container' style={{display:"flex",gap:".5rem",flexDirection:"column"}}>

                        <input className='container' type="text" name="" id="name" placeholder='Name'  style={{border:"none",backgroundColor:"transparent",color:"#6c757d",outline:"none"}} />
                        <div className='line6'></div>

                        </div>
                        
                        <div className='container' style={{display:"flex",gap:".5rem",flexDirection:"column"}}>
                        <input className='container' type="email" name="email" id="email" placeholder='Email' style={{border:"none",backgroundColor:"transparent",color:"#6c757d",outline:"none"}} />
                        <div className='line6'></div>
                        </div>
                        <div className='container' style={{display:"flex",gap:".5rem",flexDirection:"column"}}>
                        <input className='container' type="text" name="" id="name" placeholder='Message' style={{border:"none",backgroundColor:"transparent",color:"#6c757d",outline:"none"}} />
                        <div className='line6'></div>
                        </div>
                       
                    </form>
                   
            </div>
            
            <div className='Get'>
                <div className='container getin'> </div>
                <button className='container button'></button>
            </div>
          </section>
          <div className='lastfoot'>Copyright 2022 All Reseved By SG</div>
    </footer>
      
    </>
  )
}

export default Footer
