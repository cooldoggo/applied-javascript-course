


export type Color = {
  id: number;
  name: string;
  hexcode: string;
};

// Omit is a utility type that creates a new type by
// omitting a property from another type.
export type NewColor = Omit<Color, 'id'>;


