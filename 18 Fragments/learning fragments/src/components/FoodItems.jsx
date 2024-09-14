import Item from './Item';
import styles from './item.module.css'


const FoodItems = ({foodItems}) => {

    return (
        <ul className="list-group">
        {foodItems.map((item) => (
            <Item 
            key={item} 
            foodItems={item} 
            handleBuyButton={
                
                (e) => {

                    console.log(`${item} bought`)
                    // e.target.parentElement.classList[0].toggle("styles.toggleColor")
                    // // console.log(parent);

                    console.log(e.target.parentElement.classList[0])
                        
                    e.target.parentElement.classList.toggle(`${styles.toggleColor}`);
                    
                }
            
            
            }
            ></Item>
        ))}
        </ul>
  );
};

export default FoodItems;
