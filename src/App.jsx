import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Browse from './pages/Browse'; // Add this at the top
import About from './pages/About';
import PostRoom from './pages/PostaRoom';
import ViewRooms from './pages/ViewRooms';

<Route path="/rooms" element={<ViewRooms />} />


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

