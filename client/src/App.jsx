import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./screens/LandingPage"
import PageNotFound from "./screens/PageNotFound"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Blogs from "./screens/Blogs"
import CreateBlog from "./screens/CreateBlog"
import Tours from "./screens/Tours"
import Weather from "./screens/Weather"
import Signup from "./screens/Signup"
import TourDetail from "./screens/TourDetail"
import BlogDetail from "./screens/BlogDetail"
const App = () => {
  return (
   <BrowserRouter>
   <Header />
   <Routes>
    <Route index element={<LandingPage/>}/>
    <Route path="*" element={<PageNotFound />}/>
    <Route path="/blogs" element={<Blogs />} />
    <Route path="/blogs/:blogSlug" element={<BlogDetail/>}/>
    <Route path="/createblogs" element={<CreateBlog />}/>
    <Route path="/tours" element={<Tours/>} />
    <Route path="/tours/:tourName" element={<TourDetail/>} />
    <Route path="/weather" element={<Weather/>}/>
    <Route path="/signup" element={<Signup/>} />
   </Routes>
   <Footer />
   </BrowserRouter>
  )
}

export default App
