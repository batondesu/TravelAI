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
    money?: number
}

const CreateTrip: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({});
    const [open, setOpen] = useState(false)
    const router = useRouter();

    const handleInputChange = (name: keyof FormData, value: any) => {
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const toggleFrame = () => setOpen(!open)

    const handleCreat = () => {
        router.push(`/trip?age=${formData.age}&with=${formData.People}&budget=${formData.Budget}&interest=${formData.place}&model=${formData.model}&day=${formData.day}&type=${formData.type}&money=${formData.money}`)
    }

    console.log(formData)

    const setData = (input: string) => {
        const list = input.split(',')
    }

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <Header />
            <div className="max-w-[1024px] w-full min-w-[320px] flex flex-col justify-center">
                <div className="mt-10">
                    <div className="text text-center md:text-left">
                        <div className="flex flex-row justify-between">
                            <h2 className="text-2xl md:text-4xl font-bold">
                                Chia sẻ sở thích du lịch của bạn 🌟🚀
                            </h2>
                            <Button onClick={toggleFrame} className="bg-blue-400">
                                Bộ lọc
                            </Button>
                        </div>

                        <p className="text-sm text-gray-600 font-medium mt-3">
                            Hãy giúp chúng tôi tạo nên chuyến phiêu lưu hoàn hảo của bạn chỉ với một vài chi tiết. TravelAI sẽ tạo ra một hành trình phù hợp dựa trên sở thích của bạn.
                        </p>
                    </div>

                    <div className="form mt-10 flex flex-col gap-10 md:gap-20">
                        <div className="age">
                            <h2 className="font-semibold text-md md:text-lg mb-3 text-center md:text-left">
                                Tuổi của bạn? 🧒
                            </h2>
                            <Input
                                value={formData.age}
                                placeholder="Ex: 18"
                                type="number"
                                onChange={(age) => handleInputChange("age", Number(age.target.value))}
                            />
                        </div>

                        <div className="day">
                            <h2 className="font-semibold text-md md:text-lg mb-3 text-center md:text-left">
                                Bạn du lịch trong bao lâu? 🕜
                            </h2>
                            <Input
                                value={formData.day}
                                placeholder="Ex: 2"
                                type="number"
                                onChange={(day) => handleInputChange("day", Number(day.target.value))}
                            />
                        </div>

                        <div className="type">
                            <h2 className="font-semibold text-md md:text-lg mb-3 text-center md:text-left">
                                Bạn muốn du lịch như nào  ? 🌍
                            </h2>
                            <Input
                                value={formData.type}
                                placeholder="Ex: ẩm thực, dã ngoại, ngắm cảnh, ..."
                                type="text"
                                onChange={(type) => handleInputChange("type", String(type.target.value))}
                            />
                        </div>

                        <div className="budget">
                            <h2 className="font-semibold text-md md:text-lg mb-3 text-center md:text-left">
                                Ngân sách của bạn? 💳
                            </h2>
                            <div className="options grid grid-cols-1 gap-5 md:grid-cols-3 cursor-pointer">
                                {SelectBudgetOptions.map((item) => (
                                    <div
                                        key={item.id}
                                        onClick={() => handleInputChange("Budget", item.value)}
                                        className={`option transition-all hover:scale-110 p-4 h-32 flex items-center justify-center flex-col border rounded-lg hover:shadow-lg
                  ${formData?.Budget === item.value && "border-black shadow-xl bg-blue-200"}`}
                                    >
                                        <h3 className="font-bold text-[15px] md:text-[18px]">
                                            {item.icon} {item.title}
                                        </h3>
                                        <p className="text-gray-500 font-medium">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="money">
                            <h2 className="font-semibold text-md md:text-lg mb-3 text-center md:text-left">
                                Chi phí? 💳
                            </h2>
                            <Input
                                value={formData.money}
                                placeholder="Ex: 4000000VND"
                                type="number"
                                onChange={(money) => handleInputChange("money", Number(money.target.value))}
                            />
                        </div>

                        <div className="budget">
                            <h2 className="font-semibold text-md md:text-lg mb-3 text-center md:text-left">
                                Bạn hứng thú với? 🤔
                            </h2>
                            <div className="options grid grid-cols-1 gap-5 md:grid-cols-4 cursor-pointer">
                                {SelectPlace.map((item) => (
                                    <div
                                        key={item.id}
                                        onClick={() => handleInputChange("place", item.value)}
                                        className={`option transition-all hover:scale-110 p-4 h-32 flex items-center justify-center flex-col border rounded-lg hover:shadow-lg
                  ${formData?.place === item.value && "border-black shadow-xl bg-blue-200"}`}
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
                                Bạn đồng hành? 🚗
                            </h2>
                            <div className="options grid grid-cols-1 gap-5 md:grid-cols-4 cursor-pointer">
                                {SelectNoOfPersons.map((item) => (
                                    <div
                                        key={item.id}
                                        onClick={() => handleInputChange("People", item.value)}
                                        className={`option transition-all hover:scale-110 p-4 h-32 flex items-center justify-center flex-col border rounded-lg hover:shadow-lg
                  ${formData?.People === item.value && "border-black shadow-xl bg-blue-200"}`}
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
                  ${formData?.model === item.value && "border-black shadow-xl bg-blue-200"}`}
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
            {open &&
                (
                    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-10">
                        <div className="flex flex-col w-[500px] bg-white rounded-xl gap-3 items-center justify-center py-2">
                            <h1 className="w-full p-2 border-b text-center text-[30px]">
                            Chọn tiêu chí của bạn
                            </h1>
                            <div className="w-full p-3 flex flex-col items-start justify-start gap-4 p-2 border-b">
                                <div className="w-full flex flex-col">
                                    <h2> Tuổi </h2>
                                    <Input
                                        value={formData.age}
                                        placeholder="Ex: 18"
                                        type="number"
                                        onChange={(age) => handleInputChange("age", Number(age.target.value))}
                                    />
                                </div>

                                <div className="w-full flex flex-col">
                                    <h2> Số ngày du lịch </h2>
                                    <Input  
                                        value={formData.day}
                                        placeholder="Ex: 3"
                                        type="number"
                                        onChange={(age) => handleInputChange("day", Number(age.target.value))}
                                    />
                                </div>

                                <div className="w-full flex flex-col">
                                    <h2> Loại hình du lịch </h2>
                                    <Input
                                        value={formData.type}
                                        placeholder="Ex: 18"
                                        type="text"
                                        onChange={(age) => handleInputChange("type", String(age.target.value))}
                                    />
                                </div>

                                <div className="w-full flex flex-col">
                                    <h2> Chi phí </h2>
                                    <Input
                                        value={formData.money}
                                        placeholder="Ex: 10000VND"
                                        type="number"
                                        onChange={(age) => handleInputChange("money", String(age.target.value))}
                                    />
                                </div>

                                <div className="w-full flex flex-row gap-2 items-center justify-between">
                                    <h2> Ngân sách </h2>
                                    <select className="w-2/3 p-2 border border-silver rounded font-medium bg-white"
                                     value={formData.Budget} onChange={(age) => handleInputChange("Budget", age.target.value)}>
                                        <option>Chọn</option>
                                        <option value="low">Rẻ</option>
                                        <option value="medium">Trung bình</option>
                                        <option value="high">Cao cap</option>
                                    </select>
                                </div>

                                <div className="w-full flex flex-row gap-2 items-center justify-between">
                                    <h2> Hung thu </h2>
                                    <select className="w-2/3 p-2 border border-silver rounded font-medium bg-white"
                                     value={formData.place} onChange={(age) => handleInputChange("place", age.target.value)}>
                                        <option>Chọn</option>
                                        <option value="beach">Bien</option>
                                        <option value="mountain">Nui</option>
                                        <option value="city">Thanh pho</option>
                                        <option value="culture">Van hoa</option>
                                    </select>
                                </div>

                                <div className="w-full flex flex-row gap-2 items-center justify-between">
                                    <h2> Dong hanh </h2>
                                    <select className="w-2/3 p-2 border border-silver rounded font-medium bg-white"
                                     value={formData.People} onChange={(age) => handleInputChange("People", age.target.value)}>
                                        <option>Chọn</option>
                                        <option value="alone">1 minh</option>
                                        <option value="couple">cap doi</option>
                                        <option value="family">gia dinh</option>
                                        <option value="friends">ban be</option>
                                    </select>
                                </div>

                                <div className="w-full flex flex-row gap-2 items-center justify-between">
                                    <h2> Models </h2>
                                    <select className="w-2/3 p-2 border border-silver rounded font-medium bg-white"
                                     value={formData.model} onChange={(age) => handleInputChange("model", age.target.value)}>
                                        <option>Chọn</option>
                                        <option value="knn">KNN </option>
                                        <option value="Decesion Tree">Decesion Tree</option>
                                        <option value="Bayes">Bayes</option>
                                    </select>
                                </div>
                            </div>

                            <Button onClick={toggleFrame} className="bg-blue-400 items-center">
                               Xac nhan
                            </Button>
                        </div>

                    </div>
                )}


        </div>

    );
};

export default CreateTrip;
