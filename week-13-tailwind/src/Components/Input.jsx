function Input({ onClick, type, placeholder }) {
  return (
    <div
      onClick={onClick}
      className="flex justify-center items-center text-white text-4xl rounded-2xl bg-blue-500 m-8 p-8"
    >
      <input
        type={type}
        placeholder={placeholder}
        className="outline-none bg-blue-500 text-center w-full"
      />
    </div>
  );
}

export default Input;
