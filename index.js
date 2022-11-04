const axios = require("axios")
const { JSDOM } = require("jsdom")
const fs = require("fs");
async function scrape() {
    const page = await axios.get("https://en.wikipedia.org/wiki/Sugar_Ray_Robinson")
    const html = page.data
    const jsdom = new JSDOM(html);


     ///tbody>tr>td>select world champions

     //DOM structure 

    const tableSection = jsdom.window.document.querySelector(".wikitable")
    //ul list in the div 
    const tables = tableSection.querySelectorAll("tbody");
    console.log(tables)
    //console.log(tables.length)
     const opponents = []

     console.log(tables.length)



    //console.log(tables.values())
    // for (let i =0; i<tables.length;i++){
    //   let item = tables[i]
    //   console.log(item)
    // }

     const rows = tables.values()
     console.log(rows)
     for (data in tables){
      console.log(data)
     }


    // //this returns undefined 
    // console.log(table[10])
    // for (var value of tables.values()){

    //   opponents.push(value)
    //   console.log(value)
    // }
    // console.log(opponents)


    // for (index =0; index<tables.length; index++){
    //   const table = tables[index]; 
    //   const tableItems = table.querySelectorAll('td')
    //   console.log(tableItems)
    // }
  

    

   
     //console.log(table.length)
     //console.log(table)
     //console.log(rows)




    

//? possible that it is nothing
//it is called optional chaining 

     //fs.writeFileSync("SugarRayOpponents.json", JSON.stringify(opponents)); 

    }

    

scrape();  
