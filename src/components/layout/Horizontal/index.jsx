import { Link } from 'react-router-dom';

const HorizontalLayout = () => {
  const horizontalData = [
    { name: 'Home', path: '/' },
    { name: 'Product', path: '/product' },
    { name: 'About', path: '/about' },
  ];

  return (
    <div className="m-4 h-14 w-auto rounded-md border-2 border-solid border-sky-500 px-4">
      <div className="flex h-full items-center justify-between">
        {/* Logo */}
        <div className="">Logo</div>

        {/* Horizontal buttons */}
        <div className="">
          <ul className="flex items-center">
            {horizontalData.map((index, key) => {
              return (
                <Link
                  className="mr-3 inline-block cursor-pointer rounded border-2 border-gray-800 px-6 py-2 text-xs font-medium uppercase leading-tight text-gray-800 transition duration-150 ease-in-out last:mr-0 hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                  key={key}
                  to={index.path}
                >
                  {index.name}
                </Link>
              );
            })}
          </ul>
        </div>

        {/* profile */}
        <div className="">Profile</div>
      </div>
    </div>
  );
};

export default HorizontalLayout;
