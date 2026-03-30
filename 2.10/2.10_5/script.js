let login = prompt ('Хто ви?', '');
let message = (login == 'Працівник') ? 'Привіт' :
  (login == 'Директор') ? 'Вітаю' :
  (login == '') ? 'Немає логіну' :
  '';
alert (message);