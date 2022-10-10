

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

