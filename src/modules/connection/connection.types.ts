export interface ConnectionResponse {
    status: 'success' | 'error';
    message: string;
    error?: string;
}

export interface ConnectionService {
    testConnection(): Promise<{ success: boolean; error?: string }>;
}