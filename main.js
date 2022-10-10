

 let word = "bonjour"

 let word2 = "Patrick"

 let phrase = word + " " + word2

let newWord = word.replace("ou", "u")

  let thirdWord =  word.split("")

 thirdWord.splice(4,1)

 let fourthWord = thirdWord.join("")

 let fifthWord = word.split("").splice(4,1).join("")

const leBody = document.querySelector(".vert")

function maFonction(){
     leBody.classList.toggle('rose')

 }



 let mots = ["Bonjour", "Hello", "Ola", "你好" ]
 // a intervalle de deux secondes, utiliser un des autres mots du tableau
 // la chaine de caracteres doit remplacer le texte du paragraphe

 let message = "coucou et coucou et coucou"
console.log(mots.length)

// methode for :

 for(let i = 0; i<mots.length; i++){
     setTimeout(()=>{
         document.querySelector(".rouge").textContent = mots[i]
     },1000)
 }

//methode forEach
    mots.forEach((mot)=>{
        setTimeout(()=>{

                document.querySelector(".rouge").textContent = mot
            },
            1000*mots.indexOf(mot) )
    })




 //generer un paragraphe qui contient coucou
        let monParagraphe = document.createElement("p")
            monParagraphe.textContent = "coucou"
        let body = document.querySelector('body')
            body.appendChild(monParagraphe)

        console.log(monParagraphe)

    //j'ai une chaine de caracteres qui contient une phrase,
        // je veux un tableau des mots
 let unePhrase = "le doux dos dodu du dindon farci se dandinait doucement"

    let tableauMots = unePhrase.split(" ")
    console.log(tableauMots);
//boucle for
    for(let i = 0; i<tableauMots.length; i++){

        let unNouveauParagraphe = document.createElement('p')
        unNouveauParagraphe.textContent = tableauMots[i]

        document.querySelector('body').appendChild(unNouveauParagraphe)
    }

  //boucle forEach



    let motInterdit = "dindon";
    //tout mot interdit doit etre remplacé par le mot 'poulet'


        tableauMots.forEach((mot)=>{
            let unNouveauParagraphe = document.createElement('p')

            unNouveauParagraphe.textContent = mot

            if(mot == motInterdit){
                unNouveauParagraphe.textContent = "poulet"
            }


            document.querySelector('body').appendChild(unNouveauParagraphe)

        })


    // pour chaque mot de ce tableau, generer un nouveau paragraphe
    // inserer le texte du mot en question dans le paragraphe
    // et ajouter ce paragraphe au body

 // generer un paragraphe html par mot

 let ageDeMichel = 19
 let ageDeClaudine = 21

 // si ils ont le meme age, on va leur dire qu'ils ont le meme age

    if(ageDeMichel== ageDeClaudine){
        console.log("vous avez le meme age !")
    }else{
        console.log("vous n'avez PAS le meme age")
    }
    if(ageDeMichel >= 18){

        console.log("tu es majeur")
    }else{
        console.log("tu es MINEUR")
    }

