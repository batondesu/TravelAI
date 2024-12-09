"use client";
import {Button} from "@/components/ui/button";


const GeneratePlanButton = () => {

  return (
    <Button
      aria-label="generate plan"
      variant="default"
      className="bg-blue-500 text-white
                 hover:bg-blue-700
                  text-sm
                  font-semibold rounded-3xl"
    >
      {"Make A Plan Now"}
    </Button>
  );
};

export default GeneratePlanButton;
