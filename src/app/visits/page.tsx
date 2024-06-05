"use client";

import VisitsForm from "./components/VisitsForm";
import VisitDetailForm from "./components/VisitDetailForm";
import VisitReviewForm from "./components/VisitReviewForm";
import { useFormState } from "./components/FormContext";
import VisitSubmittedForm from "./components/VisitSubmittedForm";

function ActiveStepFormComponent() {
  const { step } = useFormState();
  switch (step) {
    case 1:
      return <VisitsForm />;
    case 2:
      return <VisitDetailForm />;
    case 3:
      return <VisitReviewForm />;
    case 4:
      return <VisitSubmittedForm />;
    default:
      return null;
  }
}

export default function VisitsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="mx-auto w-11/12 bg-white">
        <div>
          <ActiveStepFormComponent />
        </div>
      </div>
    </main>
  );
}
