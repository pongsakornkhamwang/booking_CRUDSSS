import Navbar from '@/Components/Navbar';
import { useForm } from '@inertiajs/react';
import FlashMessage from "@/Components/FlashMessage";

export default function Create({ roomtype }) {
    const { data, setData, post, errors } = useForm({
        customer_id: '',
        room_id: '',
        check_in_date: '',
        check_out_date: '',
        total_price: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('booking.store')); // ส่งข้อมูลไปยัง store
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-8">
                <h1 className="mb-8 text-center text-4xl font-extrabold">
                    Create Booking
                </h1>
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-lg rounded-lg bg-gray-800 p-8 shadow-lg"
                >
                    <div className="mb-6">
                        <label
                            htmlFor="customer_id"
                            className="block text-sm font-medium text-gray-300"
                        >
                            Customer ID:
                        </label>
                        <input
                            type="text"
                            id="customer_id"
                            value={data.customer_id}
                            onChange={(e) => setData('customer_id', e.target.value)}
                            className="mt-2 w-full rounded-md border border-gray-700 bg-gray-700 px-4 py-3 text-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {errors.customer_id && (
                            <span className="mt-1 block text-sm text-red-400">
                                {errors.customer_id}
                            </span>
                        )}
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="room_id"
                            className="block text-sm font-medium text-gray-300"
                        >
                            Room ID:
                        </label>
                        <input
                            type="text"
                            id="room_id"
                            value={data.room_id}
                            onChange={(e) => setData('room_id', e.target.value)}
                            className="mt-2 w-full rounded-md border border-gray-700 bg-gray-700 px-4 py-3 text-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {errors.room_id && (
                            <span className="mt-1 block text-sm text-red-400">
                                {errors.room_id}
                            </span>
                        )}
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="check_in_date"
                            className="block text-sm font-medium text-gray-300"
                        >
                            Check In:
                        </label>
                        <input
                            type="date"
                            id="check_in_date"
                            value={data.check_in_date}
                            onChange={(e) => setData('check_in_date', e.target.value)}
                            className="mt-2 w-full rounded-md border border-gray-700 bg-gray-700 px-4 py-3 text-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {errors.check_in_date && (
                            <span className="mt-1 block text-sm text-red-400">
                                {errors.check_in_date}
                            </span>
                        )}
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="check_out_date"
                            className="block text-sm font-medium text-gray-300"
                        >
                            Check Out:
                        </label>
                        <input
                            type="date"
                            id="check_out_date"
                            value={data.check_out_date}
                            onChange={(e) => setData('check_out_date', e.target.value)}
                            className="mt-2 w-full rounded-md border border-gray-700 bg-gray-700 px-4 py-3 text-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {errors.check_out_date && (
                            <span className="mt-1 block text-sm text-red-400">
                                {errors.check_out_date}
                            </span>
                        )}
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="total_price"
                            className="block text-sm font-medium text-gray-300"
                        >
                            Total Price:
                        </label>
                        <input
                            type="text"
                            id="total_price"
                            value={data.total_price}
                            onChange={(e) => setData('total_price', e.target.value)}
                            className="mt-2 w-full rounded-md border border-gray-700 bg-gray-700 px-4 py-3 text-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {errors.total_price && (
                            <span className="mt-1 block text-sm text-red-400">
                                {errors.total_price}
                            </span>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-3 font-bold text-white transition-colors hover:from-indigo-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Create
                    </button>
                </form>
            </div>
        </>
    );
}
