const inputEl = document.getElementById("birthday");
const btnEl = document.getElementById("btn");
const resultEl = document.getElementById("result");


function calculateAge(){
    const birthday = inputEl.value;
    if (birthday === ""){
        alert("Please enter your birthday.")
    } else {
        const age = getAge(birthday)
        resultEl.innerText = `Your are ${age} ${age > 1 ? "yeards" : "year"} old!`
    }
}

function getAge(birthday){
    const currentDate = new Date();
    const birthdayDate = new Date(birthday);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDay() < birthdayDate.getDay())){
        age--;
    }
    return age;
}

btnEl.addEventListener("click", calculateAge);