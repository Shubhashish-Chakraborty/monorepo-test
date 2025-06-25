'use client';

import { useEffect, useState } from "react"
import { BACKEND_URL } from "./config";
import axios from "axios";

export default function Home() {
    const [data, setData] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(BACKEND_URL);
            setData(response.data.data);
        }
        fetchData();
    }, []);
    return (
        <div className="text-center">
            {data}
        </div>
    )
}