/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000, 
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categories = {};

  transactions.forEach((transaction) => {
    const category = transaction.category; // category : totalSpent is the idea

    // .category will look for CATEGORY in LHS of categories object, but we have food, movies etc. there
    if (!categories[category]) {
      categories[category] = 0;
    }

    categories[category] += transaction.price;
  });

  return Object.keys(categories).map((category) => {
    return {
      category,
      totalSpent: categories[category],
    };
  });
}

module.exports = calculateTotalSpentByCategory;
