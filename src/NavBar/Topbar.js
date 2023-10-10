import React from 'react'

function Topbar() {
  return (
    <div className='nav'>
      
      <div className='topleft'> <b>GET MORE INTERNATIONAL FOOD ITEMS</b>
      
      <div className='topicons'>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-whatsapp"></i>
      </div>
        
     </div>

      <div className='topcentre'> 
        <ul className='toplist'> 
            <li className='toplistitem'>HOME</li>
            <li className='toplistitem'>ABOUT</li>
            <li className='toplistitem'>CONTACT</li>
            <li className='toplistitem'>LOGOUT</li>
        </ul>
      </div>

      <div className='topright'>  
           <i class="fa-solid fa-magnifying-glass"></i> 
           <img className='topimage' 
           src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg" 
           alt='toprightimg'></img>
      </div>

    </div>
  )
};

export default Topbar;
