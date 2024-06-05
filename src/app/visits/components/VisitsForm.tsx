import { useForm } from "react-hook-form";
import { useFormState } from "./FormContext";
import Card from "../../components/card";
import Button from "@/app/components/button";

type TFormValues = {
  visitorType: string;
  visitReason: string;
};

export default function VisitsForm() {
  const { onHandleNext, setFormData, formData } = useFormState();
  const { register, handleSubmit, setValue } = useForm<TFormValues>({
    defaultValues: formData,
  });

  const onHandleFormSubmit = (data: TFormValues) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
    onHandleNext();
  };

  return (
    <>
      <h1 className="text-2xl font-semibold py-10 text-gray-500">
        Select visit type and reason
      </h1>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(onHandleFormSubmit)}
      >
        <div className="flex gap-y-5 flex-col">
          <label htmlFor="visitor-type">Select a visitor type</label>
          <input
            hidden
            id="visitor-type"
            {...register("visitorType")}
            className="border h-11 px-4 rounded-md focus:outline-green-500 "
            required={true}
          />
          <div className="flex">
            <div className="flex-1 text-center">
              <Card
                text="Visitor"
                image="/visitor.svg"
                onClick={() => setValue("visitorType", "Visitor")}
              />
            </div>

            <div className="flex-1 text-center">
              <Card
                text="Delivery"
                image="/delivery.svg"
                onClick={() => setValue("visitorType", "Delivery")}
              />
            </div>

            <div className="flex-1 text-center">
              <Card
                text="Function"
                image="/function.svg"
                onClick={() => setValue("visitorType", "Function")}
              />
            </div>
          </div>

          <label htmlFor="visit-reasons">Select a visit reason</label>
          <select
            defaultValue={"DEFAULT"}
            id="visit-reasons"
            {...register("visitReason")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
          >
            <option value="DEFAULT">- Select -</option>
            <option value="RE">Reason...</option>
          </select>
        </div>
        <div className="flex justify-end">
          <Button text="Next" />
        </div>
      </form>
    </>
  );
}
