import { BsInstagram, BsTiktok } from "react-icons/bs";
import { MdArrowBack, MdArrowForward, MdEmail } from "react-icons/md";
import DocumentationItem from "../components/DocumentationItem";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import type { DailyLog } from "../types/DailyLog";

export default function Home() {
    const [logs, setLogs] = useState<DailyLog[]>()
    const [currentIndex, setCurrentIndex] = useState(0)

    const itemsPerPage = 3
    const totalPages = logs ? Math.ceil(logs.length / itemsPerPage) : 0

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + itemsPerPage >= (logs?.length || 0) ? 0 : prevIndex + itemsPerPage
        )
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? Math.max(0, (logs?.length || 0) - itemsPerPage) : Math.max(0, prevIndex - itemsPerPage)
        )
    }

    const currentLogs = logs?.slice(currentIndex, currentIndex + itemsPerPage) || []

    useEffect(() => {

        fetch('https://raw.githubusercontent.com/RaidenXVR/Web-Bhaktaluyu/refs/heads/main/log_book.json')
            .then((response) => response.json())
            .then((data) => {
                setLogs(data["logs"])
            })
            .catch((error) => {
                console.error('Error fetching logs:', error)
            })
    }, [])

    return (
        <div>
            {/* Top Navigation Bar */}
            <nav className='fixed left-0 top-0 w-full bg-gray-100 shadow-md z-50 px-6 py-4'>
                <div className='flex justify-end items-center space-x-6'>
                    <a href="#home" className='text-gray-700 hover:text-gray-900 font-medium transition-colors'>Home</a>
                    <a href="#anggota" className='text-gray-700 hover:text-gray-900 font-medium transition-colors'>Anggota</a>
                    <a href="#program-kerja" className='text-gray-700 hover:text-gray-900 font-medium transition-colors'>Program Kerja</a>
                    <a href="#dokumentasi" className='text-gray-700 hover:text-gray-900 font-medium transition-colors'>Dokumentasi & Log Book</a>
                    <a href="#tentang-kami" className='text-gray-700 hover:text-gray-900 font-medium transition-colors'>Tentang Kami</a>
                </div>
            </nav>
            <div id="home" className="flex flex-col items-center justify-center h-screen bg-[url('https://ik.imagekit.io/raidenxvr/IMG_5645.HEIC?updatedAt=1754967646169')] bg-cover bg-center bg-no-repeat relative mb-4">
                {/* Optional overlay for better text readability */}
                <div className='absolute inset-0 bg-black opacity-70'></div>

                {/* Content with higher z-index to appear above overlay */}
                <div className='relative z-10 text-center'>
                    <h1 className='text-3xl font-bold text-white drop-shadow-lg'>KKN 132 Bhaktaluyu</h1>
                    <p className='mt-4 text-gray-100 drop-shadow-md'>Kuliah Kerja Nyata 132 Desa Margaluyu, Kecamatan Leles, Kabupaten Garut.</p>
                </div>
            </div>
            <div id="anggota" className='flex flex-col items-center justify-center h-screen bg-gray-100 mb-4'>
                <div className='flex flex-col items-center justify-center mt-8'>
                    <h2 className='text-2xl font-bold text-gray-800'>Tim KKN 132</h2>

                    {/* Team Member Cards */}
                    <div className='items-center justify-center mt-6'>
                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6'>
                            <Card nama="Fitran Alfian Nizar" jabatan={'Ketua'} deskripsi={'Jurusan Teknik Informatika'} imagePath='/fitran.JPG' >
                            </Card>
                            <Card nama="Tantri Saraswati" jabatan={'Sekretaris'} deskripsi={'Jurusan Akuntansi Syariah'} imagePath='/tantri.JPG' >
                            </Card>
                            <Card nama="Yaisy Azhary" jabatan={'Bendahara Dan Konsumsi'} deskripsi={'Jurusan Bimbingan Konseling Islam'} imagePath='/yaisy.JPG' >
                            </Card>
                            <Card nama="Wila Arrianti" jabatan={'Bendahara Dan Konsumsi'} deskripsi={'Jurusan Administrasi Publik'} imagePath='/wila.JPG' >
                            </Card>
                            <Card nama="Syahrul Gunawan" jabatan={'Divisi Acara'} deskripsi={'Jurusan Pendidikan Agama Islam'} imagePath='/syahrul.png' >
                            </Card>
                            <Card nama="Silvi Syafina" jabatan={'Divisi Acara'} deskripsi={'Jurusan Bimbingan Konseling Islam'} imagePath='/silvi.JPG' >
                            </Card>
                            <Card nama="May Xenia" jabatan={'Divisi Acara'} deskripsi={'Jurusan Studi Agama-Agama'} imagePath='/may.JPG' >
                            </Card>
                            <Card nama="Yudha Luqman" jabatan={'Divisi Logistik'} deskripsi={'Jurusan Sastra Inggris'} imagePath='/yudha.JPG' >
                            </Card>
                            <Card nama="Rizqi Anshori" jabatan={'Divisi Logistik'} deskripsi={'Jurusan Ilmu Hadist'} imagePath='/ansor.JPG' >
                            </Card>
                            <Card nama="Arief Saripudin" jabatan={'Divisi Hubungan Masyarakat'} deskripsi={'Jurusan Manejemen'} imagePath='/arief.JPG' >
                            </Card>
                            <Card nama="Najma Nur" jabatan={'Divisi Hubungan Masyarakat'} deskripsi={'Jurusan Sejarah Peradaban Islam'} imagePath='/najma.png' >
                            </Card>
                            <Card nama="Wulan Ayu" jabatan={'Divisi Hubungan Masyarakat'} deskripsi={'Jurusan Tardis Bahasa Indonesia'} imagePath='/wulan.JPG' >
                            </Card>
                            <Card nama="Muhammad Ezza Fayduzzaka" jabatan={'Divisi Media'} deskripsi={'Jurusan Perbandingan Madzhab dan Hukum'} imagePath='/ezza.JPG' >
                            </Card>
                            <Card nama="Marsya Malika" jabatan={'Divisi Media'} deskripsi={'Jurusan Pendidikan Kimia'} imagePath='/marsya.JPG' >
                            </Card>
                            <Card nama="Sabina Ejmal" jabatan={'Divisi Media'} deskripsi={'Jurusan Pendidikan Bahasa Inggris'} imagePath='/ejmal.JPG' >
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            {/* Proker div */}
            <div id="program-kerja" className='flex flex-col items-center justify-center h-screen bg-gray-50 mb-4'>
                <div className='flex flex-col items-center justify-center mt-8'>
                    <h2 className='text-2xl font-bold text-gray-800'>Program Kerja</h2>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6 m-10'>
                        <Card imagePath="https://ik.imagekit.io/raidenxvr/IMG_5747.HEIC?updatedAt=1754972780330"
                            nama="Mengajar" jabatan={'Pendidikan'} deskripsi={'Kegiatan belajar mengajar di Sekolah Dasar, Madrasah Ibtidaiyah, dan Madrasah Diniyah Takmiliyah.'} >
                        </Card>

                        <Card imagePath="https://ik.imagekit.io/raidenxvr/IMG_7906.HEIC?updatedAt=1754972779049"
                            nama="Anti Bullying" jabatan={'Pendidikan'} deskripsi={'Melakukan kegiatan penyuluhan tentang anti bullying kepada siswa di sekolah.'}>
                        </Card>

                        <Card imagePath="https://ik.imagekit.io/raidenxvr/_MG_0114.JPG?updatedAt=1754973086583"
                            nama="EcoPrint" jabatan={'Pendidikan'} deskripsi={'Kegiatan mencetak daun dan bunga ke Totebag.'}>
                        </Card>

                        <Card imagePath="https://ik.imagekit.io/raidenxvr/IMG_6143.HEIC?updatedAt=1754973495108"
                            nama="Kebersihan Diri" jabatan={'Pendidikan'} deskripsi={'Kegiatan penyuluhan tentang kebersihan diri kepada siswa di TK.'}>
                        </Card>
                        <Card imagePath="https://ik.imagekit.io/raidenxvr/IMG_5931.HEIC?updatedAt=1754972776784"
                            nama="Sosialisasi" jabatan={'Masyarakat'} deskripsi={'Melakukan kegiatan sosialisasi setiap hari kepada RT/RW setempat dan ikuts serta melakukan kegitannya.'}>
                        </Card>
                        <Card imagePath="https://ik.imagekit.io/raidenxvr/IMG_6595.HEIC?updatedAt=1754972782287"
                            nama="Tong Sampah" jabatan={'Masyarakat'} deskripsi={'Kegiatan membuat Tong Sampah menggunakan Ember Bekas.'}>
                        </Card>
                        <Card imagePath="https://ik.imagekit.io/raidenxvr/e23aaef101758ba2d6e06b67597b3377.jpg?updatedAt=1754973400068"
                            nama="Daur Ulang Minyak" jabatan={'Masyarakat'} deskripsi={'Kegiatan mendaur ulang minyak jelantah menjadi lilin.'}>
                        </Card>

                        <Card imagePath="https://ik.imagekit.io/raidenxvr/e23aaef101758ba2d6e06b67597b3377.jpg?updatedAt=1754973400068"
                            nama="Digitalisasi UMKM" jabatan={'Masyarakat'} deskripsi={'Kegiatan digitalisasi UMKM di Desa Margaluyu.'}>
                        </Card>
                        <Card imagePath="https://ik.imagekit.io/raidenxvr/IMG_5817.HEIC?updatedAt=1754473835965"
                            nama="Pengajian" jabatan={'Keagamaan'} deskripsi={'Kegiatan rutinan dalam bentuk pengajian ibu-ibu, pengajaran di Madrasah, dan Yasinan.'}>
                        </Card>

                        <Card imagePath="https://ik.imagekit.io/raidenxvr/e23aaef101758ba2d6e06b67597b3377.jpg?updatedAt=1754973400068"
                            nama="Gebyar Keagamaan" jabatan={'Keagamaan'} deskripsi={'Kegiatan perlombaan keagamaan untuk anak-anak tingkat SD.'}>
                        </Card>

                    </div>
                </div>
            </div>

            {/* Documentation div */}
            <div id="dokumentasi" className='flex flex-col items-center justify-center h-screen bg-gray-100 mb-4'>
                <div className='flex flex-col items-center justify-center mt-8 w-full max-w-6xl px-4'>
                    <h2 className='text-2xl font-bold text-gray-800'>Dokumentasi & Log Book</h2>

                    {/* Carousel Container */}
                    <div className='relative w-full mt-6'>
                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            disabled={!logs || logs.length <= itemsPerPage}
                            className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed'
                        >
                            <MdArrowBack className='w-6 h-6 text-gray-600' />
                        </button>

                        <button
                            onClick={nextSlide}
                            disabled={!logs || logs.length <= itemsPerPage}
                            className='absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed'
                        >
                            <MdArrowForward className='w-6 h-6 text-gray-600' />
                        </button>

                        {/* Documentation Items */}
                        <div className='overflow-hidden mx-12'>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                {currentLogs.map((log, index) => (
                                    <DocumentationItem
                                        key={currentIndex + index}
                                        data={log}
                                        canBeClicked

                                    />
                                ))}
                            </div>
                        </div>

                        {/* Dots Indicator */}
                        {logs && logs.length > itemsPerPage && (
                            <div className='flex justify-center mt-6 space-x-2'>
                                {Array.from({ length: totalPages }).map((_, pageIndex) => (
                                    <button
                                        key={pageIndex}
                                        onClick={() => setCurrentIndex(pageIndex * itemsPerPage)}
                                        className={`w-3 h-3 rounded-full transition-colors ${Math.floor(currentIndex / itemsPerPage) === pageIndex
                                            ? 'bg-blue-500'
                                            : 'bg-gray-300 hover:bg-gray-400'
                                            }`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* About Us div */}
            <div id="tentang-kami" className='flex flex-col items-center justify-center h-screen bg-gray-50 mb-4'>
                <div className='flex flex-col items-center justify-center mt-8'>
                    <h2 className='text-2xl font-bold text-gray-800'>Tentang Kami</h2>
                    <p className='mt-4 text-gray-600'>Kami adalah tim KKN 132 yang berkomitmen untuk memberikan kontribusi positif kepada masyarakat Desa Margaluyu.</p>
                    <p className='mt-4 text-gray-600'>Kami percaya bahwa kolaborasi dan partisipasi aktif dari semua pihak sangat penting dalam mencapai tujuan bersama.</p>
                    <p className='mt-4 text-gray-600'>Untuk informasi lebih lanjut, silakan hubungi kami melalui email atau media sosial.</p>
                </div>
                <div className='flex flex-row items-center justify-center w-screen h-fit bg-gray-100 mt-5 space-x-10 p-3' >
                    <a className='flex items-center justify-center'
                        href='https://www.instagram.com/kkn132bhaktaluyu/'
                        target='_blank'>
                        <BsInstagram className='w-16 h-16 text-gray-600' />

                    </a>

                    <a className='flex items-center justify-center'
                        href='https://www.tiktok.com/@bhaktaluyu132?_t=ZS-8yRzogRpZuK&_r=1'
                        target='_blank'>
                        <BsTiktok className='w-16 h-16 text-gray-600' />
                    </a>

                    <a className='flex items-center justify-center'
                        href='mailto:bhaktaluyu132@gmail.com'>
                        <MdEmail className='w-16 h-16 text-gray-600' />
                    </a>
                </div>
            </div >
        </div>
    )
}