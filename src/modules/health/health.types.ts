export interface HealthCheckResponse {
    status: 'success' | 'error';
    message: string;
}