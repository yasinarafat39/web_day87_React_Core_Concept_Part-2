 
import './App.css'
import Counter from './Counter'

function App() {
 
  const handleClick = () => {
    alert('Button clicked')
  }

  const addToFive = (num)  => {
    alert(`${num + 5}`)
  }

  return (
    <>
       <h1>React Core Concepts part 2</h1>
       <button onClick={handleClick}>
        Click Me
       </button>
       <button onClick={() => addToFive(5)}>
        Click Me also
       </button>
       <Counter></Counter>
    </>
  )
}

export default App
