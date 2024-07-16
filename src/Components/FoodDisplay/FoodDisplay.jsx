import React, { useContext } from 'react'
import './FoodDisplay.css'
import { storeContext } from '../../Context/Context'
import FoodCard from '../FoodCard/FoodCard';

const FoodDisplay = ({category}) => {

  const {foodList} = useContext(storeContext);

  return (

    <div className="fooddisplay" id='food-display'>

      <h2>Top Dishes</h2>

      <div className="foodlist">

        {

          foodList.map((item,idx) => {

            if(category==="All" || category===item.category){

            return <FoodCard
            
                          key={idx} 
                          id={item.id}
                          name={item.name}  
                          description={item.description}
                          image={item.image}
                          price={item.price}/>

          }
          })

        
        }


      </div>

      


    </div>
  )
}

export default FoodDisplay