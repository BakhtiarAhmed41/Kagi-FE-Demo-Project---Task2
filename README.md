# Court Hearing Time Calculator

## 📌 Problem Statement
You are at court for a traffic ticket and there are 4 other people with you.  
Everyone’s hearing will be in **alphabetical order**.  
Each hearing takes **30 minutes**.  
There are multiple judges who can each see **one person at a time in parallel**.  

The task: **Calculate how long it will take for your hearing to finish.**

---

## 🚀 Examples

```js
court("Jules", 3, "Adam Betty Frank Mike"); 
// Output: 60

court("Zane", 1, "Mark Hank Ana Vivian");   
// Output: 150
```

---

## 🧾 Previous Code (Naive Approach)

```js
function court(name, judges, people) {
  let names = people.split(" ");
  names.push(name);
  names.sort();  // O(n log n)

  let index = names.indexOf(name);
  let round = Math.floor(index / judges);
  return (round + 1) * 30;
}
```

✅ This solution works correctly.  
❌ But sorting the entire list is unnecessary and adds extra complexity (`O(n log n)`).

---

## ⚡ Optimized Code (Final Version)

```js
function court(name, judges, people) {
  const others = people.split(" ");
  let before = 0;

  for (const person of others) {
    if (person.localeCompare(name) < 0) before++;
  }

  return (Math.floor(before / judges) + 1) * 30;
}
```

✅ Avoids sorting altogether.  
✅ Runs in **O(n)** instead of **O(n log n)**.  
✅ Works correctly for all cases.  
✅ Scales better for larger inputs.  

---

## 🧠 Optimization Journey

1. **Initial solution**  
   - Split the names, added my own, sorted the list, then found my position with `indexOf()`.  
   - This worked, but sorting made the algorithm slower (`O(n log n)`).

2. **Improvement**  
   - Realized I only need to know how many names come **before me alphabetically**.  
   - Instead of sorting, I loop once and count.  
   - This reduces the work to **O(n)** — faster and more efficient.

3. **Verification**  
   - Used `console.time()` to benchmark both versions.  
   - Repeated the function a million times and confirmed the optimized one is significantly faster.  
   - Both versions produce the correct result for the task inputs.

---

## 🧪 Benchmark Example

```js
console.time("optimized");
for (let i = 0; i < 1e6; i++) {
  court("Jules", 3, "Adam Betty Frank Mike");
}
console.timeEnd("optimized");
```

Output shows that the **optimized version runs faster** because it avoids sorting.

---

## ✅ Conclusion
The optimized solution eliminates unnecessary sorting and directly counts how many names are alphabetically before yours.  
This reduces complexity from **O(n log n)** to **O(n)**, making it the fastest and most efficient solution.
