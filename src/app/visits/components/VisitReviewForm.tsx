import { useForm } from "react-hook-form";
import { useFormState } from "./FormContext";
import Image from "next/image";
import DataConfirmRow from "@/app/components/dataConfirmRow";
import Button from "@/app/components/button";

{
  /** This is the third page of design, displaying visit details*/
}
export default function VisitReviewForm() {
  const { setFormData, formData, onHandleBack, onHandleNext } = useFormState();
  const { register, handleSubmit } = useForm();

  {
    /** Handle form submit event:
     * suppose to submit form data to endpoint but now only console log the form data
     * and navigate to next page */
  }
  const onHandleFormSubmit = () => {
    console.log(formData);
    onHandleNext();
  };

  return (
    <>
      <h1 className="text-3xl font-semibold py-10">
        Review your Visit details
      </h1>

      <form className="space-y-6" onSubmit={handleSubmit(onHandleFormSubmit)}>
        <div className="flex py-5 items-end justify-between w-6/12">
          <h1 className="text-2xl font-semibold text-gray-500">
            Your Visit details
          </h1>

          {/** edit button to back to prev page for editing */}
          <button
            type="button"
            onClick={onHandleBack}
            className="h-11 px-6 inline-block font-semibold text-white rounded-md"
          >
            <div className="flex items-end">
              <Image alt="" src="/edit.svg" width={30} height={30} priority />
              <span className="text-green-600">Edit</span>
            </div>
          </button>
        </div>
        {/** custom component to display visit information */}
        <div className="grid grid-cols-2 gap-2 w-1/2">
          <DataConfirmRow label="Visit name:" value={formData.name} />
          <DataConfirmRow
            label="Meeting point level:"
            value={formData.meetingPointLevel}
          />
          <DataConfirmRow label="Date:" value={formData.date} />
          <DataConfirmRow
            label="Meeting point stand:"
            value={formData.meetingPointStand}
          />
          <DataConfirmRow label="Entry time:" value={formData.time} />
          <DataConfirmRow
            label="Meeting point room:"
            value={formData.meetingPointRoom}
          />
          <DataConfirmRow label="Visit duration:" value={formData.duration} />
        </div>
        {/** custom button to next page which is visit submit page */}
        <div className="flex gap-4 justify-end">
          <Button text="Submit Visit" />
        </div>
      </form>
    </>
  );
}
