import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './screens/LandingPage';
import PageNotFound from './screens/PageNotFound';
import Blogs from './screens/Blogs';
import CreateBlog from './screens/CreateBlog';
import Tours from './screens/Tours';
import Weather from './screens/Weather';
import Signup from './screens/Signup';
import TourDetail from './screens/TourDetail';
import BlogDetail from './screens/BlogDetail';
import CreateTour from './screens/CreateTour';
import Layout from './components/layout';
import AuthRoute from './components/AuthRoute';

const App = () => {
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
        <Route path="/signup" element={<Signup />} />
        <Route path="/createblogs" element={
          <Layout>
            <CreateBlog />
          </Layout>} />
        <Route path="/tours" element={
          <Layout>
            <Tours />
          </Layout>} />
        <Route path="/tours/:tourName" element={
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
    </BrowserRouter>
  );
};

export default App;
