import { visitDetailFields } from "@/app/data";
import DataConfirmRow from "./dataConfirmRow";

// A Seperate component to show data
const DataReview = ({ formData }: { formData: any }) => {
  return (
    <div className="grid grid-cols-2 gap-2 w-1/2">
      {visitDetailFields.map((field) => {
        return (
          <DataConfirmRow
            label={field.label + ":"}
            value={formData[field.prop]}
          />
        );
      })}
    </div>
  );
};
export default DataReview;
