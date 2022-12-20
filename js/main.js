var frase = "Meu primeiro Hello, World! em JS";
var lista =  ["pêra", "maça", "laranja", ]
var frase1 = "Conceitos básicos de JavaScript"
lista.push("uva");
var fruta = {nome:"maça", cor:"vermelha"} 
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"uva"}]



alert(frase1);
/* Trabalhando com String */
alert(frase);

/* Trabalhando com lista */
alert(lista)

alert(lista[0])

alert(lista.toString())

alert(lista.join(" | "))

/* Trabalhando com dicionário */
alert(fruta.nome)
alert(fruta.cor)

alert(frutas)

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";

}

function redirecionar(){
    window.open("https://www.dio.me/");
}

function trocar(elemento){
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar mouse aqui";
    // alert("trocar texto")
    elemento.innerHTML = "Obrigado por passar mouse aqui"
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}



