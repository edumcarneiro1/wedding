import { supabaseServer } from '@lib/dbServerClient';
import { Guest, HotelType } from '@lib/types';

export async function POST(req: Request) {
  try {
    const data = await req.json() ;
    const guests: Guest[] = data.guests;
 
    if ( guests && !Array.isArray(guests)) {
      return new Response(JSON.stringify({ error: "Not the correct body format" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    guests.forEach(async guest => {
        guest.presence =  guest.presence === null ? true : guest.presence;
        guest.confirmed = true;
        guest.days = 
                guest.hotel === HotelType.NOT_AVAILABLE || 
                guest.hotel === HotelType.NO ? 
                null : 
                guest.days;
        guest.hotel = guest.hotel === HotelType.NOT_CONFIRMED ? HotelType.YES : guest.hotel;

      if (guest?.id && guest.id <= 900) {
        const { error } = await supabaseServer
                .from('guests')
                .update(guest)
                .eq('id', guest.id); 
        if (error) {
          return new Response(JSON.stringify({ error: error.message }), {
                status: 500,
            });
        }
      } else {
        delete guest.id;
        const { error } = await supabaseServer
                    .from('guests')
                    .insert([guest]);
        
        if (error) {
          return new Response(JSON.stringify({ error: error.message }), {
                status: 500,
            });
        }
      }
        
        
        // Add guest if ID === 0;
    })

    //
    // Optionally, do something with guests here (e.g., save to database)

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}