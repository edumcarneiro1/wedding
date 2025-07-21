import { Guest } from "./types";

export const getGuestsFromLocalStorage =  (): Guest[] => {
    const guestsData = localStorage?.getItem('guests');
    const guestFromLocalStorage = guestsData ? JSON.parse(guestsData) : null;
    return guestFromLocalStorage;
}

export const setGuestsToLocalStorage = (guests : Guest[]) : void => {
    localStorage?.setItem('guests', JSON.stringify(guests));
}