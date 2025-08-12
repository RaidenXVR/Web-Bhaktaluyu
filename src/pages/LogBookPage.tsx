import { useEffect, useState } from "react"
import type { DailyLog } from "../types/DailyLog"
import { useParams } from "react-router-dom"
import { BsBack } from "react-icons/bs"
import { BiLeftArrow } from "react-icons/bi"


export default function LogBookPage() {
    const [log, setLog] = useState<DailyLog>()
    const { day } = useParams()
    useEffect(() => {
        fetch('/log_book.json')
            .then((response) => response.json())
            .then((data) => {
                const thisLog = (data["logs"] as DailyLog[]).filter((x) => { return x.day == Number(day!) })[0]
                setLog(thisLog)
            })
            .catch((error) => {
                console.error('Error fetching logs:', error)
            })
    }, [])
    return (

        <div>
            <nav className='fixed left-0 top-0 w-full bg-gray-100 shadow-md z-50 px-6 py-4'>
                <div className='flex justify-start items-center space-x-6 cursor-pointer'
                    onClick={() => window.history.back()}
                >
                    <BiLeftArrow />
                    <p>Kembali</p>
                </div>
            </nav>
            <section className="m-10">
                <div className="flex flex-col justify-center items-center">
                    <div className="h-10">

                    </div>
                    <h1 className="text-3xl font-bold text-gray-800 m-4">Day {log?.day}</h1>
                    <h2 className="text-2xl font-bold text-gray-800">{log?.title}</h2>
                    <h3 className="text-lg text-gray-800">{log?.date}</h3>
                </div>
            </section>
            <section className="flex flex-col justify-center items-center">
                <div className="h-auto min-h-64 w-xl bg-gray-200 flex flex-col items-center m-4 rounded-2xl p-4" >
                    <h1 className="text-2xl font-bold text-gray-800 m-4">Ringkasan Kegiatan</h1>
                    <h3 className="whitespace-pre-wrap text-center">{log?.full_description}</h3>
                </div>
            </section>
            <section>
                <div className="h-auto min-h-64 bg-gray-200 flex flex-col items-center m-4 rounded-2xl">
                    <h1 className="text-2xl font-bold text-gray-800 m-4">Dokumentasi</h1>
                    <div className="flex flex-row justify-center items-center">
                        <div className="w-128 m-4">
                            <img src={log?.documentations[0]} />
                        </div>
                        <div className="w-128 m-4">
                            <img src={log?.documentations[1]} />
                        </div>
                        <div className="w-128 m-4">
                            <img src={log?.documentations[2]} />
                        </div>
                    </div>
                </div>
            </section>

        </div>

    )
}