declare module '*.yaml' {
  const translation: {
      title: string;
      date: string;
      greetings: string;
      errorText: string;
      errorSubText: string;
      homepageText: string;
      homepageSubText: string;
      homepageHotel: string;
      homepageSubHotel: string;
      homepageConfirmation: string;
      startButton: string;
      name: string;
      surname: string;
      restrictionsTitle: string;
      restrictionsPlaceholder: string;
      hotelDescription: string;
      hotelSubText: string;
      hotelNightsTitle: string;
      hotelOneNightAdult: string;
      hotelOneNightKids: string;
      hotelTwoNightsAdult: string;
      hotelTwoNightsKids: string;
  }
  const value: {
    pt: translation;
    en: translation;
  };
  export default value;
}