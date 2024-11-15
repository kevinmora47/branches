import {RequestHandler} from 'express';
import {HealthService} from './health.service';
import {HealthCheckResponse} from './health.types';

export class HealthController {
    private healthService: HealthService;

    constructor() {
        this.healthService = new HealthService();
    }

    public checkHealth: RequestHandler<{}, HealthCheckResponse> = (_req, res) => {
        const status = this.healthService.getStatus();

        res.json({
            status: 'success',
            message: status
        });
    };
}