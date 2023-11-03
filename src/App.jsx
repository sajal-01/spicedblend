import { useEffect } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Page from './pages/Page';

function App() {
  useEffect(() => {
    import('preline');
  }, []);
  return (
    <div className="flex flex-col items-center justify-center">
      <AnnouncementBar />
      <Navbar />
      <Page />
    </div>
  );
}

export default App;
