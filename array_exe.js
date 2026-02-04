console.log("-------------Example 1-------------");
// Q1. push()
// You are building a to-do app. Add a new task 'Buy milk' to the tasks array.
let tasks = ['Wake up', 'Brush teeth'];
tasks.push('Buy milk');

console.log("-------------Example 2-------------");
// Q2. pop()
// Remove the last notification from the notifications array.
let notifications = ['Email', 'Message', 'Reminder'];
notifications.pop();

console.log("-------------Example 3-------------");
// Q3. shift()
// A queue system removes the first customer. Remove the first customer.
let customers = ['Customer1', 'Customer2', 'Customer3'];
customers.shift();

console.log("-------------Example 4-------------");
// Q4. unshift()
// A new song is added to the beginning of the playlist.
let playlist = ['Song B', 'Song C'];
playlist.unshift('Song A');

console.log("-------------Example 5-------------");
// Q5. splice()
// In a classroom list, remove 'Alex' and add 'John' and 'Sara' in the same position.
let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
students.splice(1, 1, 'John', 'Sara');

console.log("-------------Example 6-------------");
// Q6. splice()
// From the menu, remove 2 items starting from index 1.
let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
menu.splice(1, 2);

console.log("-------------Example 7-------------");
// Q7. slice()
// Create a new array that contains only weekend days.
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let weekend = days.slice(5);

console.log("-------------Example 8-------------");
// Q8. reverse()
// Reverse the order of levels in a game.
let levels = ['Easy', 'Medium', 'Hard'];
levels.reverse();

console.log("-------------Example 9-------------");
// Q9. sort()
// Sort the scores in ascending order.
let scores = [45, 12, 78, 34, 89];
scores.sort((a, b) => a - b);

console.log("-------------Example 10-------------");
// Q10. sort() with numbers
// Sort the prices from lowest to highest.
let prices = [199, 49, 999, 299, 149];
prices.sort((a, b) => a - b);

console.log("-------------Example 11-------------");
// Q11. slice() vs splice()
// From the array, create a new array of the first 3 items WITHOUT changing the original array.
let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
let firstThree = products.slice(0, 3);

console.log("-------------Example 12-------------");
// Q12. splice() complex
// In the array below:
// 1. Remove 'Blue'
// 2. Add 'Purple' and 'Orange' at the same position
let colors = ['Red', 'Green', 'Blue', 'Yellow'];
colors.splice(2, 1, 'Purple', 'Orange');

console.log("-------------Example 13-------------");
// Q13. reverse() + push()
// Reverse the array and then add 'Final Step' at the end.
let steps = ['Step 1', 'Step 2', 'Step 3'];
steps.reverse();
steps.push('Final Step');

console.log("-------------Example 14-------------");
// Q14. sort() strings
// Sort names alphabetically, ignoring case sensitivity.
let names = ['alice', 'Bob', 'charlie', 'David'];
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

console.log("-------------Example 15-------------");
// Q15. Combination Question
// You are managing a movie watchlist:
// 1. Add 'Inception'
// 2. Remove the first movie
// 3. Sort the list alphabetically
let movies = ['Avatar', 'Titanic', 'Gladiator'];
movies.push('Inception');
movies.shift();
movies.sort();

console.log("-------------Example 16-------------");
// Q16. splice() return value
// What does the splice method return in this case?
let nums1 = [1, 2, 3, 4];
let removed = nums1.splice(1, 2); // Returns [2, 3]

console.log("-------------Example 17-------------");
// Q17. slice() immutability check
// After executing slice, does the original array change?
let nums2 = [10, 20, 30, 40];
let result = nums2.slice(1, 3); // No, nums2 remains [10, 20, 30, 40]

console.log("-------------Example 19-------------");
// Q19. reverse() mutation
// After reversing, what happens to the original array reference?
let letters = ['a', 'b', 'c'];
let reversedLetters = letters.reverse(); // Both point to the same reversed array ['c', 'b', 'a']

console.log("-------------Example 21-------------");
// Q21. splice() edge case
// What happens if deleteCount is 0?
let arr = ['x', 'y', 'z'];
arr.splice(1, 0, 'new'); // Result: ['x', 'new', 'y', 'z']

console.log("-------------Example 23-------------");
// Q23. slice() negative index
// What elements are returned?
let values = [100, 200, 300, 400, 500];
let sliced = values.slice(-3, -1); // Returns [300, 400]

console.log("-------------Example 24-------------");
// Q24. splice() vs slice() decision
// Which method would you use if you want to:
// a) Update the original array -> splice()
// b) Keep the original array unchanged -> slice()

console.log("-------------Example 25-------------");
// Q25. Chained methods (brain teaser)
// What is the final value of arr?
let arr2 = [1, 2, 3];
arr2.push(arr2.shift()); // Result: [2, 3, 1]

console.log("-------------Example 26-------------");
// Q26. map() transformation
// You have a list of prices in dollars. Create a new array with 10% tax added to each price.
let basePrices = [10, 20, 30];
let taxedPrices = basePrices.map(price => price * 1.1);