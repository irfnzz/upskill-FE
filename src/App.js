import Layout from './components/layout';
import { ProductDetailsPage, ProductListPage } from './pages';
import { Routes, Route } from 'react-router-dom';

const routesData = [
  { element: <ProductListPage />, path: '/' },
  { element: <ProductDetailsPage />, path: '/product' },
];

function App() {
  return (
    <Layout>
      <Routes>
        {routesData.map((index, key) => {
          return <Route key={key} path={index.path} element={index.element} />;
        })}
      </Routes>
    </Layout>
  );
}

export default App;
