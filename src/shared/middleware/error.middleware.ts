import {NextFunction, Request, Response} from 'express';
import {ApiError} from '../types/api.types';

export const errorHandler = (
    err: ApiError,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        status: 'error',
        message: err.message,
        error: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
};