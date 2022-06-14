//Criando a variavel idade
var age=24
console.log("Idade: "+age)
//Veficando se a idade é igual,menor ou maior que 18
if(age>18){
    console.log("Idade maior do que 18!")
}
else{
    if(age===18)
    {
        console.log("Idade igual a 18!")
    }
    if(age<18)
    {
        console.log("Idade menor do que 18")
    }
}
//Criando a variavel Boolean condHuman com a condição verdadeira
var condHuman = true
console.log("Condição humana: "+condHuman)
//Verificando se é maior de idade e condição humana é true
if(age>=18 && condHuman===true){
    console.log("Você é um adulto humano !!")
}
else{

    console.log("Você não é um adulto humano!!")
}
//Criando a variavel string mes de aniversario
var birthdayMonth="Agosto"
console.log("Mes de aniversario: "+birthdayMonth)
//Verificando se o mes de aniversário é Janeiro ou Dezembro
if(birthdayMonth=="Janeiro" || birthdayMonth=="Dezembro"){
    console.log("Niver em Dezembro ou Janeiro")
}
else{
   console.log("Seu niver será em "+birthdayMonth)
}
//Criando a string com o nome
var name ="Rafael"
console.log("Nome: "+name)
//Colocando as letras do nome em um array
var vetorNome = name.split('')
//Verificando se o nome começa com a letra R
if(vetorNome[0]==="R"){
    console.log("Seu nome começa com a letra R!")
}
else{
    console.log("Seu nome não começa com a letra R,começa com a letra "+vetorNome[0])
}



var lastName="Gregorio"
console.log("Sobrenome: "+lastName)
//Verificar se o sobrenome tem mais de 6 letras

if(lastName.length>=6 || vetorNome[0]==="E"){

    console.log("Seu nome começa com a letra E ou o seu sobrenome tem mais de 6 letras")
    if(lastName.length<=6)
    {
        console.log("Seu sobrenome não tem 6 palavras")
    }
    else{
        console.log("Seu nome não começa com E")
    }
}

