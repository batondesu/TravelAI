import HowItWorks from "@/components/home/HowItWorks";
import Banner from "@/components/home/Banner";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="scroll-m-5 w-full">
      <Header/>
      <Banner />
      <HowItWorks />
    </div>
  );
}
