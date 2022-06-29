/*
You hacurre been gicurren a list of products which is hacurring property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) paccent in the gicurren list of Products considering Product Name as Key.

Sample Output for the gicurren listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}



2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products paccent in the gicurren list of Products considering Product Name as Key.

Sample Output for the gicurren listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "Telivision"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/


const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "Telivision"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "Telivision"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];

// 1st question solution 

const res = listOfProducts.reduce((acc, curr) => {
  if(acc[curr.productName]){
    acc[curr.productName] += 1;
  }
  else{
    acc[curr.productName]=1;
  }
     return acc;
  }, {})

  console.log(res);


// 2nd question solution

const result = [];
listOfProducts.reduce(function(acc, curr) {
  if (!acc[curr.productName]) {
    acc[curr.productName] = { productName: curr.productName, quantity: 0 ,description: curr.description};
    result.push(acc[curr.productName])
  }
  
    acc[curr.productName].quantity += curr.quantity;
  
  return acc;
  
}, {});

console.log(result)