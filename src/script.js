const pass = document.querySelector("#pass");
const newPass = document.querySelector("#newPass");

function generatePass() {
  newPass.innerHTML = '';

  if (pass.value === '') {
    alert('Digite o tamanho da sua senha!');

    return;
  }

  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let password = "";

  for (let i = 0; i < pass.value; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  const result = document.createTextNode(password);
  return newPass.appendChild(result);
}
