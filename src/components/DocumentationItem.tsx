import { useEffect, useState } from "react";
import type { DailyLog } from "../types/DailyLog";
import { useNavigate } from "react-router-dom";

export default function DocumentationItem({ data, canBeClicked }: { data: DailyLog, canBeClicked: boolean }) {

    const [images, setImages] = useState<string[]>([])
    const navigate = useNavigate()

    const itemClicked = () => {
        if (canBeClicked) {
            navigate(`/logs/${data.day}`)
        }
    }

    useEffect(() => {
        const newImages = data.documentations
        setImages(newImages);
    }, [data.documentations]);

    return (
        <div className='flex flex-col bg-white shadow-md rounded-lg p-4 items-center justify-center text-center cursor-pointer hover:shadow-lg transition-shadow duration-200'
            onClick={itemClicked}
        >
            <div className='w-auto h-48 rounded-lg bg-gray-200 mb-4 flex items-center justify-center'>
                < img src={images[0] || "https://via.placeholder.com/150"} alt={`${data.title}`
                } className='w-full h-full rounded-lg object-cover' />
            </div >
            <h2 className='text-xl font-bold'> Day {data.day}</h2>
            <h3 className='text-xl font-bold'>{data.title}</h3>
            <h2 className='text-lg font-semibold mt-2 mb-2'>{data.date}</h2>
            <p className='text-gray-600'>{data.description}</p>
        </div >
    );
}