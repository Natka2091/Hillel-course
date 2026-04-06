const login = prompt ('Хто ви?', '');
const message = login === 'Працівник' ? 'Привіт' :
  login === 'Директор' ? 'Вітаю' :
 'Немає логіну';
alert (message);