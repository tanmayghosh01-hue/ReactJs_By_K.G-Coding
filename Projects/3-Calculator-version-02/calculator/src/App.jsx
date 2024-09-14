
import { useState } from 'react';
import styles from './App.module.css'
import ButtonsContainer from './components/ButtonsContainer';
import Display from './components/Display';



function App() {

  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === 'C') {
      setCalVal("");
    } else if (buttonText === '=') {
        const newDisplayValue = eval(calVal);
        setCalVal(newDisplayValue);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  }

  return <div className = {styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonsContainer clickButton={onButtonClick} />
  </div>
}

export default App;
