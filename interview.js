// Q1. Increase all prices by 10
const increasedPrices = [100, 200, 300].map(p => p + 10);

// Q2. Filter even numbers
const evens = [1, 2, 3, 4, 5, 6].filter(n => n % 2 === 0);

// Q3. Check if any number is negative
const hasNegative = [10, -5, 20].some(n => n < 0);

// Q4. Check if all marks are passing (>=40)
const allPassed = [45, 60, 70].every(m => m >= 40);

// Q5. Find first number greater than 50
const firstOver50 = [20, 40, 55, 70].find(s => s > 50);

// Q6. Calculate total bill amount
const totalBill = [120, 300, 80].reduce((acc, curr) => acc + curr, 0);

// Q7. Convert hours to minutes
const minutes = [1, 2, 1.5].map(h => h * 60);

// Q8. Find first empty string
const firstEmpty = ['name', '', 'email'].find(i => i === "");

// Q9. Check if any value is zero
const hasZero = [5, 0, 8].some(v => v === 0);

// Q10. Double all numbers
const doubled = [2, 4, 6].map(n => n * 2);

// Q11. Extract first two values using destructuring
const [first, second] = [10, 20, 30];

// Q12. Merge two arrays using spread
const merged = [...[1, 2], ...[3, 4]];

// Q13. Check if all temperatures are below 50
const allBelow50 = [30, 40, 45].every(t => t < 50);

// Q14. Find first even number
const firstEven = [1, 3, 4, 6].find(n => n % 2 === 0);

// Q15. Calculate total steps walked
const totalSteps = [2000, 3000, 1500].reduce((a, b) => a + b, 0);

// Q16. Filter salaries above 25,000
const highSalaries = [18000, 26000, 30000].filter(s => s > 25000);

// Q17. Add bonus of 500 to filtered salaries (>20000)
const bonusSalaries = [15000, 22000, 28000].filter(s => s > 20000).map(s => s + 500);

// Q18. Total expense after filtering (>100)
const totalHighExpenses = [50, 200, 150, 80].filter(e => e > 100).reduce((a, b) => a + b, 0);

// Q19. Check if any score is below class average
const scores19 = [60, 70, 80];
const avg19 = scores19.reduce((a, b) => a + b) / scores19.length;
const isAnyBelow = scores19.some(s => s < avg19);

// Q20. Find first number divisible by 7
const firstDiv7 = [10, 14, 21].find(n => n % 7 === 0);

// Q21. Convert prices to discounted prices (10%)
const discounted = [500, 1000, 1500].map(p => p * 0.9);

// Q22. Total calories burned (>30 min only, 5 cal/min)
const totalCals = [20, 45, 60].filter(m => m > 30).reduce((a, b) => a + (b * 5), 0);

// Q23. Check if all inputs are filled
const allFilled = ['name', 'email', 'password'].every(i => i.trim().length > 0);

// Q24. Merge 3 arrays using spread
const combined3 = [...[1], ...[2], ...[3]];

// Q25. Find first failing mark
const firstFail = [55, 48, 35, 70].find(m => m < 40);

// Q26. Calculate average marks of passed students
const passed = [30, 45, 60, 80].filter(m => m >= 40);
const avgPassed = passed.reduce((a, b) => a + b, 0) / passed.length;

// Q27. Square only odd numbers
const oddSquares = [1, 2, 3, 4, 5].filter(n => n % 2 !== 0).map(n => n ** 2);

// Q28. Check if any value exceeds 1000
const tooHigh = [200, 500, 1500].some(v => v > 1000);

// Q29. Extract first and rest values using destructuring
const [firstValue, ...restValues] = [10, 20, 30, 40];

// Q30. Total reward points (>=8 hours only, 10 pts/hr)
const rewards = [6, 8, 9, 7].filter(h => h >= 8).reduce((a, b) => a + (b * 10), 0);

// Q31. Find first word longer than 4 characters
const firstLong = ['hi', 'hello', 'world'].find(w => w.length > 4);

// Q32. Check if all numbers are even
const allEven = [2, 4, 6, 8].every(n => n % 2 === 0);

// Q33. Combine arrays and filter positives
const positives = [...[1, -2], ...[3, -4]].filter(n => n > 0);

// Q34. Total bill after tax (5%)
const totalWithTax = [200, 400].reduce((a, b) => a + b, 0) * 1.05;

// Q35. Find first temperature above average
const temps35 = [20, 30, 40];
const tAvg35 = temps35.reduce((a, b) => a + b) / temps35.length;
const firstAboveAvg = temps35.find(t => t > tAvg35);

// Q36. Combine arrays, keep even numbers, find sum
const evenSum = [...[1, 2, 3], ...[4, 5, 6]].filter(n => n % 2 === 0).reduce((a, b) => a + b, 0);

// Q37. Check if every score is above average
const scores37 = [60, 70, 80];
const sAvg37 = scores37.reduce((a, b) => a + b) / scores37.length;
const allAbove = scores37.every(s => s > sAvg37);

// Q38. Find first transaction above total average
const tx = [100, 500, 900];
const txAvg = tx.reduce((a, b) => a + b) / tx.length;
const firstHighTx = tx.find(t => t > txAvg);

// Q39. Total of squared even numbers
const sumSqEven = [1, 2, 3, 4, 5].filter(n => n % 2 === 0).map(n => n ** 2).reduce((a, b) => a + b, 0);

// Q40. Merge arrays, remove negatives, total sum
const cleanSum = [...[-1, 2], ...[3, -4]].filter(n => n >= 0).reduce((a, b) => a + b, 0);

// Q41. Check if any value is prime
const isPrime = (num) => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) if(num % i === 0) return false;
    return num > 1;
};
const hasPrime = [4, 6, 9, 11].some(isPrime);

// Q42. Calculate weighted total (double values >50)
const weighted = [30, 60, 80].reduce((acc, curr) => acc + (curr > 50 ? curr * 2 : curr), 0);

// Q43. Find first value greater than cumulative sum
let sumSoFar = 0;
const found43 = [10, 20, 50].find(n => {
    let check = n > sumSoFar;
    sumSoFar += n;
    return check && sumSoFar - n !== 0;
});

// Q44. Total salary payout after bonus and tax (Bonus 10%, Tax 5%)
const payout = [20000, 30000].map(s => (s * 1.1) * 0.95).reduce((a, b) => a + b, 0);

// Q45. Check if all prices are within budget (<=1000)
const withinBudget = [400, 800, 1200].every(p => p <= 1000);

// Q46. Combine arrays and find maximum value
const maxVal = Math.max(...[10, 40], ...[30, 20]);

// Q47. Find first value failing custom rule (>2×avg)
const nums47 = [10, 20, 60];
const avgVal47 = nums47.reduce((a, b) => a + b) / nums47.length;
const failRule = nums47.find(n => n > 2 * avgVal47);

// Q48. Total distance after bonus km (>5 only)
const bonusKm = [3, 6, 10].map(k => k > 5 ? k + 1 : k).reduce((a, b) => a + b, 0);

// Q49. Check if every element is unique
const nums49 = [1, 2, 3, 2];
const isUnique = nums49.every((n, i) => nums49.indexOf(n) === i);

// Q50. FINAL BOSS ⭐⭐⭐
const a50 = [1, 2, 3];
const b50 = [4, 5, 6];
const combinedArr = [...a50, ...b50];
const average50 = combinedArr.reduce((acc, curr) => acc + curr, 0) / combinedArr.length;

const finalResult = combinedArr
    .filter(n => n > average50)
    .map(n => n ** 2)
    .reduce((acc, curr) => acc + curr, 0);

console.log(finalResult); // Expected: 77