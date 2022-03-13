const users=document.createElement('input');
users.type="text";
users.placeholder="Enter your name";
document.body.appendChild(users);
const url=`https://api.nationalize.io?name=${users}`

let result=async function()
{
try{
   let res= await fetch(url);
   let obj=await res.json();
    console.log(obj);
    if(users.value==url){
       console.log('correct');
    }
      
     
` <div> Name: ${obj.name}</div>`.innerHTML;
 console.log(`Country:${obj.country[0].country_id}`)
 console.log(`country${obj.country[1].country_id}`)
 console.log( `Propability:${obj.country[0].probability} ` ) 
              
      
}
catch(err){
   console.log(err)
}
}
result();
