import {createClient} from '@supabase/supabase-js';
import {ConnectionService} from './connection.types';

export class SupabaseConnectionService implements ConnectionService {
    private supabase;

    constructor() {
        if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
            throw new Error('Missing Supabase environment variables');
        }

        this.supabase = createClient(
            process.env.SUPABASE_URL,
            process.env.SUPABASE_KEY
        );
    }

    public async testConnection() {
        try {
            const {error} = await this.supabase.auth.getSession();

            if (error) {
                return {
                    success: false,
                    error: error.message
                };
            }

            return {success: true};
        } catch (err) {
            return {
                success: false,
                error: err instanceof Error ? err.message : 'Unknown error'
            };
        }
    }
}