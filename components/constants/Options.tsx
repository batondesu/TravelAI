export interface BudgetOption {
    id: number;
    icon: string;
    title: string;
    desc: string;
    value: string
  }
  
  export interface PersonOption {
    id: number;
    icon: string;
    title: string;
    desc: string;
    no: string;
    value: string
  }

  export interface ModelOption {
    id: number;
    icon: string;
    title: string;
    value: string
  }

  export interface PlaceOption {
    id: number;
    icon: string;
    title: string;
    desc: string;
    value: string
  }
  
  export const SelectBudgetOptions: BudgetOption[] = [
    {
      id: 1,
      icon: "💵",
      title: "Cheap",
      desc: "Economize and Save",
      value: "low"
    },
    {
      id: 2,
      icon: "💰",
      title: "Moderate",
      desc: "Balance Cost and Comfort",
      value: "medium"
    },
    {
      id: 3,
      icon: "💎",
      title: "Luxury",
      desc: "Indulge without Limits",
      value: "high"
    },
  ];

  export const SelectModelOptions: ModelOption[] = [
    {
      id: 1,
      icon: "🤖",
      title: "KNN",
      value: "knn"
    },
    {
      id: 2,
      icon: "🤖",
      title: "Decesion Tree",
      value: "Decesion Tree"
    },
    {
      id: 3,
      icon: "🤖",
      title: "Bayes",
      value: "Bayes"
    },
  ];
  
  export const SelectNoOfPersons: PersonOption[] = [
    {
      id: 1,
      icon: "🚶",
      title: "Solo",
      desc: "Discovering on Your Own",
      no: "1 Person",
      value: "alone"
    },
    {
      id: 2,
      icon: "💑",
      title: "Partner",
      desc: "Exploring with a Loved One",
      no: "2 People",
      value: "couple"
    },
    {
      id: 3,
      icon: "👨‍👩‍👧‍👦",
      title: "Family",
      desc: "Fun for All Ages",
      no: "3 to 5 People",
      value: "family"
    },
    {
      id: 4,
      icon: "🤝",
      title: "Friends",
      desc: "Adventure with Your Crew",
      no: "5 to 10 People",
      value: "friends"
    },
  ];

  export const SelectPlace: PlaceOption[] = [
    {
      id: 1,
      icon: "🏖️",
      title: "Beach",
      desc: "Coastal area with sand, water, and relaxation",
      value: "beach"
    },
    {
      id: 2,
      icon: "🏞️",
      title: "Mountain",
      desc: "High peaks and outdoor adventure",
      value: "mountain"
    },
    {
      id: 3,
      icon: "🌆",
      title: "City",
      desc: "Urban hub with culture and attractions",
      value: "city"
    },
    {
      id: 4,
      icon: "🎭",
      title: "Culture",
      desc: "Rich in history, art, and traditions",
      value: "culture"
    },
  ];
  
  export const PROMPT = `
  Create an optimal trip itinerary based on the specified location, duration, budget, and number of persons. 
  Generate Travel Plan for Location: {location} for no of days: {noOfDays} Days with no of People or group: {People} with Budget: {Budget}. 
  Provide a list of hotels with hotel name, description, address, rating, price, location in map, coordinates, and image URL. 
  Also, create the itinerary for {noOfDays} days, suggest places with name, details, pricing, timings, place images URLs, location (coordinates or in map). 
  Ensure all are within the {Budget} level. 
  Important: Give the result in JSON format.
  `;
  