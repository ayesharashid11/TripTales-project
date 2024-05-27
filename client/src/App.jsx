import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./screens/LandingPage"
import PageNotFound from "./screens/PageNotFound"
import Header from "./components/Header"



const App = () => {
  return (
   <BrowserRouter>
   <Header />
   <Routes>
    <Route index element={<LandingPage/>}></Route>
    <Route path="*" element={<PageNotFound />}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
