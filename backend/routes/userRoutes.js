// import express from 'express';
// import {
//     registerUser,
//     loginUser,
//     getUserProfile,
//     getAllUsers,
//     updatePaymentStatus,
//     updatePassword
// } from '../controllers/userController.js';
// import { protect, adminProtect } from '../middleware/authMiddleware.js';

// const router = express.Router();

// // Authentication routes
// router.post('/register', registerUser);
// router.post('/login', loginUser);
// router.get('/profile', protect, getUserProfile);
// router.put('/update-password', protect, updatePassword);

// // Admin routes
// router.get('/all', adminProtect, getAllUsers);
// router.put('/payment-status', adminProtect, updatePaymentStatus);

// export default router;

import express from 'express';
import {
    registerUser,
    loginUser,
    getUserProfile,
    getAllUsers,
    updatePaymentStatus,
    updatePassword
} from '../controllers/userController.js';
import { protect, adminProtect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Authentication routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getUserProfile);  // Changed from /profile to /me
router.put('/update-password', protect, updatePassword);

// Admin routes
router.get('/all', adminProtect, getAllUsers);
router.put('/payment-status', adminProtect, updatePaymentStatus);

export default router;