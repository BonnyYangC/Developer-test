import { useForm } from "react-hook-form";
import { useFormState } from "./FormContext";
import Button from "@/app/components/button";

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
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Visit name</label>
            <input
              autoFocus
              id="name"
              placeholder="ie.Meeting with John Citizen"
              {...register("name")}
              className="border h-11 px-4 rounded-md focus:outline-green-500 "
              required={true}
            />
          </div>

          {/** Entry point field */}
          <div className="flex flex-col gap-1">
            <label htmlFor="entry-point">Entry point</label>
            <select
              defaultValue={"DEFAULT"}
              id="entry-point"
              {...register("entryPoint")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
            >
              <option value="DEFAULT">- Select -</option>
              <option value="EP">Entry point</option>
            </select>
          </div>

          {/** Date field */}
          <div className="flex flex-col gap-1">
            <label htmlFor="date">Date</label>
            <input
              id="date"
              placeholder="00/00/00"
              {...register("date")}
              className="border h-11 px-4 rounded-md focus:outline-green-500 "
              required={true}
            />
          </div>

          {/** Meeting point level field */}
          <div className="flex flex-col gap-1">
            <label htmlFor="meeting-point-level">Meeting point level</label>
            <select
              defaultValue={"DEFAULT"}
              id="meeting-point-level"
              {...register("meetingPointLevel")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
            >
              <option value="DEFAULT">- Select -</option>
              <option value="MPL">Meeting point level</option>
            </select>
          </div>

          {/** Entry time field */}
          <div className="flex flex-col gap-1">
            <label htmlFor="time">Entry time</label>
            <input
              id="time"
              placeholder="00.00am"
              {...register("time")}
              className="border h-11 px-4 rounded-md focus:outline-green-500 "
              required={true}
            />
          </div>

          {/** Meeting point stand field */}
          <div className="flex flex-col gap-1">
            <label htmlFor="meeting-point-stand">Meeting point stand</label>
            <select
              defaultValue={"DEFAULT"}
              id="meeting-point-stand"
              {...register("meetingPointStand")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
            >
              <option value="DEFAULT">- Select -</option>
              <option value="MPS">Meeting point stand</option>
            </select>
          </div>

          {/** Visit duration field */}
          <div className="flex flex-col gap-1">
            <label htmlFor="duration">Visit duration</label>
            <select
              defaultValue={"DEFAULT"}
              id="duration"
              {...register("duration")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
            >
              <option value="DEFAULT">- Select -</option>
              <option value="DU">Duration...</option>
            </select>
          </div>

          {/** Meeting point room field */}
          <div className="flex flex-col gap-1">
            <label htmlFor="meeting-point-room">Meeting point room</label>
            <select
              defaultValue={"DEFAULT"}
              id="meeting-point-room"
              {...register("meetingPointRoom")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
            >
              <option value="DEFAULT">- Select -</option>
              <option value="MPR">Meeting point room</option>
            </select>
          </div>
        </div>
        {/** custom button to next page which is visit review page */}
        <div className="flex gap-4 justify-end mt-4">
          <Button text="Review" />
        </div>
      </form>
    </>
  );
}
