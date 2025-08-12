
interface CardProps {
    nama: string;
    jabatan: string;
    deskripsi: string;
    imagePath?: string; // Optional image path

}

export default function Card({ nama, jabatan, deskripsi, imagePath }: CardProps) {
    return (
        <div className='flex flex-col bg-white shadow-md rounded-lg p-4 items-center justify-center text-center'

        >
            <div className='w-24 h-24 rounded-full bg-gray-200 mb-4 flex justify-center'>
                <img src={imagePath || "https://via.placeholder.com/150"} alt={nama} className='w-full h-full rounded-full object-cover items-center justify-center text-center' />
            </div>
            <h3 className='text-xl font-bold text-center'>{nama}</h3>
            <h2 className='text-lg font-semibold'>{jabatan}</h2>
            <p className='text-gray-600'>{deskripsi}</p>
        </div>

    );
}