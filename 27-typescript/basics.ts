// Primitives: number, string, boolean
// More complex types like arrays and objects
// Function types, parameters

// Primitives
let age: number = 38;

let userName: string;
userName = 'leandro';

let isStudent: boolean;
isStudent = true;

// Arrays
let hobbies: string[];
hobbies = ['guitar', 'music', 'games', 'coding'];

// Objects
let person: {
  name: string;
  age: number;
};

person = {
  name: 'Leandro',
  age: 38,
};

// Keeping an array of objects example
let people: {
  name: string;
  age: number;
}[];

// Type inference
// The type 'string' is inferred to this variable
let course = 'React - The Complete Guide';
// course = 12345; error due to type inference

// Multiple types for the same variable
let courseCode: string | number = 'TypeScript Course';
courseCode = 12345;

// Type alias
type Vehicle = {
  model: string;
  year: number;
};

let toyota: Vehicle;
let vehicleFleet: Vehicle[];

// Functions & types
function add(a: number, b: number) {
  // the return type is inferred if not described
  return a + b;
}

function subtract(a: number, b: number): number {
  // describing the return type
  return a - b;
}

function output(value: any) {
  // return type = void (no return)
  console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
// updatedArray will be of type any[], if no <T>
// using the generics <> in front of parameters makes TS understands and updatedArray now is of the type 'number'

const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');
const mixedArray = insertAtBeginning(['a', 2, 3], 'd');
