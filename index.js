// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
  name: "Monica",
  gender: "Female",
  age: 17,
  email: "monica@dingdong.com",
  isHavePet: true,
  education: [
    {
      name: "SD 01",
      city: "Jakarta",
      graduate: 2016,
    },
    {
      name: "SMP 02",
      city: "Jakarta",
      graduate: 2019,
    },
    {
      name: "SMA 03",
      city: "Jakarta",
    },
  ],
};

const firstFavoriteColor = ["Yellow", "Ping", "White", "Purple"];
firstUser["favoriteColor"] = [...new Set(firstFavoriteColor)]; //hapus data dobel

const firstFavoriteRestaurant = [
  "Bento",
  "Sushi",
  "Pancake",
  "Eggy",
  "Tempura",
  "Bento",
  "Eggy",
  "Padang",
  "Tteok",
  "Sushi",
  "Sushi",
];
firstUser["favoriteRestaurant"] = [...new Set(firstFavoriteRestaurant)]; //hapus data dobel

const secondUser = {
  name: "Wendy",
  gender: "Male",
  age: 23,
  email: "wendy@dingdong.com",
  isHavePet: false,
  education: [
    {
      name: "SD 02",
      city: "Jakarta",
      graduate: 2010,
    },
    {
      name: "SMP 02",
      city: "Bogor",
      graduate: 2013,
    },
    {
      name: "SMA 03",
      city: "Surabaya",
      graduate: 2016,
    },
    {
      name: "Universitas Maju",
      city: "Tangerang",
    },
  ],
};

const secondFavoriteColor = ["Blue", "Black", "Grey"];
secondUser["favoriteColor"] = [...new Set(secondFavoriteColor)]; //hapusdatadobel

const secondFavoriteRestaurant = [
  "Tempura",
  "Bento",
  "Sushi",
  "Pancake",
  "Padang",
  "Katsu",
  "Geprek",
  "Pancake",
  "Eggy",
];
secondUser["favoriteRestaurant"] = [...new Set(secondFavoriteRestaurant)]; //hapus data dobel

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];

users.push(firstUser, secondUser);
// console.log(users);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
