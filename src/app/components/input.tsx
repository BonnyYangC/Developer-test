const Input = ({
  id,
  text,
  value,
  placeHolder,
  required,
}: {
  id: string;
  text: string;
  value: object;
  placeHolder: string;
  required: boolean;
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>{text}</label>
      <input
        autoFocus
        id={id}
        placeholder={placeHolder}
        {...value}
        className="border h-11 px-4 rounded-md focus:outline-green-500 "
        required={required}
      />
    </div>
  );
};

export default Input;
