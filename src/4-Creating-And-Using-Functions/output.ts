import { productsURL } from '../lib';

type ProductType = {
  id: number,
  name: string,
  icon?: string
};

const prefix = 'DragonEmoji';

export default async function updateOutput(id: string){

  const products = await getProducts();
  const output = document.querySelector(`#${id}`);
  const html = layoutProducts(products);

  if(output && html)
  {
    output.innerHTML = html;
  }
}

function layoutProducts(products: ProductType[]){
  const items = products.map(({id, icon, name}) =>{
    const productHtml = `
    <span class="card-id">#${id}</span>
    <i class="card-icon ${icon} fa-lg"> </i>
    <span class="card-name">${name}</span>
    `;
    const cardHtml =
    `
    <li>
          <div class="card">
              <div class="card-content">
                  <div class="content">
                  ${productHtml}
                  </div>
              </div>
          </div>
    </li>
    `;
    return cardHtml;
  });
  let productsHtml = `<ul>${items.join('')}</ul>`;
  return productsHtml;
}

async function getProducts() : Promise<ProductType[]>
{
  const response: Response= await fetch(productsURL);
  const products: ProductType[] = await response.json();
  return products;
}

runTheLearningSamples();

function runTheLearningSamples(){
  //hoisted up to the top of page
  function displayProductInfor(id: number, name: string){
    console.log(`${prefix} typed parameters`);
    console.log(`product id = ${id} and name = ${name}`);
  }

  displayProductInfor(10, 'Pizza');

  console.log(`${prefix} function declaration`);
  console.log(addNumbersDeclaration(10, 60));

  function addNumbersDeclaration( x: number, y:number) : number{
    const sum: number = x + y;
    return sum;
  }

  const addNumbersExpression = function(x: number, y: number){
    const sum: number = x + y;
    return sum;
  }

  console.log(`${prefix} function Expression`);
  console.log(addNumbersExpression(10, 960));

  const SampleProducts = [
    {
      id: 0,
      name: 'pizza',
      icon: 'fas fa-pizza-slice'
    },
    {
      id: 1,
      name: 'ice cream',
      icon: 'fas fa-ice-cream',
    },
    {
      id: 2,
      name: 'Cheese',
      icon: 'fas fa-cheese',
    }
  ]

  function getProductNames():string[]{
    return SampleProducts.map((p) => p.name);
  }
  console.log(`${prefix} getProductNames`);
  console.log(getProductNames());

  function getProductById(id: number) : ProductType | undefined{
    return SampleProducts.find((p) => id === p.id);
  }

  console.log(`${prefix} getProductById`);
  console.log(getProductById(1));

  function displayProducts(products: ProductType[]){
    const prodNames = products.map(p => {
    const name = p.name.toLocaleLowerCase();
    return name;
  });
  const msg = `sample products include: ${prodNames.join(', ')}`
  console.log('return void');
  console.log(msg);
  }
  displayProducts(SampleProducts);

  const {floor, random} = Math;
  const getRandomInt = (max: number = 10) => floor(random() * max );

  function createProduct(name: string, icon?: string) :ProductType
  {

    const id = getRandomInt(1000);
    return{
      id, name, icon
    }
  }

console.log("createProduct");
let pineapple = createProduct("pineapple", "pine-apple.jpg");
let mango = createProduct("mango");
console.log(pineapple, mango);


function createProductWithDefaults(name: string, icon: string = "generic.jpg") :ProductType
{
  const id = getRandomInt();
  return{
    id, name, icon
  }
}
  console.log("createProduct");
 pineapple = createProductWithDefaults("pineapple", "pine-apple.jpg");
 mango = createProductWithDefaults("mango");
console.log(pineapple, mango);


function buildAddress(street: string, city: string,  ...restOfAddress: string[]){
  const address = `${street}, ${city}, ${restOfAddress.join(', ')} `;
  return address;
}

const someAddress = buildAddress('1 lois lane', 'eckington', 'apt 6', 'country x', 'ligma county');
console.log(someAddress)

function displayProduct({id, name}: ProductType):void{
  console.log(`${prefix} Destructing params`);
  console.log(`product id = ${id} and name = ${name}`);

}
const prod = getProductById(1);
if(prod){
  displayProduct(prod);
}
}
