"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert("Menus", [
      {
        name: "americano",
        price: 18000,
        CategoryId: 3,
        image:
          "https://redplatter.ph/restaurant/wp-content/uploads/2016/08/Cafe-Americano-1.jpg",
        createdAt: "20-03-2024",
        updatedAt: "20-03-2024",
      },
      {
        name: "cappucino latte",
        price: 20000,
        CategoryId: 3,
        image:
          "https://www.forkinthekitchen.com/wp-content/uploads/2022/08/220629.iced_.latte_.vanilla-9009-683x1024.jpg",
        createdAt: "20-03-2024",
        updatedAt: "20-03-2024",
      },
      {
        name: "brown sugar latte",
        price: 20000,
        CategoryId: 3,
        image:
          "https://img.okezone.com/content/2019/10/11/298/2115704/tips-bikin-es-kopi-susu-gula-aren-ala-coffee-shop-C2nLIqHPDk.jpg",
        createdAt: "20-03-2024",
        updatedAt: "20-03-2024",
      },
      {
        name: "ocean blue",
        price: 18000,
        CategoryId: 3,
        image:
          "https://images.unsplash.com/photo-1685156330898-88eb2fdd66aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVhfGVufDB8MHwyfHx8MA%3D%3D&w=1000&q=80",
        createdAt: "20-03-2024",
        updatedAt: "20-03-2024",
      },
      {
        name: "lemon tea",
        price: 12000,
        CategoryId: 3,
        image:
          "https://media.istockphoto.com/id/497892585/id/foto/es-teh-buatan-sendiri-dengan-lemon.jpg?s=612x612&w=0&k=20&c=xfY4eD7Kuu5EHm1ebL3J7ZKOoLaf2qyXX8z5oSRfJfY=",
        createdAt: "20-03-2024",
        updatedAt: "20-03-2024",
      },
      {
        name: "matcha latte",
        price: 20000,
        CategoryId: 3,
        image:
          "https://www.eatingbirdfood.com/wp-content/uploads/2021/04/iced-matcha-latte-hero.jpg",
        createdAt: "20-03-2024",
        updatedAt: "20-03-2024",
      },
      {
        name: "chicken teriyaki rice",
        price: 24000,
        CategoryId: 2,
        image:
          "https://media.istockphoto.com/id/183883466/photo/sesame-chicken-teriyaki-bowl.jpg?s=612x612&w=0&k=20&c=MOLUBFYzN1fnmSNSaajj9UAn_6PEq2yOuu3FtjIs1dI=",
        createdAt: "20-03-2024",
        updatedAt: "20-03-2024",
      },
      {
        name: "bakmie ayam",
        price: 22000,
        CategoryId: 2,
        image:
          "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/11/25053356/Buat-Pecinta-Mie-Ketahui-Dulu-Kalori-Seporsi-Mie-Ayam-.jpg",
        createdAt: "20-03-2024",
        updatedAt: "20-03-2024",
      },
      {
        name: "chicken katsu",
        price: 23000,
        CategoryId: 2,
        image:
          "https://thestayathomechef.com/wp-content/uploads/2021/12/How-to-Make-Easy-Chicken-Katsu-3.jpg",
        createdAt: "20-03-2024",
        updatedAt: "20-03-2024",
      },
      {
        name: "beef teriyaki rice",
        price: 26000,
        CategoryId: 2,
        image:
          "https://www.theseasonedmom.com/wp-content/uploads/2023/02/Beef-Teriyaki-Recipe-3.jpg",
        createdAt: "20-03-2024",
        updatedAt: "20-03-2024",
      },
      {
        name: "omurice",
        price: 26000,
        CategoryId: 2,
        image:
          "https://thumbs.dreamstime.com/b/homemade-japanese-omurice-rice-omelet-homemade-japanese-omurice-rice-omelet-ketchup-205043597.jpg",
        createdAt: "20-03-2024",
        updatedAt: "20-03-2024",
      },
      {
        name: "sandwich",
        price: 24000,
        CategoryId: 2,
        image:
          "https://www.closetcooking.com/wp-content/uploads/2012/03/TheRachelSandwich28akaRoastTurkeyReubenSandwich29withSlaw5008857.jpg",
        createdAt: "20-03-2024",
        updatedAt: "20-03-2024",
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

    return queryInterface.bulkDelete("Menus", null, {});
  },
};
