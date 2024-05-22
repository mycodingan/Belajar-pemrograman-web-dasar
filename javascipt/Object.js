const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
  };
  
  console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
  console.log(`Umur saya ${user.age} tahun`);



  const joshua = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
    "home world": "Tattooine"
  };
  
  console.log(`Halo, nama saya ${joshua.firstName} ${joshua.lastName}`);
  console.log(`Umur saya ${joshua.age} tahun`);
  console.log(`Saya berasal dari ${joshua["home world"]}`);
  
  const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
  };
  
  spaceship.color = "Glossy red";
  spaceship["maxSpeed"] = 1300;
  spaceship.class= "light freighter";

  delete spaceship.manufacturer;
  console.log(spaceship);