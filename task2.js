// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

const getUserButton = document.getElementById("getUserButton");
const usersCity = document.getElementById("userCity");
getUserButton.addEventListener("click", async () => {
    const inputUser = document.getElementById("userNameInput").value;
    const usersRequest = await  fetch("https://jsonplaceholder.typicode.com/users");
    const response = await usersRequest.json();
    const res = response.find((user) => user.name === inputUser);
    usersCity.innerText = res.address.city;
}
)
