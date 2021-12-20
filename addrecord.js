if(!localStorage.getItem("persons"))
   {
     localStorage.setItem("persons",JSON.stringify([]))
   }



           document.getElementById("addbtn").onclick=function(){

             let fname=document.getElementById("fname").value;
             let lname=document.getElementById("lname").value;
             let phno=document.getElementById("phno").value;


             person={"first_name":fname,"last_name":lname,"phno":phno}
             let persons=JSON.parse(localStorage.getItem("persons"))
             persons.push(person)
             localStorage.setItem("persons",JSON.stringify(persons))

             let h1=document.getElementById("result");
             h1.innerHTML="Record is SuccessFully inserted.";
             h1.style.color='green';
             h1.style.textAlign='center';

             document.getElementById("fname").value="";
             document.getElementById("lname").value="";
             document.getElementById("phno").value="";

           }
