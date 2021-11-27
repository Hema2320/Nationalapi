let img=document.createElement("img");
img.src="https://wallpapercave.com/wp/wp7812715.jpg";
img.style.width="1250px"
img.style.height="500px"
document.body.append(img);


let input = document.createElement("input");
input.type = "text";
input.className = "input"
input.placeholder="Enter your Name";
document.body.appendChild(input);

let btn=document.createElement("button");
btn.className="btn"
let dis=document.createTextNode('Get the result');
btn.appendChild(dis);
document.body.appendChild(btn);

let data=document.getElementById("data");
const url=" http://localhost:3000/data1";
btn.addEventListener("click",async function()
{
     try{
         let res= await fetch(url);
         let obj=await res.json();
          console.log();
          obj.forEach(element => {
            
           data.innerHTML=`
           <div> Name: ${element.name}</div>
           <div> Country:${element.country[0].country_id}</div>
           <div> Propability:${element.country[0].probability}</div>`   
                    
          });
    }
    
    
     catch(err)
     {
         document.write("Error");
     }
});

