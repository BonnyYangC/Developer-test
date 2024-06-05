// A Seperate component to show data
const DataConfirmRow = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex flex-col my-3 p-1">
      <span className="mr-4 text-slate-500">{label}</span>
      <span className="mr-4 text-slate-900">{value}</span>
    </div>
  );
};
export default DataConfirmRow;
