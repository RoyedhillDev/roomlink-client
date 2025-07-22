import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../src/components/Layout';
import Home from '../src/pages/Home';
import Browse from '../src/pages/Browse'; // Add this at the top
import About from '../src/pages/About';
import PostRoom from '../src/pages/PostaRoom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/browse" element={<Browse />} />  {/* ✅ Add this line */}
          <Route path="/postaroom" element={<PostRoom />} />
          {/* Add more routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

