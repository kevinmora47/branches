import express from 'express';
import dotenv from 'dotenv';
import healthRoutes from './modules/health/health.routes';
import connectionRoutes from './modules/connection/connection.routes';
import {errorHandler} from './shared/middleware/error.middleware';

// Load environment variables first
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/health', healthRoutes);
app.use('/connection', connectionRoutes);

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Try testing the Supabase connection at /connection/test');
});

// Handle uncaught errors
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    process.exit(1);
});

process.on('unhandledRejection', (error) => {
    console.error('Unhandled Rejection:', error);
    process.exit(1);
});