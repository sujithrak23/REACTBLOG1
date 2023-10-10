import React from 'react'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebaritem'>
        <span className='sidebartitle'><b> About Our Restaurant</b></span>  
        <img className='sidebarimg'
        src='https://ngaitahu.iwi.nz/wp-content/uploads/2020/07/TK86-SUPER100.jpg' 
        alt='' />
        <p className='sidebartext'>
     
        Sahni says these decisions support the hauora of te taiao, 
        as well as helping customers connect with what 
        they’re eating and be present with the kai.

        </p>
      </div>  

      <div className='sidebaritem'>
        <span className='sidebartitle'><b> Our Branches</b></span> 
        <ul className='sidebarlist' >
            <li className='sidelistitems'>Chennai</li>
            <li className='sidelistitems'>Coimbatore</li>
            <li className='sidelistitems'>Tiruppur</li>
            <li className='sidelistitems'>Salem</li>

        </ul>
     </div>
     
     <div className='sidebaritem'>
        <span className='sidebartitle'><b> Our Menu Card</b></span> 
        <img className='menuimage'
         src='https://ngaitahu.iwi.nz/wp-content/uploads/2020/07/TK86-SUPER132.jpg'
         alt='menuimage'
      />
     </div>

     <div className='sidebaritem'>
        <span className='sidebartitle'><b> Our Chefs</b></span> 
        <img className='chefimage'
         src='https://s3.envato.com/files/260527233/1210113.jpg'
         alt='chefimage'
      />
      <p className='cheftext'>
      A chef or cook plans, prepares and cooks food by using a variety 
      of cooking techniques. A chef usually works in a hotel or a restaurant. 
      They may also work for a contract catering company, providing food for
      events. Cooks are more likely to work in hospitals, schools, works 
      canteens, cafes or fast food outlets.
      </p>
     </div>

    </div>
  )
};

export default  Sidebar;
