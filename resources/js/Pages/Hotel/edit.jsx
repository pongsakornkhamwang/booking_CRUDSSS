import { useForm } from '@inertiajs/react';

export default function Edit({ booking }) {
    const { data, setData, put, errors } = useForm({
        customer_id: booking.customer_id,
        room_id: booking.room_id,
        check_in_date: booking.check_in_date,
        check_out_date: booking.check_out_date,
        total_price: booking.total_price,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/booking/${booking.id}`);
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white p-8">
            <div className="w-full max-w-md rounded-lg bg-gray-800 p-8 shadow-lg">
                <h2 className="mb-6 text-3xl font-extrabold text-center">Edit Booking</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Customer ID */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300">
                            Customer ID
                        </label>
                        <input
                            type="text"
                            value={data.customer_id}
                            onChange={(e) => setData('customer_id', e.target.value)}
                            className="mt-2 block w-full rounded-md border border-gray-700 bg-gray-700 px-4 py-3 text-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                        />
                        {errors.customer_id && (
                            <span className="mt-1 block text-sm text-red-400">
                                {errors.customer_id}
                            </span>
                        )}
                    </div>

                    {/* Room ID */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300">
                            Room ID
                        </label>
                        <input
                            type="text"
                            value={data.room_id}
                            onChange={(e) => setData('room_id', e.target.value)}
                            className="mt-2 block w-full rounded-md border border-gray-700 bg-gray-700 px-4 py-3 text-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                        />
                        {errors.room_id && (
                            <span className="mt-1 block text-sm text-red-400">
                                {errors.room_id}
                            </span>
                        )}
                    </div>

                    {/* Check-in Date */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300">
                            Check-in Date
                        </label>
                        <input
                            type="date"
                            value={data.check_in_date}
                            onChange={(e) => setData('check_in_date', e.target.value)}
                            className="mt-2 block w-full rounded-md border border-gray-700 bg-gray-700 px-4 py-3 text-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                        />
                        {errors.check_in_date && (
                            <span className="mt-1 block text-sm text-red-400">
                                {errors.check_in_date}
                            </span>
                        )}
                    </div>

                    {/* Check-out Date */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300">
                            Check-out Date
                        </label>
                        <input
                            type="date"
                            value={data.check_out_date}
                            onChange={(e) => setData('check_out_date', e.target.value)}
                            className="mt-2 block w-full rounded-md border border-gray-700 bg-gray-700 px-4 py-3 text-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                        />
                        {errors.check_out_date && (
                            <span className="mt-1 block text-sm text-red-400">
                                {errors.check_out_date}
                            </span>
                        )}
                    </div>

                    {/* Total Price */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300">
                            Total Price
                        </label>
                        <input
                            type="number"
                            value={data.total_price}
                            onChange={(e) => setData('total_price', e.target.value)}
                            className="mt-2 block w-full rounded-md border border-gray-700 bg-gray-700 px-4 py-3 text-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
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
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
}
