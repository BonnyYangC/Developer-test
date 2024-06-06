import { useForm } from "react-hook-form";
import { useFormState } from "./formContext";
import Button from "@/app/components/button";
import Input from "@/app/components/input";
import Select from "@/app/components/select";

{
  /** defination of form data, including all fields like name, date etc. */
}
type TFormValues = {
  name: string;
  date: string;
  time: string;
  duration: string;
  entryPoint: string;
  meetingPointLevel: string;
  meetingPointStand: string;
  meetingPointRoom: string;
};

{
  /** This is the second page of design, asking to input visit details*/
}
export default function VisitDetailForm() {
  const { onHandleNext, setFormData, formData } = useFormState();
  const { register, handleSubmit } = useForm<TFormValues>({
    defaultValues: formData,
  });

  {
    /** Handle form submit event: update form data and navigate to next page */
  }
  const onHandleFormSubmit = (data: TFormValues) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
    onHandleNext();
  };

  return (
    <>
      <h1 className="text-2xl font-semibold py-10 text-gray-500">
        Add Visit details
      </h1>
      {/** form to handle visit details fields */}
      <form
        className="flex gap-1 flex-col"
        onSubmit={handleSubmit(onHandleFormSubmit)}
      >
        <div className="grid grid-cols-2 gap-5 w-1/2">
          {/** Visit name field */}
          <Input
            id="name"
            text="Visit name"
            value={register("name")}
            placeHolder="ie.Meeting with John Citizen"
            required={true}
          />

          {/** Entry point field */}
          <Select
            id="entry-point"
            text="Entry point"
            value={register("entryPoint")}
            options={[{ text: "Entry point", value: "Entry point" }]}
          />

          {/** Date field */}
          <Input
            id="date"
            text="Date"
            value={register("date")}
            placeHolder="00/00/00"
            required={true}
          />

          {/** Meeting point level field */}
          <Select
            id="meeting-point-level"
            text="Meeting point level"
            value={register("meetingPointLevel")}
            options={[{ text: "Level 1", value: "Level 1" }]}
          />

          {/** Entry time field */}
          <Input
            id="time"
            text="Entry time"
            value={register("time")}
            placeHolder="00.00am"
            required={true}
          />

          {/** Meeting point stand field */}
          <Select
            id="meeting-point-stand"
            text="Meeting point stand"
            value={register("meetingPointStand")}
            options={[{ text: "Stand Grand", value: "Stand Grand" }]}
          />

          {/** Visit duration field */}
          <Select
            id="duration"
            text="Visit duration"
            value={register("duration")}
            options={[{ text: "30 mins", value: "30 mins" }]}
          />

          {/** Meeting point room field */}
          <Select
            id="meeting-point-room"
            text="Meeting point room"
            value={register("meetingPointRoom")}
            options={[{ text: "Ballroom", value: "Ballroom" }]}
          />
        </div>
        {/** custom button to next page which is visit review page */}
        <div className="flex gap-4 justify-end mt-4">
          <Button text="Review" />
        </div>
      </form>
    </>
  );
}
