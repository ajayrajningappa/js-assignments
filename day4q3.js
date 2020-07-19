var shoppingList=["cheese","mayonise","chocolates","nuts","greenTea"];
var shoppingBasket=["fruits","veggies","ice-cream"];
Array.prototype.push.apply(shoppingList,shoppingBasket)
console.log(shoppingList);