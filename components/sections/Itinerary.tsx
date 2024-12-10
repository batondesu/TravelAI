import Timeline from "@/components/Timeline";
import SectionWrapper from "@/components/sections/SectionWrapper";
import {Button} from "@/components/ui/button";
import {Skeleton} from "@/components/ui/skeleton";
import {Navigation, PlusCircle, PlusCircleIcon, PlusIcon} from "lucide-react";

interface TimeLine {
  hours: string
  activity: string
}

interface Day {
  title: string
  morning: TimeLine[]
  afternoon: TimeLine[]
  evening: TimeLine[]
}

type ItineraryProps = {
  list: Day[]
}

const Itinerary = ({list}: ItineraryProps) => {
  return (
    <SectionWrapper id="itinerary">
      <div className="mb-2 flex justify-between items-center">
        <h2
          className="text-lg font-semibold
                tracking-wide flex items-center"
        >
          <Navigation className="mr-2" /> Itinerary
        </h2>
      </div>
      <Timeline list={list} />
    </SectionWrapper>
  );
};

export default Itinerary;