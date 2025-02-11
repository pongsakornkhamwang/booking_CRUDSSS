<?php

namespace Database\Seeders;

use App\Models\Customer;
use App\Models\RoomType;
use App\Models\Room;
use App\Models\Booking;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class databaseHotelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        RoomType::factory(10)->create();  // สร้างประเภทห้องพัก
        Customer::factory(30)->create();  // สร้างลูกค้า
        Room::factory(40)->create();  // สร้างห้องพัก
        Booking::factory(35)->create();  // สร้างการจอง
    }
}
