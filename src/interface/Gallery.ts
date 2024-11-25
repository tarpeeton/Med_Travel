export interface IGallery {
    _id: string;
    _type: "tourPhotos";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    photo: {
      _type: "image";
      asset: {
        _ref: string;
        _type: "reference";
      };
    };
  }
  