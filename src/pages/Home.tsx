import { BsInstagram, BsTiktok } from "react-icons/bs";
import { MdArrowBack, MdArrowForward, MdEmail, MdMenu, MdClose } from "react-icons/md";
import DocumentationItem from "../components/DocumentationItem";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import type { DailyLog } from "../types/DailyLog";

export default function Home() {
    const [logs, setLogs] = useState<DailyLog[]>()
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
            <nav className='fixed left-0 top-0 w-full bg-gray-100 shadow-md z-50 px-4 lg:px-6 py-4'>
                <div className='flex justify-between lg:justify-end items-center'>
                    {/* Mobile menu button */}
                    <button
                        className="lg:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <MdClose className="w-6 h-6" /> : <MdMenu className="w-6 h-6" />}
                    </button>

                    {/* Desktop menu */}
                    <div className='hidden lg:flex items-center space-x-6'>
                        <a href="#home" className='text-gray-700 hover:text-gray-900 font-medium transition-colors'>Home</a>
                        <a href="#anggota" className='text-gray-700 hover:text-gray-900 font-medium transition-colors'>Anggota</a>
                        <a href="#program-kerja" className='text-gray-700 hover:text-gray-900 font-medium transition-colors'>Program Kerja</a>
                        <a href="#dokumentasi" className='text-gray-700 hover:text-gray-900 font-medium transition-colors'>Dokumentasi & Log Book</a>
                        <a href="#tentang-kami" className='text-gray-700 hover:text-gray-900 font-medium transition-colors'>Tentang Kami</a>
                    </div>

                    {/* Mobile menu */}
                    {isMobileMenuOpen && (
                        <div className='absolute top-full left-0 w-full bg-gray-100 shadow-lg lg:hidden'>
                            <div className='flex flex-col space-y-4 p-4'>
                                <a href="#home" className='text-gray-700 hover:text-gray-900 font-medium transition-colors' onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                                <a href="#anggota" className='text-gray-700 hover:text-gray-900 font-medium transition-colors' onClick={() => setIsMobileMenuOpen(false)}>Anggota</a>
                                <a href="#program-kerja" className='text-gray-700 hover:text-gray-900 font-medium transition-colors' onClick={() => setIsMobileMenuOpen(false)}>Program Kerja</a>
                                <a href="#dokumentasi" className='text-gray-700 hover:text-gray-900 font-medium transition-colors' onClick={() => setIsMobileMenuOpen(false)}>Dokumentasi & Log Book</a>
                                <a href="#tentang-kami" className='text-gray-700 hover:text-gray-900 font-medium transition-colors' onClick={() => setIsMobileMenuOpen(false)}>Tentang Kami</a>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            <div id="home" className="flex flex-col items-center justify-center h-screen min-h-screen bg-[url('https://ik.imagekit.io/raidenxvr/IMG_5645.HEIC?updatedAt=1754967646169')] bg-contain bg-center bg-no-repeat bg-gray-800 mb-16 sm:mb-24 lg:mb-32 relative">
                <div className='absolute inset-0 bg-black opacity-70'></div>

                <div className='relative z-10 text-center px-4 sm:px-6 lg:px-8'>
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg'>KKN 132 Bhaktaluyu</h1>
                    <p className='mt-4 text-sm sm:text-base lg:text-lg text-gray-100 drop-shadow-md max-w-2xl mx-auto'>Kuliah Kerja Nyata 132 Desa Margaluyu, Kecamatan Leles, Kabupaten Garut.</p>
                </div>
            </div>

            <div id="anggota" className='flex flex-col items-center justify-center min-h-screen bg-gray-100 mb-32 sm:mb-48 lg:mb-64 px-4 sm:px-6 lg:px-8 py-8 lg:py-16'>
                <div className='flex flex-col items-center justify-center mt-8 w-full max-w-7xl'>
                    <h2 className='text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-6 sm:mb-8'>Tim KKN 132</h2>

                    <div className='w-full'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 mt-6'>
                            <Card nama="Fitran Alfian Nizar" jabatan={'Ketua'} deskripsi={'Jurusan Teknik Informatika'} imagePath='/fitran.JPG' />
                            <Card nama="Tantri Saraswati" jabatan={'Sekretaris'} deskripsi={'Jurusan Akuntansi Syariah'} imagePath='/tantri.JPG' />
                            <Card nama="Yaisy Azhary" jabatan={'Bendahara Dan Konsumsi'} deskripsi={'Jurusan Bimbingan Konseling Islam'} imagePath='/yaisy.JPG' />
                            <Card nama="Wila Arrianti" jabatan={'Bendahara Dan Konsumsi'} deskripsi={'Jurusan Administrasi Publik'} imagePath='/wila.JPG' />
                            <Card nama="Syahrul Gunawan" jabatan={'Divisi Acara'} deskripsi={'Jurusan Pendidikan Agama Islam'} imagePath='/syahrul.png' />
                            <Card nama="Silvi Syafina" jabatan={'Divisi Acara'} deskripsi={'Jurusan Bimbingan Konseling Islam'} imagePath='/silvi.JPG' />
                            <Card nama="May Xenia" jabatan={'Divisi Acara'} deskripsi={'Jurusan Studi Agama-Agama'} imagePath='/may.JPG' />
                            <Card nama="Yudha Luqman" jabatan={'Divisi Logistik'} deskripsi={'Jurusan Sastra Inggris'} imagePath='/yudha.JPG' />
                            <Card nama="Rizqi Anshori" jabatan={'Divisi Logistik'} deskripsi={'Jurusan Ilmu Hadist'} imagePath='/ansor.JPG' />
                            <Card nama="Arief Saripudin" jabatan={'Divisi Hubungan Masyarakat'} deskripsi={'Jurusan Manejemen'} imagePath='/arief.JPG' />
                            <Card nama="Najma Nur" jabatan={'Divisi Hubungan Masyarakat'} deskripsi={'Jurusan Sejarah Peradaban Islam'} imagePath='/najma.png' />
                            <Card nama="Wulan Ayu" jabatan={'Divisi Hubungan Masyarakat'} deskripsi={'Jurusan Tardis Bahasa Indonesia'} imagePath='/wulan.JPG' />
                            <Card nama="Muhammad Ezza Fayduzzaka" jabatan={'Divisi Media'} deskripsi={'Jurusan Perbandingan Madzhab dan Hukum'} imagePath='/ezza.JPG' />
                            <Card nama="Marsya Malika" jabatan={'Divisi Media'} deskripsi={'Jurusan Pendidikan Kimia'} imagePath='/marsya.JPG' />
                            <Card nama="Sabina Ejmal" jabatan={'Divisi Media'} deskripsi={'Jurusan Pendidikan Bahasa Inggris'} imagePath='/ejmal.JPG' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Proker div */}
            <div id="program-kerja" className='flex flex-col items-center justify-center min-h-screen bg-gray-50 mb-8 sm:mb-16 px-4 sm:px-6 lg:px-8 py-8 lg:py-16'>
                <div className='flex flex-col items-center justify-center mt-8 w-full max-w-7xl'>
                    <h2 className='text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-6 sm:mb-8'>Program Kerja</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 w-full'>
                        <Card imagePath="https://ik.imagekit.io/raidenxvr/IMG_5747.HEIC?updatedAt=1754972780330"
                            nama="Mengajar" jabatan={'Pendidikan'} deskripsi={'Kegiatan belajar mengajar di Sekolah Dasar, Madrasah Ibtidaiyah, dan Madrasah Diniyah Takmiliyah.'} />

                        <Card imagePath="https://ik.imagekit.io/raidenxvr/IMG_7906.HEIC?updatedAt=1754972779049"
                            nama="Anti Bullying" jabatan={'Pendidikan'} deskripsi={'Melakukan kegiatan penyuluhan tentang anti bullying kepada siswa di sekolah.'} />

                        <Card imagePath="https://ik.imagekit.io/raidenxvr/_MG_0114.JPG?updatedAt=1754973086583"
                            nama="EcoPrint" jabatan={'Pendidikan'} deskripsi={'Kegiatan mencetak daun dan bunga ke Totebag.'} />

                        <Card imagePath="https://ik.imagekit.io/raidenxvr/IMG_6143.HEIC?updatedAt=1754973495108"
                            nama="Kebersihan Diri" jabatan={'Pendidikan'} deskripsi={'Kegiatan penyuluhan tentang kebersihan diri kepada siswa di TK.'} />

                        <Card imagePath="https://ik.imagekit.io/raidenxvr/IMG_5931.HEIC?updatedAt=1754972776784"
                            nama="Sosialisasi" jabatan={'Masyarakat'} deskripsi={'Melakukan kegiatan sosialisasi setiap hari kepada RT/RW setempat dan ikuts serta melakukan kegitannya.'} />

                        <Card imagePath="https://ik.imagekit.io/raidenxvr/IMG_6595.HEIC?updatedAt=1754972782287"
                            nama="Tong Sampah" jabatan={'Masyarakat'} deskripsi={'Kegiatan membuat Tong Sampah menggunakan Ember Bekas.'} />

                        <Card imagePath="https://ik.imagekit.io/raidenxvr/e23aaef101758ba2d6e06b67597b3377.jpg?updatedAt=1754973400068"
                            nama="Daur Ulang Minyak" jabatan={'Masyarakat'} deskripsi={'Kegiatan mendaur ulang minyak jelantah menjadi lilin.'} />

                        <Card imagePath="https://ik.imagekit.io/raidenxvr/e23aaef101758ba2d6e06b67597b3377.jpg?updatedAt=1754973400068"
                            nama="Digitalisasi UMKM" jabatan={'Masyarakat'} deskripsi={'Kegiatan digitalisasi UMKM di Desa Margaluyu.'} />

                        <Card imagePath="https://ik.imagekit.io/raidenxvr/IMG_5817.HEIC?updatedAt=1754473835965"
                            nama="Pengajian" jabatan={'Keagamaan'} deskripsi={'Kegiatan rutinan dalam bentuk pengajian ibu-ibu, pengajaran di Madrasah, dan Yasinan.'} />

                        <Card imagePath="https://ik.imagekit.io/raidenxvr/e23aaef101758ba2d6e06b67597b3377.jpg?updatedAt=1754973400068"
                            nama="Gebyar Keagamaan" jabatan={'Keagamaan'} deskripsi={'Kegiatan perlombaan keagamaan untuk anak-anak tingkat SD.'} />
                    </div>
                </div>
            </div>

            {/* Documentation div */}
            <div id="dokumentasi" className='flex flex-col items-center justify-center min-h-screen bg-gray-100 mb-8 sm:mb-16 px-4 sm:px-6 lg:px-8 py-8 lg:py-16'>
                <div className='flex flex-col items-center justify-center mt-8 w-full max-w-6xl'>
                    <h2 className='text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-6 sm:mb-8'>Dokumentasi & Log Book</h2>

                    {/* Carousel Container */}
                    <div className='relative w-full mt-6'>
                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            disabled={!logs || logs.length <= itemsPerPage}
                            className='absolute left-0 sm:left-2 lg:left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-1 sm:p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed'
                        >
                            <MdArrowBack className='w-4 h-4 sm:w-6 sm:h-6 text-gray-600' />
                        </button>

                        <button
                            onClick={nextSlide}
                            disabled={!logs || logs.length <= itemsPerPage}
                            className='absolute right-0 sm:right-2 lg:right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-1 sm:p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed'
                        >
                            <MdArrowForward className='w-4 h-4 sm:w-6 sm:h-6 text-gray-600' />
                        </button>

                        {/* Documentation Items */}
                        <div className='overflow-hidden mx-6 sm:mx-8 lg:mx-12'>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
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
                                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${Math.floor(currentIndex / itemsPerPage) === pageIndex
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
            <div id="tentang-kami" className='flex flex-col items-center justify-center min-h-screen bg-gray-50 mb-8 sm:mb-16 px-4 sm:px-6 lg:px-8 py-8 lg:py-16'>
                <div className='flex flex-col items-center justify-center mt-8 max-w-4xl mx-auto text-center'>
                    <h2 className='text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-6'>Tentang Kami</h2>
                    <p className='mt-4 text-sm sm:text-base text-gray-600 leading-relaxed'>Kami adalah tim KKN 132 yang berkomitmen untuk memberikan kontribusi positif kepada masyarakat Desa Margaluyu.</p>
                    <p className='mt-4 text-sm sm:text-base text-gray-600 leading-relaxed'>Kami percaya bahwa kolaborasi dan partisipasi aktif dari semua pihak sangat penting dalam mencapai tujuan bersama.</p>
                    <p className='mt-4 text-sm sm:text-base text-gray-600 leading-relaxed'>Untuk informasi lebih lanjut, silakan hubungi kami melalui email atau media sosial.</p>
                </div>

                <div className='flex flex-row items-center justify-center w-full bg-gray-100 mt-8 space-x-6 sm:space-x-8 lg:space-x-10 p-4 sm:p-6 rounded-lg max-w-md mx-auto'>
                    <a className='flex items-center justify-center hover:scale-110 transition-transform'
                        href='https://www.instagram.com/kkn132bhaktaluyu/'
                        target='_blank'>
                        <BsInstagram className='w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-gray-600 hover:text-pink-500 transition-colors' />
                    </a>

                    <a className='flex items-center justify-center hover:scale-110 transition-transform'
                        href='https://www.tiktok.com/@bhaktaluyu132?_t=ZS-8yRzogRpZuK&_r=1'
                        target='_blank'>
                        <BsTiktok className='w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-gray-600 hover:text-black transition-colors' />
                    </a>

                    <a className='flex items-center justify-center hover:scale-110 transition-transform'
                        href='mailto:bhaktaluyu132@gmail.com'>
                        <MdEmail className='w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-gray-600 hover:text-blue-500 transition-colors' />
                    </a>
                </div>
            </div>
        </div>
    )
}