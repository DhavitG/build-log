let count = 0;

function update() {
  count += 1;
  console.log(count);

  setTimeout(update, 1000);
}

setTimeout(update, 1000);
