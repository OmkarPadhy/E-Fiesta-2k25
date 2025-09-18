// createAdmin.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import User from './models/userModel.js'; // make sure path is correct

dotenv.config();

(async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        const email = process.env.ADMIN_EMAIL;
        const existing = await User.findOne({ email });
        if (existing) {
            console.log('Admin already exists:', existing.email);
            process.exit(0);
        }
        const plain = process.env.ADMIN_PASSWORD;
        const hashed = await bcrypt.hash(plain, 10);
        const admin = await User.create({
            name: 'Super Admin',
            email,
            rollNo: 'ADMIN',
            password: hashed,
            paymentStatus: 'paid',
            isAdmin: true // if your schema doesn't have this field it's fine, but useful
        });
        console.log('✅ Admin created:', admin.email);
        await mongoose.disconnect();
        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err.message);
        process.exit(1);
    }
})();
