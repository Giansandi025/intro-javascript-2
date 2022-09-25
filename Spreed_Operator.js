let data = {
    i: 1,
    fullName: "Gian EdriSandi",
    gender: "female",
    height: "165 cm",
    educational: [
        {
            periode: "2011-2014",
            school: "SMP Kartika 1-7 Padang",
            major: "-"
        }
    ],
    phone: 
        {
            primary: "082390155311",
            secondary: "082385237805",
        }
    
};
let newEducation = {
    periode: "Oktober 2022 - Desember 2022",
    name: "Pijar Camp",
};

let all_profile = {...data, ...newEducation};

console.log(all_profile);


//Menggunakan Destructuring
const {primary} = data;

console.log(data.phone.primary);

