import HowItWorks from "@/components/home/HowItWorks";
import Pricing from "@/components/home/Pricing";
import Banner from "@/components/home/Banner";
import Header from "@/components/Header";
import CreateTrip from "./plan/page";

export default function Home() {
  return (
    <div className="scroll-m-5 w-full">
      <Header/>
      <Banner />
      <HowItWorks />
    </div>
  );
}
