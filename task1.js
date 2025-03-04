// Завдання: отримання даних про користувачів
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди node tests/task1.test.js

const usersList = document.querySelector("ul.usersList");
(async ()=> {
    const usersRequest = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await usersRequest.json();
    users.forEach(user => {
        const liUser = document.createElement("li");
        liUser.textContent = user.name;
        usersList.appendChild(liUser);
    })
})();


