/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {

    const categories = [];
    const result = [];
    
    for (let i = 0; i < transactions.length; i++) {
        const category = transactions[i]["category"];
    
        if (!categories.includes(category)) {
            categories.push(category);
            result.push({
                "category": category,
                "totalSpent": 0
            })
        }
    }
    
    
    for (let i = 0; i < result.length; i++) {
        let totalSpent = 0;
        const category = result[i]["category"];
    
        for (let j = 0; j < transactions.length; j++) {
            if (transactions[j]["category"] === category) {
                totalSpent = totalSpent + transactions[j]["price"];
            }
        }
    
        result[i]["totalSpent"] = totalSpent;
    }

    return result;
  }

module.exports = calculateTotalSpentByCategory;
