import HorizontalLayout from './Horizontal';
import Footer from './Footer';
const Layout = ({ children }) => {
  return (
    <div className="flex h-screen w-screen flex-col">
      <HorizontalLayout />
      <div className="mx-4 mb-4 h-full flex-1 border-2 border-solid border-sky-500">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
