import { useForm } from "react-hook-form";
import { useFormState } from "./formContext";
import Image from "next/image";
import Button from "@/app/components/button";
import DataReview from "./dataReview";
{
  /** This is the forth page of design, displaying visit info along with message box showing submit successful*/
}
export default function VisitSubmittedForm() {
  const { formData, setFormData, onHandleBackToFirst } = useFormState();
  const { register, handleSubmit } = useForm();
  {
    /** Handle form submit event: clear form data and navigate to first page */
  }
  const onHandleFormSubmit = () => {
    setFormData({});
    onHandleBackToFirst();
  };

  return (
    <>
      <div className="flex items-start w-1/2 bg-green-200 border-solid border-green-600 border-2 rounded-lg my-10 p-10">
        <Image alt="" src="/tick.svg" width={50} height={50} priority />
        <div className="flex flex-col ml-2 gap-2">
          <p className="font-semibold">Your visit sent successfully</p>
          <p className="text-gray-400">
            Great news {formData.name}, your Visit registration is completed.
          </p>
        </div>
      </div>
      <h1 className="text-2xl font-semibold text-gray-500">
        Your Visit details
      </h1>
      <form className="space-y-6" onSubmit={handleSubmit(onHandleFormSubmit)}>
        {/** custom component to display visit information */}
        <DataReview formData={formData} />
        {/** custom button to next page which will back to first page with form data resetted */}
        <div className="flex gap-4 justify-end">
          <Button text="Register a new Visit" />
        </div>
      </form>
    </>
  );
}
