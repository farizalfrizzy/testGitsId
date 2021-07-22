let number = prompt('masukan angka : ');
for (let i = number; i == number; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    number = 'Hello World';
  } else if (i % 3 == 0) {
    number = 'Hello';
  } else if (i % 5 == 0) {
    number = 'World';
  } else {
    number;
  }
}
alert(number);
