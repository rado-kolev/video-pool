import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import SearchFeed from './components/SearchBar';
import { useState } from 'react';

function App() {
  const [expanded, setExpanded] = useState(window.innerWidth > 768);
  // const [sidebarVisible, setSidebarVisible] = useState(window.innerWidth <= 768);

  const toggleSidebar = () => {
    // if (window.innerWidth <= 768) {
    //   // On screens smaller than or equal to 768px, toggle the sidebar visibility
    //   // setSidebarVisible(!sidebarVisible);
    // }
    // On screens larger than 768px, toggle the expanded state
    setExpanded(!expanded);
  };

  return (
    <BrowserRouter>
      <Navbar toggleSidebar={toggleSidebar} />
      <Routes>
        <Route exact path='/' element={<Feed expanded={expanded} />} />
        {/* <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} /> */}
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
