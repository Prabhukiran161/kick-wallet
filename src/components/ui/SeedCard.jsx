export const SeedCard = ({ word }) => {
  return (
    <div className=" bg-gray-200/30 hover:bg-gray-200/50 transition-transform duration-500 w-26 md:w-2xs p-4 rounded-lg text-sm md:text-lg font-thin">
      {word}
    </div>
  );
};
