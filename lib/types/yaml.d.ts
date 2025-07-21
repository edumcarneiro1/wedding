declare module '*.yaml' {
  const translation: {
      title: string;
      date: string;
      greetings: string;
      errorText: string;
      errorSubText: string;
      homepageText: string;
      homepageHotel: string;
      homepageConfirmation: string;
      startButton: string;
      name: string;
      surname: string;
      restrictionsTitle: string;
      restrictionsPlaceholder: string;
  }
  const value: {
    pt: translation;
    en: translation;
  };
  export default value;
}
