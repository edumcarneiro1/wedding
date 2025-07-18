import { supabaseServer } from '@lib/dbServerClient';
import { Guest } from '@lib/types';

export async function GET(
    req: Request,
    { params } : { params: Promise<{ token: string }> }
  ) {
    const { token } = await params;
    
    const { data, error } = await supabaseServer
        .rpc('get_guests_by_family_token', { input_token: token });

    if (error) {
      console.error(error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }

    const guests = data as Guest[];

    return new Response(JSON.stringify(guests), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  