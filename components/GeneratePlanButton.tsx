"use client";
import {Button} from "@/components/ui/button";
import { useRouter } from "next/navigation";


const GeneratePlanButton = () => {
  const router = useRouter()
  const handleClick = () => {
    router.push('/plan')
  }

  return (
    <Button onClick={(e) => handleClick()}
      aria-label="generate plan"
      variant="default"
      className="bg-blue-500 text-white
                 hover:bg-blue-700
                  text-sm
                  font-semibold rounded-3xl"
    >
      {"Tạo một lịch trình ngay bây giờ"}
    </Button>
  );
};

export default GeneratePlanButton;
