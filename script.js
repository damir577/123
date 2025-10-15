document.getElementById('clickBtn').addEventListener('click', function(){ 
  const messages = [
    'Отлично!Сайт работает!',
    'JavaScript тожеработает',
    'Вы великолепны',
    'Это работает в интернете'
    ];
const randomMessage = messages[Math.floor(Math.random()* messages.length)];
document.getElementById('message').textContent = randomMessage;
});
