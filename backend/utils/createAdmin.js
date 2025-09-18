import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import Admin from '../models/adminModel.js';
import dotenv from 'dotenv';

dotenv.config();

const createAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        
        // Check if admin exists
        const adminExists = await Admin.findOne({ username: 'admin' });
        if (adminExists) {
            console.log('Admin already exists');
            process.exit(0);
        }

        // Create new admin
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash('admin123', salt);

        const admin = await Admin.create({
            username: 'admin',
            password: hashedPassword,
            role: 'admin'
        });

        console.log('Admin created successfully:', admin);
    } catch (error) {
        console.error('Error creating admin:', error);
    }
    process.exit(0);
};

createAdmin();
