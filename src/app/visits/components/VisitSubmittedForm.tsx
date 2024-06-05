import { useForm } from "react-hook-form";
import { useFormState } from "./FormContext";
import Image from "next/image";
import DataConfirmRow from "@/app/components/dataConfirmRow";
import Button from "@/app/components/button";

export default function VisitSubmittedForm() {
  const { formData, setFormData, onHandleBackToFirst } = useFormState();
  const { register, handleSubmit } = useForm();

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
        <div className="flex gap-4 justify-end">
          <Button text="Register a new Visit" />
        </div>
      </form>
    </>
  );
}
