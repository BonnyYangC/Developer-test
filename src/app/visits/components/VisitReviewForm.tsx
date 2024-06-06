import { useForm } from "react-hook-form";
import { useFormState } from "./formContext";
import Image from "next/image";
import Button from "@/app/components/button";
import DataReview from "./dataReview";

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
        <DataReview formData={formData} />
        {/** custom button to next page which is visit submit page */}
        <div className="flex gap-4 justify-end">
          <Button text="Submit Visit" />
        </div>
      </form>
    </>
  );
}
