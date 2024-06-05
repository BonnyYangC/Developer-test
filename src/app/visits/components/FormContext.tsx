import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface IFormContext {
  formData: any;
  setFormData: Dispatch<SetStateAction<any>>;
  onHandleBack: () => void;
  onHandleNext: () => void;
  step: number;
  onHandleBackToFirst: () => void;
}

{
  /** custom form context to handle event like set form data, back and forward page */
}
const FormContext = createContext<IFormContext>({
  formData: {},
  onHandleBack: () => {},
  onHandleNext: () => {},
  setFormData: () => {},
  step: 0,
  onHandleBackToFirst: () => {},
});

interface IProps {
  children: ReactNode;
}

export function FormProvider({ children }: IProps) {
  const [formData, setFormData] = useState();
  const [step, setStep] = useState(1);

  {
    /** handle next event to next page */
  }
  function onHandleNext() {
    setStep((prev) => prev + 1);
  }

  {
    /** handle back event to prev page */
  }
  function onHandleBack() {
    setStep((prev) => prev - 1);
  }

  {
    /** handle special event back to first page */
  }
  function onHandleBackToFirst() {
    setStep(1);
  }

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        onHandleBack,
        onHandleNext,
        step,
        onHandleBackToFirst,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormState() {
  return useContext(FormContext);
}
