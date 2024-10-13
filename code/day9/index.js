function fizzBuzz(range) {
  for (let i = 0; i < range; i++) {
    if (i % 2 == 0) {
      console.log(i * i);
    }
    if (i % 3 == 0) {
      console.log(i * i * i);
    }
  }
}

fizzBuzz(1000);
