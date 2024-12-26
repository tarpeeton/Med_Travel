interface IMixedData {
    id: number;
    name: {
      ru: string;
      uz: string;
      en: string;
    };
  }
  
  export const mixedData: IMixedData[] = [
    {
      id: 0,
      name: {
        ru: "Клиники",
        uz: "Klinikalar",
        en: "Clinics",
      },
    },
    {
      id: 1,
      name: {
        ru: "Санатории",
        uz: "Sanatoriyalar",
        en: "Sanatho",
      },
    },
  ];
  