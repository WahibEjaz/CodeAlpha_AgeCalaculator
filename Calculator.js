function calculateAge(){

let dob = document.getElementById("dob").value;
let birthDate = new Date(dob);
let today = new Date();

let ageYear = today.getFullYear() - birthDate.getFullYear();
let ageMonth = today.getMonth() - birthDate.getMonth();
let ageDay = today.getDate() - birthDate.getDate();

if(ageDay < 0){
ageMonth--;
ageDay += 30;
}

if(ageMonth < 0){
ageYear--;
ageMonth += 12;
}

document.getElementById("result").innerText =
`Age: ${ageYear} Years ${ageMonth} Months ${ageDay} Days`;
}