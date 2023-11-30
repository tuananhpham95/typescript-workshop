type Person = {
  name: string;
  age: number;
  phone: number;
  email?: string;
  address?: string;
};

//Alla properties optional
type PartialPerson = Partial<Person>;

//Alla properties required
type RequiredPerson = Required<Person>;

//Innehåller en utvald property
type PickPerson = Pick<Person, "email">;

//Innehåller alla properties förutom en bortvald property

type OmitPerson = Omit<Person, "phone">;
