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