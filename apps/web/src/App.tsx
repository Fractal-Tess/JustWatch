import { Route, Routes } from 'react-router-dom';
import BaseLayout from '$layout/BaseLayout';
import Home from '$routes/Home';
import NotFound from '$routes/NotFound';
import About from '$routes/About';
import Blog from '$routes/Blog';
import Contact from '$routes/Contact';

function App() {
  const d = new WebTorrent();

  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
