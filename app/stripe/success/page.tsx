import { CheckCheck } from "lucide-react";

export default function stripeError() {
  return (
    <div className="h-screen">
      <div className="mt-32 md:max-w-[50vw] mx-auto">
        <div className="text-center">
          <CheckCheck className="text-green-600 w-16 h-16 my-6" />
          <h3 className="md:text-2xl text-base text-gray-900 font-bold text-center">
            Payment Done
          </h3>
        </div>
      </div>
    </div>
  );
}
