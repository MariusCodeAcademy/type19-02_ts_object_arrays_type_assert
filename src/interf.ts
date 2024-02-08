// types
type User = {
  readonly id: number;
  name: string;
  isAdmin: boolean;
};

type Address = {
  street: string;
  houseNr: number;
  town: string;
};

// sujungiam 2 tipus i viena
type UserWithAddress = User &
  Address & {
    postCode: number;
  };

const user2: UserWithAddress = {
  id: 2,
  name: 'Jane',
  isAdmin: false,
  houseNr: 5,
  street: 'Vytautauto',
  town: 'Kaunas',
  postCode: 555555,
};
user2.isAdmin = false;
// user2.id = 5;

// interface

interface UserInterface {
  readonly id: number;
  name: string;
  isAdmin: boolean;
}

interface AddressInterface {
  street: string;
  houseNr: number;
  town: string;
  county?: string;
}

interface UserWithAddressInterface extends UserInterface {
  street: string;
  houseNr: number;
  town: string;
  county?: string;
}

// reopening interface
interface UserWithAddressInterface {
  postCode: number;
}

const us1: UserInterface = {
  id: 5,
  name: 'Jill',
  isAdmin: false,
};

const us2: UserWithAddressInterface = {
  id: 2,
  name: 'Jane',
  isAdmin: false,
  houseNr: 5,
  street: 'Vytautauto',
  town: 'Kaunas',
  postCode: 555555,
};
