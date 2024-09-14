
// import "../App.css"
import styles from "./item.module.css"

const Item = ({foodItems, handleBuyButton}) => {


  // const handleBuyButtonClicked = (event) => {
  //   console.log(event)
  //   console.log(`${foodItems} being bought`)
  // }

// "list-group-item"
  return (
    <li className={`${styles['style-Item']} list-group-item`}>

      <span className={`${styles['itemSpan']}`}>{foodItems}</span>
      
      <button className={`${styles.button} btn btn-success`}

      onClick={handleBuyButton}
      
      >Buy</button>
    </li>
  );
};

export default Item;
