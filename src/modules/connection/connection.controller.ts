import {ConnectionService} from './connection.types';
import {SupabaseConnectionService} from './connection.service';

export class ConnectionController {
    private connectionService: ConnectionService;

    constructor() {
        this.connectionService = new SupabaseConnectionService();
    }

    public testConnection: (_req: any, res: any) => Promise<any> = async (_req, res) => {
        const result = await this.connectionService.testConnection();

        if (!result.success) {
            return res.status(500).json({
                status: 'error',
                message: 'Failed to connect to Supabase',
                error: result.error
            });
        }

        return res.status(200).json({
            status: 'success',
            message: 'Successfully connected to Supabase!'
        });
    };
}