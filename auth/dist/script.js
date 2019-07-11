var auth = {};
  auth.email = "user@user.com";
  auth.pass = "user";
  var mask = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

function checkLoginForm() {
  user = {
    email: document.getElementById("userEmail").value,
    password: document.getElementById("userPass").value
  }
  
  if (validation(user, auth)) {
    alert('Добро пожаловать!');
    refreshForm();
  }
};

// Валидация полей
function validation(user) {  
  if (user.email == auth.email && user.password == auth.pass) {
    displayHide();    
    return true;
  }
       
  // Проверка введения Email
  if (user.email == "") {   
    displayError("Введите E-mail", "errorMsg");
    displayHide();    
    return false;
  }
  
  //Валидация Email
  if (mask.test(user.email) == false) {
    displayError("Введите корректный E-mail", "errorMsg");
    displayHide();
    return false;
  }
  
  //Проверка правильности введенного пароля
  if (user.password == "") {
    displayError("Введите пароль", "errorPassword");
    displayHide();
    return false;
  }
  
  //Ошибка при неверно введенных данных
  displayError("Вы ввели неверный E-mail и пароль", "errorMsg");
  displayHide();
  refreshForm();  
  redBorder();
  return false;
}

// Обновление полей формы
function refreshForm() {
  document.getElementById("userEmail").value = "";
  document.getElementById("userPass").value = ""; 
}

// Отображение сообщения об ошибке введенных данных
function displayError(errorText, errorId) {
  var spyBlock = document.getElementById(errorId);
  spyBlock.innerHTML = errorText;
  spyBlock.style.display="block";
  }

// Скрытие сообщения об ошибке
function displayHide() {
 setTimeout(function(){ 
   document.getElementById("errorMsg").style.display="none";
   document.getElementById("errorPassword").style.display="none";}, 2000); 
}