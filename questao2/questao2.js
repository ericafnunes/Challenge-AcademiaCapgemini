let senha = document.getElementById("password");
let mais = document.getElementById("mais");
let numero = document.getElementById("numero");
let caracter = document.getElementById("caracter");
let min = document.getElementById("min");
let qdte = document.getElementById("qdte");
let enviar = document.getElementById("enviar")
let senhaForte = document.getElementById("imagemSenhaForte");



function qtdsenha() {
  let senha = document.getElementById('password');
  let qtdeCaracteres = senha.value.length;
  if (qtdeCaracteres < 6) {
    alert(`A senha digitada tem ${qtdeCaracteres} caracteres. O mínimo são 6 caracteres para senha, a senha precisa de mais ${6 - qtdeCaracteres} caracteres para ser válida.`)
  }
}

senha.onfocus = function () {
  document.getElementById("errors").style.display = "block";
}

senha.onblur = function () {
  document.getElementById("errors").style.display = "none";
}

senha.onblur = function () {
  document.getElementById()
}


senha.onkeyup = function () {
  let lowerCaseLetters = /[a-z]/g;
  if (senha.value.match(lowerCaseLetters)) {
    document.getElementById("min").style.display = "none";
  } else {
    min.classList.add("erro");
  }
  
  let upperCaseLetters = /[A-Z]/g;
  if (senha.value.match(upperCaseLetters)) {
    document.getElementById("mais").style.display = "none";
  } else {
    mais.classList.add("erro");
  }
  let numbers = /[0-9]/g;
  if (senha.value.match(numbers)) {
    document.getElementById("numero").style.display = "none";
  } else {
    numero.classList.add("erro");
  }

  let specials = /(?=.*[!@#$%&*()-+])/g;
  if (senha.value.match(specials)) {
    document.getElementById("caracter").style.display = "none";
  } else {
    caracter.classList.add("erro");
  }

  if (senha.value.length >= 6) {
    document.getElementById("qdte").style.display = "none";
  } else {
    qdte.classList.add("erro");
  }

  if (senha.value.match(lowerCaseLetters) && senha.value.match(upperCaseLetters)
    && senha.value.match(numbers) && senha.value.match(specials) && senha.value.length >= 6) {
    document.querySelector("h3").style.display = "none";
    document.getElementById("imagemsenha").innerHTML = "Senha forte! ✔️"
  }

}
