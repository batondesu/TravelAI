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

import { useRouter, useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Itinerary from "@/components/sections/Itinerary";

import axios from "../service/api";
import Image from "next/image";
import { title } from "process";
import bg from '@/public/bg.jpg'

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

const Trip: React.FC = () => {
    const params = useSearchParams()
    const [list, setList] = useState<Day[]>([])
    const [link, setLink] = useState("")
    const [location, setLocation] = useState('')

    const getPredict = async () => {
        try {
            const response = await axios.post('/api/tourism/predict', {
                age: params.get('age'),
                with: params.get('with'),
                budget: params.get('budget'),
                interest: params.get('interest'),
                model: params.get('model')
            })

            setLocation(response.data.predictedDestination)
        } catch (error) {
            console.log('Loi khi goi y dia diem', error)
        }
    }

    const getList = async () => {
        try {
            const response = await axios.post('/api/tourism/itinerary', {
                location: location,
                with: params.get('with'),
                day: params.get('day')
            })
            console.log(response.data)
            setList(parseTextToItinerary(response.data))
        } catch (error) {
            console.log('Loi khi goi y lich trinh', error)
        }
    }

    const getImage = async () => {
        try {
            const response = await axios.get('/api/tourism/photos', {
                params: {
                    location: location,
                }
            })
            //console.log(response.data)
            setLink(response.data.full)
        } catch (error) {
            console.log('Loi khi goi y lich trinh', error)
        }
    }

    useEffect(() => {
        getPredict()
    }, [])

    useEffect(() => {
        if (location) {
            getImage()
            getList()
        }
            
    }, [location])

    function parseTextToItinerary(text: string): Day[] {
        const days = text.split("\n").map(day => day.trim()).filter(day => day.length > 0);
        const itinerary: Day[] = [];
        let title = ""
        let dem = 0
        let morning: TimeLine[] = [];
        let afternoon: TimeLine[] = [];
        let evening: TimeLine[] = [];
        //console.log(days)
        for (const day of days) {
            if (day.includes(':') && (day.includes('**') || day.includes('Day'))) {
                console.log(day)
                
                if (dem === Number(params.get('day'))) {
                    break
                }
                if (title) itinerary.push({ title, morning, afternoon, evening });
                morning = []
                afternoon = []
                evening = []
                title = day.replace("**", "")
                title = title.replace("**", "")
                ++dem
            }
            else if (day.includes('* ')) {
                const separatorIndex = day.indexOf(": ");
                let time = day.slice(0, separatorIndex).trim().replace('*', "");;
                let activity = day.slice(separatorIndex + 1).trim();
                if (separatorIndex == -1) time = ""
                if (time.includes("AM") || time.toLowerCase().includes("morning")) {
                    morning.push({ hours: time, activity });
                }
                else if (time.toLowerCase().includes("afternoon"))
                    afternoon.push({ hours: time, activity });
                else if (time.toLowerCase().includes("evening"))
                    evening.push({ hours: time, activity });
                else if (time.includes("PM") && !time.startsWith("5") && !time.startsWith("7")) {
                    afternoon.push({ hours: time, activity });
                } else {
                    evening.push({ hours: time, activity });
                }
            }
        }

        if (title) itinerary.push({ title, morning, afternoon, evening });

        // for (const day of days) {
        //     const lines = day.split("\n").map(line => line.trim()).filter(line => line.length > 0);

        //     if (lines.length > 0) {
        //         let title = lines[0].replace('**', "");
        //         title = title.replace('*', "");
        //         const morning: TimeLine[] = [];
        //         const afternoon: TimeLine[] = [];
        //         const evening: TimeLine[] = [];

        //         for (const line of lines.slice(1)) {
        //             const separatorIndex = line.indexOf(": ");
        //             if (separatorIndex !== -1) {
        //                 const time = line.slice(0, separatorIndex).trim().replace('*', "");;
        //                 const activity = line.slice(separatorIndex + 1).trim();

        //                 if (time.includes("AM") || time.toLowerCase().includes("morning")) {
        //                     morning.push({ hours: time, activity });
        //                 } else if (time.includes("PM") && !time.startsWith("5") && !time.startsWith("7")) {
        //                     afternoon.push({ hours: time, activity });
        //                 } else {
        //                     evening.push({ hours: time, activity });
        //                 }
        //             }
        //             else if (line.length > 10) {
        //                 morning.push({ hours: line, activity: "" })
        //             }
        //         }

        //         itinerary.push({ title, morning, afternoon, evening });
        //     }
        // }
        //console.log(itinerary)
        return itinerary;
    }

    //console.log(list)

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <Header />
            <div className="max-w-[1024px] w-full min-w-[320px] flex flex-col justify-center">
                <div className="flex flex-col mt-10 gap-4">
                    <div className="text text-center md:text-left">
                        <h2 className="text-2xl md:text-4xl font-bold">
                            Enjoy Your Tours 🌟🚀
                        </h2>
                        <p className="text-sm text-gray-600 font-medium mt-3">
                            Below is the schedule we suggest for you.
                        </p>
                    </div>
                    <div className="flex flex-row w-full h-full gap-3 pt-3">
                        <span className="rounded-xl bg-blue-200 p-2"> {location} </span>
                        <span className="rounded-xl bg-green-200 p-2"> {params.get('day')} Day</span>
                        <span className="rounded-xl bg-red-200 p-2"> {params.get('with')} </span>
                    </div>
                    <div className="py-4">
                        <img src={link} alt={""} />
                    </div>
                    <Itinerary list={list} />
                </div>
            </div>
        </div>

    );
};

export default Trip;
