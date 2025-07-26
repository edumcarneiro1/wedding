import { supabaseServer } from '@lib/dbServerClient';
import { Guest, HotelType } from '@lib/types';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const guests: Guest[] = data.guests;

    if (!Array.isArray(guests)) {
      return Response.json({ success: false, error: "Not the correct body format" }, { status: 400 });
    }

    // Collect errors 
    const errors: string[] = [];

    for (const guest of guests) {
      guest.presence = guest.presence === null ? true : guest.presence;
      guest.confirmed = true;
      guest.days =
        guest.hotel === HotelType.NOT_AVAILABLE ||
        guest.hotel === HotelType.NO
          ? null
          : guest.days;
      guest.hotel = guest.hotel === HotelType.NOT_CONFIRMED ? HotelType.YES : guest.hotel;

      if (guest.id && guest.id <= 900) {
        const { error } = await supabaseServer
          .from('guests')
          .update(guest)
          .eq('id', guest.id);
        if (error) {
          errors.push(error.message);
        }
      } else {
        delete guest.id;
        const { error } = await supabaseServer
          .from('guests')
          .insert([guest]);
        if (error) {
          errors.push(error.message);
        }
      }
    }

    if (errors.length > 0) {
      return Response.json({ success: false, error: errors.join(", ") }, { status: 500 });
    }

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    return Response.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
