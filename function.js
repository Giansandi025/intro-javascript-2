//1
let profile = {
    name: "Gian Edrisandi",
    email: "giansandi11@gmail.com",
    address: "Komp.Depkes No 62 Kec Pauh, Kota Padang",
    isMaried: false,
    hobby: "Music, Football"
};

const tampilkanData = () => {
    console.log(profile.name);
    console.log(profile.email);
    console.log(profile.address);
    console.log(profile.isMaried);
    console.log(profile.hobby);
}
tampilkanData();

const perulangan = () => {
  for(var i=1; i<=10;i++){
    if(i%2===0){
      console.log(i ,"merupakan bilangan genap")
    }else{
      console.log(i ,"merupakan bilangan ganjil")
    }
  }
}
perulangan();

const string = (num) => {
  let string = "";
    
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      string += i;
    }
    string += "\n";
  }
    return string;
  }
  console.log(string(5));