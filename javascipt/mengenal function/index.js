// joshua namafungsi
// a,b parameter
// function joshua(a,b){
//  return a*b;
// }
// console.log(joshua)

function greeting(){
    console.log("good morning")
}
greeting();

function selamat(name, language){
    if(language === "English"){
        console.log(`Good Morning ${name}!`);
    }else if (language === "French"){
        console.log(`Bonjour ${name}!`);
    }else{
        console.log(`selamat pagi ${name}!`);
    }
}

selamat("Harry", "French");
function greeting(name, language) {
    if(language === "English") {
      return `Good Morning ${name}!`
    } else if (language === "French") {
      return `Bonjour ${name}!`;
    } else {
      return `Selamat Pagi ${name}!`;
    }
  }
  
  let greetingMessage = greeting("Harry", "French");
  console.log(greetingMessage);
  
  /* output
  Bonjour Harry!
  */


  const bangun = function (name, language){
    if(language === "Englis"){
        return "goog morning" + name + "!";
    }else if(language === "French"){
        return "Bonjour" + name + "!";
    }else{
        return " selamat pagi"+ name +"!";
    }
  }
  console.log(bangun('joshua ','English'))