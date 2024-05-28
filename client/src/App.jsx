import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./screens/LandingPage"
import PageNotFound from "./screens/PageNotFound"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Blogs from "./screens/Blogs"
import Test from './components/Test'

const App = () => {
  return (
   <BrowserRouter>
   <Header />
   <Routes>
    <Route index element={<LandingPage/>}></Route>
    <Route path="*" element={<PageNotFound />}></Route>
    <Route path="/blogs" element={<Blogs />} />
    <Route path="/test" element={<Test/>}/>
   </Routes>
   <Footer />
   </BrowserRouter>
  )
}

export default App
