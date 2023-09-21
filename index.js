function sauver(){
   let nom = document.getElementById("name").value
   let email = document.getElementById("email").value
   let age = document.getElementById("age").value
   let type = document.formulaire.type.value

   if(nom ==""){
    alert("Vous devez entrer votre nom")
   }
   if(email ==""){
    alert("Vous devez entrer votre email")
   }
   if(age ==""){
    alert("Vous devez entrer votre age")
   }
   if(type ==""){
    alert("Vous devez entrer votre type")
   }else{
    alert("Les informations sont sauvegarder")
   }

}