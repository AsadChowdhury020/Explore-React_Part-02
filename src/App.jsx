import './App.css'
import BatsMan from './BatsMan';
import Counter from './Counter';

function App() {

  function handleClick(){
    alert('I am clicked') ;
  }

  const handleClick3 = () =>{
    alert('Click 3')
  }

  const handleAddFive = (number) => {
    const newNumber = number + 5 ;
    alert('New number is '+ newNumber) ;
  }

  return (
    <>
        <h3>Vite + React</h3>

        <BatsMan></BatsMan>

        {/* <Counter></Counter>

        <button onClick={handleClick} >Click Me</button>
        <button onClick={function handleClick2(){
          alert('Click me again')
        }} >Click Me Again</button>
        <button onClick={handleClick3} >Click Me 3</button>
        <button onClick={() =>{
          alert('Click 4')
        }} >Click Me 4</button>

        <button onClick={() => handleAddFive(12)} >Click Add</button> */}
    </>
  )
}

export default App
