import React, { useState } from "react"
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";



function App() {

  // let foodItems = ['Dal', 'Salad', 'Dietary fiber fruits', 'Yougurt and Ghee', 'Multi-grain Roti', 'Very Less Spices']

  let [foodItems, setFoodItems]= useState(['Dal', 'Salad', 'Dietary fiber fruits','Yougurt and Ghee' ,'Multi-grain Roti', 'Very Less Spices']);

  // let textStateArr = useState("Food Item Entered by user");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  // let [textToShow , setTextState] = useState();

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log(newFoodItem);
    }
    // console.log(event.target.value);
    // setTextState(event.target.value);
  }

  return (
    <>
      <Container>
        <Container>
          <h1 className="food-heading">Healthy Foods</h1>  
        </Container>
        
        <FoodInput handleKeyDown={onKeyDown} />
        <ErrorMessage foodItems= {foodItems} />
        {/* <p>{textToShow}</p> */}
        <FoodItems foodItems= {foodItems} />
      </Container>

      <Container>
        <p>
          Above is list of heathy food you can eat for great health and life.
        </p>
      </Container>
    </>  
  );
}

export default App;
