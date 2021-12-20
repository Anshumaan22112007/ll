let all_persons=JSON.parse(localStorage.getItem("persons"));

     let table=document.getElementById("result");

     for (let i = 0; i < all_persons.length; i++)
     {
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");

        td1.innerHTML=all_persons[i].first_name;
        td2.innerHTML=all_persons[i].last_name;
        td3.innerHTML=all_persons[i].phno;

        tr.append(td1);tr.append(td2);tr.append(td3);
        table.append(tr);

     }


