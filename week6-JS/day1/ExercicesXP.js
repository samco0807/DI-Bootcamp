// Ex 1:

// #declaring function
function displayNumbersDivisible(divisor) {
    // #declaring variables
    let listNumbers = [];
    let sum = 0;
  
    // Create a loop for every number between 0 and 500
    for (let i = 0; i <= 500; i++) {
      // adding a if condition to select number divisible by 23
      if (i % divisor === 0) {
        // adding the each number divisible by 23 in the array list numbers and to the sum
        listNumbers.push(i);
        sum += i;
      }
    }
    console.log(listNumbers);
    console.log(sum);
  }
  
  displayNumbersDivisible();

//   Ex 2:

const stock = {
    banana: 6,
    apple: 0,
    pear: 12,
    orange: 32,
    blueberry: 1,
  };
  
  const prices = {
    banana: 4,
    apple: 2,
    pear: 1,
    orange: 1.5,
    blueberry: 10,
  };
  
  let shoppingList = ["banana", "orange", "apple"];
  
  function myBill() {
    totalPrice = 0;
    for (let item of shoppingList) {
      // For each item in my shopping list
      if (item in stock) {
        // if the item is in the stock
        console.log(stock[item]); // Display how many of the item are still in stock
        if (stock[item] != 0) {
          // if the item is still in stock
          console.log("item more than 0"); // so there is more than 0 item remaining
          console.log(prices[item]); // display the price of each item
          console.log((totalPrice += prices[item])); // add the price of the item to the total bill
        } else {
          totalPrice += 0; // otherwise, do not add anything in the total bill
        }
      } else {
        console.log(item + " not in stock"); // tells that the item in not in stock
      }
    }
    console.log(`"Your shoppinglist total is  ${totalPrice}`); // print the total bill of the shopping list
  }
  
  myBill();

  

  