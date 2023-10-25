import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import {
  ErrorBoundary,
  Navbar,
  Feed,
  SearchFeed,
  VideoDetail,
  ChannelDetail,
  NotFoundComponent,
  LoadingIndicator,
} from './components';

function App() {
  const [expanded, setExpanded] = useState(true);
  const [sizeHandle, setSizeHandle] = useState('vertical');
  const [isLoading, setIsLoading] = useState(true);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  // Adjust sizeHandle based on window.innerWidth
  window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
      setSizeHandle('horizontal');
    } else {
      setSizeHandle('vertical');
    }
  });

  // Simulate loading for demonstration purposes
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Set loading state to false after a delay (simulating data loading)
    }, 2000); // Adjust the delay as needed
  }, []);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Navbar toggleSidebar={toggleSidebar} />
        <Routes>
          <Route
            exact
            path='/'
            element={<Feed expanded={expanded} sizeHandle={sizeHandle} />}
          />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route
            path='/search/:searchTerm'
            element={<SearchFeed expanded={expanded} sizeHandle={sizeHandle} />}
          />
          <Route path='/404' element={<NotFoundComponent />} />
          <Route path='*' element={<Navigate to='/404' />} />
        </Routes>
        {isLoading && <LoadingIndicator />}{' '}
        {/* Display the loading spinner conditionally */}
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
