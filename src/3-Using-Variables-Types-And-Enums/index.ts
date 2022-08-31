// string, number, boolean, array, undefined, null, any

let firstName: string | null;
firstName = 'Dan';

let age: number;
age = 45;

let hasPurchased = true;

let productNames: string[] = [];
productNames.push('Basketball');

let petCount: number[] = [];
petCount.push(5);

console.log(firstName, age, hasPurchased, productNames, petCount);



enum ProductType {
  Sports,
  Homegoods,
  Veg
};

let pt = ProductType.Sports;

if(pt === ProductType.Sports){
    console.log("found sports")
}