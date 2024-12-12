'use client'

import React, { useEffect, useState } from "react";
import { Suspense } from 'react'
import { useRouter, useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Itinerary from "@/components/sections/Itinerary";

import axios from "../service/api";
import Image from "next/image";
import { title } from "process";
import bg from '@/public/bg.jpg'
import SearchBar from "./search";

const ListTrip: React.FC = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <Header />
            <Suspense>
                <SearchBar/>
            </Suspense>

        </div>

    );
};

export default ListTrip;
