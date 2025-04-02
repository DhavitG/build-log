const input = [1, 2, 3, 4, 5];

const newInput = input.map((e) => e * 3);

// console.log(newInput);

const filtered = newInput.filter((e) => e % 2 == 0);

console.log(filtered);

// AXIOS

//for post: url then body then headers
// for get: url then headers as there's no body here
async function main() {
  const response = await axios.post(
    "https://100x.devs.com",
    {
      username: "gdhavit@gmai.com",
      password: 123456789,
    },
    {
      headers: {
        Authorisation: "hu ha 223",
      },
    }
  );
}
