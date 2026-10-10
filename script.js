const yearElement = document.getElementById('year'); yearElement.textContent = new Date().getFullYear();
const helloButton = document.getElementById('helloBtn'); const messageElement = document.getElementById('message');
helloButton.addEventListener('click', function () {   messageElement.textContent =     'Thanks for visiting! Keep learning and stay cyber-safe.';
});
 
