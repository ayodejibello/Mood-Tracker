const Button = ({ onClick }) => {
  return (
    <button
      className="bg-green-600 hover:bg-green-200 hover:text-black active:bg-green-800 transition-all text-white px-4 w-full py-2 rounded-full shadow-sm cursor-pointer mt-2"
      onClick={onClick}
    >
      Submit entry
    </button>
  );
};
export default Button;
