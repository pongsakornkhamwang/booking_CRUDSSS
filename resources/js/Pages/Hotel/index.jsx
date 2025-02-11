import Navbar from '@/Components/Navbar';
import { Link, router } from '@inertiajs/react';
import Pagination from '/resources/js/Components/Pagination';
import { useState } from "react";

export default function Index({ booking, sort_by, order, query }) {
    const [currentSortBy, setCurrentSortBy] = useState(sort_by || 'id');
    const [currentOrder, setCurrentOrder] = useState(order || 'asc');

    const handleSort = (column) => {
        const newOrder =
            currentSortBy === column && currentOrder === 'asc' ? 'desc' : 'asc';
        setCurrentSortBy(column);
        setCurrentOrder(newOrder);
        router.get('/booking', { sort_by: column, order: newOrder });
    };

    const handlePageChange = (url) => {
        if (url) {
            router.get(url, {
                sort_by: currentSortBy,
                order: currentOrder,
            });
        }
    };

    const handleDelete = (b_id) => {
        if (confirm('Are you sure you want to delete this booking?')) {
            router.delete(`/booking/${b_id}`);
        }
    };

    return (
        <>
            <Navbar />
            <div className="mx-auto max-w-6xl p-8 bg-yellow-500 text-white min-h-screen">
                <h1 className="mb-6 text-center text-4xl font-extrabold text-indigo-400">
                    Booking
                </h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-700 rounded-lg bg-pink-500 shadow-lg">
                        <thead className="bg-gradient-to-r from-pink-600 to-pink-800">
                            <tr>
                                {[{
                                    key: 'id', label: 'ID'
                                }, {
                                    key: 'customer_id', label: 'Customer ID'
                                }, {
                                    key: 'room_id', label: 'Room ID'
                                }, {
                                    key: 'check_in_date', label: 'Check In'
                                }, {
                                    key: 'check_out_date', label: 'Check Out'
                                }, {
                                    key: 'action', label: 'Action'
                                }].map((col) => (
                                    <th
                                        key={col.key}
                                        className="cursor-pointer px-6 py-4 text-left text-sm font-semibold text-gray-100"
                                        onClick={() => handleSort(col.key)}
                                    >
                                        {col.label}{' '}
                                        {currentSortBy === col.key &&
                                            (currentOrder === 'asc' ? '▲' : '▼')}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">
                            {booking.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="py-8 text-center text-gray-300">
                                        No bookings found.
                                    </td>
                                </tr>
                            ) : (
                                booking.data.map((book) => (
                                    <tr key={book.id} className="hover:bg-pink-700">
                                        <td className="px-6 py-4 text-gray-200">{book.id}</td>
                                        <td className="px-6 py-4 text-gray-200">{book.customer_id}</td>
                                        <td className="px-6 py-4 text-gray-200">{book.room_id}</td>
                                        <td className="px-6 py-4 text-gray-200">{book.check_in_date}</td>
                                        <td className="px-6 py-4 text-gray-200">{book.check_out_date}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex space-x-3">
                                                <Link
                                                    href={`/booking/${book.id}/edit`}
                                                    className="rounded-full bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700"
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(book.id)}
                                                    className="rounded-full bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="mt-8 flex justify-center">
                    <Pagination links={booking.links} onPageChange={handlePageChange} />
                </div>
            </div>
        </>
    );
}
