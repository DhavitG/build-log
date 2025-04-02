const time = new Date();

let hours = time.getHours();
let mins = time.getMinutes();
let secs = time.getSeconds();

// console.log(`${hours}:${mins}:${secs}`);

hours = hours.toString().padStart(2, "0");
mins = mins.toString().padStart(2, "0");
secs = secs.toString().padStart(2, "0");

if (hours > 12) {
  console.log(`${hours}:${mins}:${secs} PM`);
} else {
  console.log(`${hours}:${mins}:${secs} AM`);
}
