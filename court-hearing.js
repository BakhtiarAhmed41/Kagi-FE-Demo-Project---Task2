function court(name, judges, people) {
  const others = people.split(" ");
  let before = 0;

  for (const person of others) {
    if (person.localeCompare(name) < 0) before++;
  }

  return (Math.floor(before / judges) + 1) * 30;
}

//Benchmark
console.time("optimized");
for (let i = 0; i < 1e6; i++) {
  court("Jules", 3, "Adam Betty Frank Mike");
}
console.timeEnd("optimized");

// Tests
console.log(court("Jules", 3, "Adam Betty Frank Mike"));
console.log(court("Zane", 1, "Mark Hank Ana Vivian"));   
