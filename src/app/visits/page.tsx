"use client";

import VisitsForm from "./components/visitsForm";
import VisitDetailForm from "./components/visitDetailForm";
import VisitReviewForm from "./components/visitReviewForm";
import { useFormState } from "./components/formContext";
import VisitSubmittedForm from "./components/visitSubmittedForm";

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
