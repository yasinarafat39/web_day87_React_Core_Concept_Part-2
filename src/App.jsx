 
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

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
       <Friends></Friends>
       <button onClick={handleClick}>
        Click Me
       </button>
       <button onClick={() => addToFive(5)}>
        Click Me also
       </button>
       <Counter></Counter>
       <Team></Team>
       <Users></Users>
    </>
  )
}

export default App
