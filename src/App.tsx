import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/layouts.tsx';
import HomePage from './pages/HomePage.tsx';
import CatalogPage from './pages/CatalogPage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import TestimonialsPage from './pages/TestimonialsPage.tsx';
import OrderPage from './pages/OrderPage.tsx';
import ProductDetailPage from './pages/ProductDetailPage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:productId" element={<ProductDetailPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;