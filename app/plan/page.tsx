'use client'

import React, { useEffect, useState } from "react";
import {
    SelectModelOptions,
    SelectPlace,
    SelectBudgetOptions,
    SelectNoOfPersons,
} from '@/components/constants/Options';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogClose,
    DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

import { useRouter } from "next/navigation";
import Header from "@/components/Header";

interface FormData {
    place?: string;
    model?: string;
    People?: string;
    Budget?: string;
    age?: number;
    day?: number
    type?: string
}

const CreateTrip: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({});
    const router = useRouter();

    const handleInputChange = (name: keyof FormData, value: any) => {
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleCreat = () => {
        router.push(`/trip?age=${formData.age}&with=${formData.People}&budget=${formData.Budget}&interest=${formData.place}&model=${formData.model}&day=${formData.day}&type=${formData.type}`)
    }

    console.log(formData)

    

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <Header />
            <div className="max-w-[1024px] w-full min-w-[320px] flex flex-col justify-center">
                <div className="mt-10">
                    <div className="text text-center md:text-left">
                        <h2 className="text-2xl md:text-4xl font-bold">
                            Share Your Travel Preferences 🌟🚀
                        </h2>
                        <p className="text-sm text-gray-600 font-medium mt-3">
                            Help us craft your perfect adventure with just a few details.
                            TravelAI will generate a tailored itinerary based on your
                            preferences.
                        </p>
                    </div>

                    <div className="form mt-10 flex flex-col gap-10 md:gap-20">
                        <div className="age">
                            <h2 className="font-semibold text-md md:text-lg mb-3 text-center md:text-left">
                                Your Age? 🧒
                            </h2>
                            <Input
                                placeholder="Ex: 18"
                                type="number"
                                onChange={(age) => handleInputChange("age", Number(age.target.value))}
                            />
                        </div>

                        <div className="day">
                            <h2 className="font-semibold text-md md:text-lg mb-3 text-center md:text-left">
                            How long is your Trip? 🕜
                            </h2>
                            <Input
                                placeholder="Ex: 2"
                                type="number"
                                onChange={(day) => handleInputChange("day", Number(day.target.value))}
                            />
                        </div>

                        {/* <div className="type">
                            <h2 className="font-semibold text-md md:text-lg mb-3 text-center md:text-left">
                            Type of your Trip ? 🌍
                            </h2>
                            <Input
                                placeholder="Ex: foodtour, picnic, sightseeing, ..."
                                type="text"
                                onChange={(type) => handleInputChange("type", String(type.target.value))}
                            />
                        </div> */}

                        <div className="budget">
                            <h2 className="font-semibold text-md md:text-lg mb-3 text-center md:text-left">
                                What is your Budget? 💳
                            </h2>
                            <div className="options grid grid-cols-1 gap-5 md:grid-cols-3 cursor-pointer">
                                {SelectBudgetOptions.map((item) => (
                                    <div
                                        key={item.id}
                                        onClick={() => handleInputChange("Budget", item.value)}
                                        className={`option transition-all hover:scale-110 p-4 h-32 flex items-center justify-center flex-col border rounded-lg hover:shadow-lg
                  ${formData?.Budget === item.value && "border-black shadow-xl"}`}
                                    >
                                        <h3 className="font-bold text-[15px] md:text-[18px]">
                                            {item.icon} {item.title}
                                        </h3>
                                        <p className="text-gray-500 font-medium">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="budget">
                            <h2 className="font-semibold text-md md:text-lg mb-3 text-center md:text-left">
                                What place are you Interested In? 🤔
                            </h2>
                            <div className="options grid grid-cols-1 gap-5 md:grid-cols-3 cursor-pointer">
                                {SelectPlace.map((item) => (
                                    <div
                                        key={item.id}
                                        onClick={() => handleInputChange("place", item.value)}
                                        className={`option transition-all hover:scale-110 p-4 h-32 flex items-center justify-center flex-col border rounded-lg hover:shadow-lg
                  ${formData?.place === item.value && "border-black shadow-xl"}`}
                                    >
                                        <h3 className="font-bold text-[15px] md:text-[18px]">
                                            {item.icon} {item.title}
                                        </h3>
                                        <p className="text-gray-500 font-medium text-center">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="people">
                            <h2 className="font-semibold text-md md:text-lg mb-3 text-center md:text-left">
                                Who are you traveling with? 🚗
                            </h2>
                            <div className="options grid grid-cols-1 gap-5 md:grid-cols-3 cursor-pointer">
                                {SelectNoOfPersons.map((item) => (
                                    <div
                                        key={item.id}
                                        onClick={() => handleInputChange("People", item.value)}
                                        className={`option transition-all hover:scale-110 p-4 h-32 flex items-center justify-center flex-col border rounded-lg hover:shadow-lg
                  ${formData?.People === item.value && "border-black shadow-xl"}`}
                                    >
                                        <h3 className="font-bold text-[15px] md:text-[18px]">
                                            {item.icon} {item.title}
                                        </h3>
                                        <p className="text-gray-500 font-medium">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>


                        <div className="people">
                            <h2 className="font-semibold text-md md:text-lg mb-3 text-center md:text-left">
                                Choose your Model? 🤖
                            </h2>
                            <div className="options grid grid-cols-1 gap-5 md:grid-cols-3 cursor-pointer">
                                {SelectModelOptions.map((item) => (
                                    <div
                                        key={item.id}
                                        onClick={() => handleInputChange("model", item.value)}
                                        className={`option transition-all hover:scale-110 p-4 h-32 flex items-center justify-center flex-col border rounded-lg hover:shadow-lg
                  ${formData?.model === item.value && "border-black shadow-xl"}`}
                                    >
                                        <h3 className="font-bold text-[15px] md:text-[18px]">
                                            {item.icon} {item.title}
                                        </h3>
                                        
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="create-trip-btn w-full flex items-center justify-center h-32">
                        <Button onClick={(e) => handleCreat()}>
                
                                "Plan A Trip"
                            
                        </Button>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default CreateTrip;
