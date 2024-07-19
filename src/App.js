import { Route,Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Home"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />

        </Route>
      </Routes>

    </div>
  )
}

export default App
