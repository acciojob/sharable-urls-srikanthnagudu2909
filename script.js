// your code here
function details(){
         const name=document.getElementById("name").value
        const year=document.getElementById("year").value
        const heading=document.getElementById("heading1")
         console.log(name,year)
          heading.innerHTML=`https://localhost:8080/?name=${name}&year${year}`
        }