import { Pool } from "pg";


const pool = new Pool({
    connectionString: 'postgresql://neondb_owner:npg_eHDaEI8tNi2f@ep-empty-rain-add5y5m3-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
})

const initDB = async()=>{
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(250) NOT NULL,
        email VARCHAR(150) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        phone VARCHAR(15) NOT NULL,
        role VARCHAR(25) NOT NULL CHECK(role IN('admin', 'customer'))
        )`);
     await pool.query(`
        CREATE TABLE IF NOT EXISTS vehicles(
        id SERIAL PRIMARY KEY,
        vehicle_name VARCHAR(250) NOT NULL,
        type VARCHAR(25) NOT NULL CHECK(type IN('car', 'bike', 'van','SUV')),
        registration_number VARCHAR(50) UNIQUE NOT NULL,
        daily_rent_price NUMERIC CHECK (daily_rent_price > 0) NOT NULL,
        availability_status VARCHAR(25) NOT NULL CHECK ( availability_status IN ('available', 'booked'))
        )`)   ;
    await pool.query(`
        CREATE TABLE IF NOT EXISTS bookings(
        id SERIAL PRIMARY KEY,
        customer_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        vehicle_id INTEGER NOT NULL REFERENCES vehicles(id) ON DELETE CASCADE,
        rent_start_date DATE NOT NULL,
        rent_end_date DATE NOT NULL CHECK (rent_end_date > rent_start_date),
        total_price NUMERIC(10,0) NOT NULL CHECK(total_price > 0),
        status VARCHAR(20) NOT NULL CHECK(status IN ('active', 'cancelled', 'returned'))
        )`);

        console.log("database connected")

}