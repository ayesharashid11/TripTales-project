import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './screens/LandingPage';
import PageNotFound from './screens/PageNotFound';
import Blogs from './screens/Blogs';
import CreateBlog from './screens/CreateBlog';
import Tours from './screens/Tours';
import Weather from './screens/Weather';
import TourDetail from './screens/TourDetail';
import BlogDetail from './screens/BlogDetail';
import CreateTour from './screens/CreateTour';
import Layout from './components/layout';
import AuthRoute from './components/AuthRoute';
import SignUpForm from './screens/SignUpForm';

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
const App =() =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Layout>
            <LandingPage />
          </Layout>} />
        <Route path="*" element={
          <Layout>
            <PageNotFound />
          </Layout>} />
        <Route path="/blogs" element={
          <Layout>
            <Blogs />
          </Layout>} />
        <Route path="/blogs/:blogSlug" element={
          <Layout>
            <BlogDetail />
          </Layout>} />
        <Route path="/signup" element={
         <SignUpForm />
          } />
        <Route path="/createblogs" element={
          <Layout>
            <AuthRoute>
              <CreateBlog />
            </AuthRoute>
          </Layout>} />
        <Route path="/tours" element={
          <Layout>
            <Tours />
          </Layout>} />
        <Route path="/tours/:id" element={
          <Layout>
            <TourDetail />
          </Layout>} />
        <Route path="/weather" element={
          <Layout>
            <Weather />
          </Layout>} />
        {/* <Route path="/create-tour" element={<CreateTour />} /> */}
        <Route path="/create-tour" element={
          <AuthRoute>
            <CreateTour />
          </AuthRoute>
        } />
      </Routes>
      {/* <ToastContainer /> */}
    </BrowserRouter>
  );
};

export default App;
