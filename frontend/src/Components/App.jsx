import { useState } from 'react'
import Heading from "./Header";
import Footer from "./Footer";
import Home from './Home';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Heading />
      <Footer />
    </div>
  )
}

export default App
