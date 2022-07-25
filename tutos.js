console.log("salut");

//Ecriture des variables, var c'est la declartion de la variable
var maVariable = 3;
console.log("Ma Variable : " ,maVariable);

// modification de la valeur d'une variable
maVariable = 100;
console.log("Ma Variable : " ,maVariable);

/* const pour les  variables constantes fixes qui ne sont pas modifiables
 (on ne peut pas changer la valeur)
*/
const maVariableConstante = 200;
console.log("Ma Variable constante : " ,maVariableConstante);

//maVariableConstante = 150;

/** let : déclaration des variables mutables */
let maVariableLet = 300;
console.log("Ma Variable let: " ,maVariableLet);

maVariableLet = 250;
console.log("Ma Variable let: " ,maVariableLet);

/**addition de 2 constantes. Si le '3' est en chaine de caractère il y a une
 * concaténation et le résultat est 35 */ 

const nb1 = 3;
const nb2 = 5;

let nb3 = nb1+nb2;
console.log(nb1+"+"+nb2+"="+nb3);
/* deux écritures possibles pour avoir le résultat
 la deuxième est contenu dans un caractère spécial altgr7 */
console.log(`${nb1}+${nb2}=${nb3}`);

const age = 20;
const prenom = "Mario";

/*if (age>18) {
   
    console.log(
        "passez, entrez"
    ) ;
} else {
    console.log("non mwen diwe non");
}*/
/* ecriture plus simple de la condition précédente premet d'alléger le code
{(true)? <text> ..................<text/> : null*/
(age>22)? console.log("ok"):console.log("nok");



