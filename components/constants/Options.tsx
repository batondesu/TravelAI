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
      title: "Rẻ",
      desc: "Giá thành rẻ và tiết kiệm",
      value: "low"
    },
    {
      id: 2,
      icon: "💰",
      title: "Trung bình",
      desc: "Cân bằng chi phí và thoải mái",
      value: "medium"
    },
    {
      id: 3,
      icon: "💎",
      title: "Cao cấp",
      desc: "Thỏa mãn mọi nhu cầu",
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
      title: "Một mình",
      desc: "Tự mình khám phá",
      no: "1 người",
      value: "alone"
    },
    {
      id: 2,
      icon: "💑",
      title: "Cặp đôi",
      desc: "Trải nghiệm cùng người thân yêu",
      no: "2 người",
      value: "couple"
    },
    {
      id: 3,
      icon: "👨‍👩‍👧‍👦",
      title: "Gia đình",
      desc: "Niềm vui với mọi lứa tuổi",
      no: "3 - 5 người",
      value: "family"
    },
    {
      id: 4,
      icon: "🤝",
      title: "Bạn bè",
      desc: "Phiêu lưu cùng bạn bè",
      no: "5 - 10 người",
      value: "friends"
    },
  ];

  export const SelectPlace: PlaceOption[] = [
    {
      id: 1,
      icon: "🏖️",
      title: "Biển",
      desc: "Khu vực ven biển với cát, sóng và thư giãn",
      value: "beach"
    },
    {
      id: 2,
      icon: "🏞️",
      title: "Núi",
      desc: "Cuộc phiêu lưu ngoài trời",
      value: "mountain"
    },
    {
      id: 3,
      icon: "🌆",
      title: "Thành phố",
      desc: "Trung tâm đô thị với văn hóa và các điểm tham quan",
      value: "city"
    },
    {
      id: 4,
      icon: "🎭",
      title: "Văn hoá",
      desc: "Giàu lịch sử, nghệ thuật và truyền thống",
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
  