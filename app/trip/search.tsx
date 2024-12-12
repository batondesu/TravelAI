'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import axios from '../service/api'
import Itinerary from '@/components/sections/Itinerary'

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

export default function SearchBar() {
    const params = useSearchParams()

    const age = params.get('age')
    const people = params.get('with')
    const budget = params.get('budget')
    const interest = params.get('interest')
    const model = params.get('model')
    const listplan: string[] = []
    listplan.push(String(params.get('type')))
    const days = params.get('day')
    const money = (Number(params.get('money')) / 25000)

    const [list, setList] = useState<Day[]>([])
    const [link, setLink] = useState("")
    const [location, setLocation] = useState('')

    const getPredict = async () => {
        try {
            const response = await axios.post('/api/tourism/predict', {
                age: age,
                with: people,
                budget: budget,
                interest: interest,
                model: model
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
                days: days,
                    with: people,
                    budget: money,
                    travelType: listplan
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
                    location: location
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
                
                if (dem === Number(days)) {
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

        return itinerary;
    }

    console.log(location)

    return (<>
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
                            <span className="rounded-xl bg-green-200 p-2"> {days} Day</span>
                            <span className="rounded-xl bg-red-200 p-2"> {people} </span>
                        </div>
                        <div className="py-4">
                            <img src={link} alt={""} />
                        </div>
                        <Itinerary list={list} />
                    </div>
                </div>
            </>
)}