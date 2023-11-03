import { useEffect } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Page from './pages/Page';

export default function App() {
  useEffect(() => {
    import('preline');
  }, []);
  return (
    <div>
      <AnnouncementBar />
      <Navbar />
      <Page />
    </div>
  );
}
