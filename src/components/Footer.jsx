export const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-300/75 bg-white z-50">
      {/* Wrapper */}
      <div className="max-w-7xl mx-auto py-5 ">
        {/* Layout */}
        <div className="flex justify-center md:justify-start">
          <div className="">
            <span>Designed and Developed by </span>
            <a
              href="https://github.com/Prabhukiran161"
              target="_blank"
              className="font-semibold"
            >
              Prabhu Kiran
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
