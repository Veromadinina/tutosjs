const stagiaires = [
"Mimi","Momo","Mama","Mumu"
] 
//nombre d'élement du tableau
console.log(stagiaires.length);
// les éléments séparées d'une virgule
console.log(stagiaires.toString());

//boucle pour l'affichage de tous les élements du tableau
for (let i = 0; i < stagiaires.length; i++) {
    console.log(stagiaires[i]);
}

/* Plusieurs méthodes afin Modifier un des éléments du tableau
 à partir de son index*/

 let stagiairesV2 = [
    "Marion","Claude","Sophia","Clémentine"
    ] 
//méthode 1
stagiairesV2[0] = "Mario";
console.log(stagiairesV2);

//méthode 2
 for (let i = 0; i < stagiairesV2.length; i++) {
    if (stagiairesV2[i] == "Sophia"){

        stagiairesV2[i] = "Sophie"
    } 
    
 };

 console.log(stagiairesV2)
// méthode 3
const indexStagiaires = stagiairesV2.findIndex(item=>item == "Claude")
console.log(indexStagiaires);

stagiairesV2[indexStagiaires] = "Stéphen";
console.log(stagiairesV2);

//inverser les éléments 1 et 2

const inverStagiaires = stagiairesV2.findIndex(item=>item == "Stéphen")
console.log(inverStagiaires);
// création d'une constante temporaire
 const temp = stagiairesV2[inverStagiaires];

stagiairesV2[inverStagiaires] = stagiairesV2[inverStagiaires+1];

stagiairesV2[inverStagiaires+1] = temp

console.log(stagiairesV2);


//Mettre tous les éléments du tableau en majuscule

for (let i = 0; i < stagiairesV2.length; i++) {
   
   stagiairesV2[i] = stagiairesV2[i].toUpperCase() 
    
/*    console.log(stagiairesV2[i],stagiairesV2[i].toUpperCase())
 */ 
 };
console.log(stagiairesV2);
 /*2eme possibilité pour toUpperCase (majuscule)
  ; toLowerCase (minuscule) avec map qui permet aux éléments de boucler */
stagiairesV2 = stagiairesV2.map(item=>item.toLowerCase());
console.log(stagiairesV2);


