const Select = ({
  id,
  text,
  value,
  options,
}: {
  id: string;
  text: string;
  value: object;
  options: Array<{ text: string; value: string }>;
}) => {
  const defaultValue = "DEFAULT";
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>{text}</label>
      <select
        defaultValue={defaultValue}
        id={id}
        {...value}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
      >
        <option value={defaultValue}>- Select -</option>
        {options.map((option) => {
          return <option value={option.value}>{option.text}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
