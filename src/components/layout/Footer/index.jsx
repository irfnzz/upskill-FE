const Footer = () => {
  const footerData = [{ name: 'This is footer', description: 'Testing lorem ipsum' }];
  return (
    <div className="h-14 w-full border-2 border-solid border-sky-500">
      {footerData.map((index, key) => {
        return <p key={key}> {index.name}</p>;
      })}
    </div>
  );
};

export default Footer;
