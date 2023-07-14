var menuItems=document.getElementById("menuItems");
menuItems.style.maxHeight="0px";
function menutoggle(){
    if(menuItems.style.maxHeight=="0px")
    {
        menuItems.style.maxHeight="200px";
    }
    else
    {
        menuItems.style.maxHeight="0px";
    }
}
function verifForm()
{
   if(document.f1.nm.value=="")
     {document.getElementById("erreur1").innerHTML="Veuillez saisir votre nom!";
	  document.getElementById("erreur1").style.color="red";
      document.f1.nm.focus();
      return false;
     }
     else document.getElementById("erreur1").innerHTML="";
   
   if(document.f1.pr.value=="")
     {document.getElementById("erreur2").innerHTML="Veuillez saisir votre prénom!";
	  document.getElementById("erreur2").style.color="red";	 
	  document.f1.pr.border="1px red solid";
      document.f1.pr.focus();
      return false;
     }
	 else document.getElementById("erreur2").innerHTML="";
   
   if(document.f1.rsd.value=="")
     {document.getElementById("erreur3").innerHTML="Veuillez saisir votre résidence!";
	  document.getElementById("erreur3").style.color="red";
      document.f1.rsd.focus();
      return false;
     }
	 else document.getElementById("erreur3").innerHTML="";
   
   if(document.f1.crr.value=="")
     {document.getElementById("erreur4").innerHTML="Veuillez saisir votre mail!";
	  document.getElementById("erreur4").style.color="red";	 
      document.f1.crr.focus();
      return false;
     }
	 else { var m=document.f1.crr.value;//pour simplifier le code de test de validité de l'email
     if((m.indexOf('@')<1)||(m.indexOf('.')<3)||(m.length<6))
     {document.getElementById("erreur4").innerHTML="Mail invalide!";
	  document.getElementById("erreur4").style.color="red";
      document.f1.crr.value="";
      document.f1.crr.focus();
      return false;
     }
	 else document.getElementById("erreur4").innerHTML="";
	 }
   
   if(document.f1.ag.value=="")
     {document.getElementById("erreur5").innerHTML="Veuillez saisir votre age!";
	  document.getElementById("erreur5").style.color="red";
      document.f1.ag.focus();
      return false;
     }
   else if(isNaN(document.f1.ag.value) || (document.f1.ag.value<10) || (document.f1.ag.value>100) )
     {document.getElementById("erreur5").innerHTML="Veuillez saisir un age valide!";
	  document.getElementById("erreur5").style.color="red";	 
      document.f1.ag.value="";
      document.f1.ag.focus();
      return false;
     }
	else document.getElementById("erreur5").innerHTML=""; 
}