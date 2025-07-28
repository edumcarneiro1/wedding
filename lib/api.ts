import { Guest } from '@lib/types';
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


export const getGuests  = async (token: string): Promise<Guest[]> => {
    const res = await fetch(`${baseUrl}/api/family/${token}`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch guests');
    }

    const guests: Guest[] = await res.json();
    return guests;
};


export const PostGuests = async (guests: Guest[]): Promise<{ success: boolean; error?: string }> => {
  //test
  try {
    console.log('1');
    const res = await fetch(`${baseUrl}/api/guests`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ guests })
    });
    console.log('2');
    const data = await res.json();
    console.log('3');
    if (!res.ok || !data.success) {
      return {
        success: false,
        error: data.error || "Unknown error"
      };
    }

    return { success: true };
  } catch (err) {
    console.log('4');
    let message = "Network error";
    if (err instanceof Error) {
        message = err.message;
    }
    return { success: false, error: message || "Network error" };
  }
};
