import React from 'react'
import './ExploreMenu.css'
import { menuList } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    
    <div className="exploremenu" id='explore-menu'>

      <h1>Explore Our Menu</h1>

      <p className='exploremenu-para'> Choose from a diverse menu featuring a delectable array of various cuisines</p>

      <div className="exploremenu-list">

        {

          menuList.map((item,idx) => {

            return <div key={idx} className="exploremenu-item" 
            onClick={() => setCategory(prev=> prev===item.menu_name ? 'All' : item.menu_name)}>

                        <img src={item.menu_img} alt="" className={category===item.menu_name ? 'active' : ''}/>
                        <p>{item.menu_name}</p>


                  </div>
          })
        }
      </div>

      <hr />
      
    </div>
  )
}

export default ExploreMenu