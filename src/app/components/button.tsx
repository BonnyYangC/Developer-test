const Button = ({ text }: { text: string }) => {
  return (
    <button className="h-11 px-6 inline-block bg-green-600 font-semibold text-white rounded-md">
      {text}
    </button>
  );
};

export default Button;
