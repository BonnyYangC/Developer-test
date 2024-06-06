"use client";
import Image from "next/image";
import { FormProvider } from "./components/formContext";

export default function VisitsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-green-900 mx-auto rounded-t-lg w-full">
        <div className="mx-auto w-11/12">
          <div className="py-10 space-y-10 pt-10">
            <hr></hr>
            <h1 className="text-4xl font-bold text-white">Visits</h1>
          </div>
          <div className=" bg-white rounded-t-lg">
            <div className="flex justify-left py-10 mx-auto w-11/12">
              <Image alt="" src="/date.svg" width={50} height={50} priority />
              <h1 className="flex items-center text-3xl font-bold">
                Register a new Visit
              </h1>
            </div>
            <hr></hr>
          </div>
        </div>
        <div className="bg-white w-full">
          <div className="mx-auto w-11/12">
            <FormProvider>{children}</FormProvider>
          </div>
        </div>
      </div>
    </>
  );
}
