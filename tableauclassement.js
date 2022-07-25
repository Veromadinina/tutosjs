let nombres = [
3,1,5,10,24,36,

]

//methode classement croissant decroissant (a-b ; b-a)
//methode 1
const croissant = nombres.sort((a, b) => a - b)
nombres = croissant


//methode 2
nombres=nombres.sort((a,b)=>{

return b-a

}


)
console.log(nombres);


stagiaires = [
    {nom:"Mimi", note:10},
    {nom:"Mama", note: 12},
    {nom:"Meme", note: 11},
    {nom:"Mumu", note: 14},
    {nom:"Mome", note: 13},

]
//Afficher les notes des stagiaires par ordre croissant
const stagiairesNotes = stagiaires.sort((a,b) =>a.note-b.note)
console.log(stagiairesNotes)