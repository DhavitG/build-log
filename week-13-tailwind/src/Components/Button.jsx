function Button({ disabled, children, onClick }) {
  return (
    <span
      onClick={onClick}
      className={`text-white px-16 py-4 cursor-pointer text-4xl rounded-2xl text-center ${
        disabled ? "bg-blue-200" : "bg-green-400"
      }`}
    >
      {children}
    </span>
  );
}

export default Button;
