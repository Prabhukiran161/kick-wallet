export const WalletCard = ({ name, image, onClick }) => {
  return (
    <>
      <div onClick={onClick} className="flex items-center justify-center gap-2 border border-gray-300/75 rounded-2xl p-2 w-30 md:w-40 shadow-sm cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
        <span className="text-xs md:text-base font-medium">{name}</span>
        <img className="w-6 md:w-10 h-6 md:h-10" src={image} alt={name} />
      </div>
    </>
  );
};
