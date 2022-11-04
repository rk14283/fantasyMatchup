const axios = require("axios")
const { JSDOM } = require("jsdom")
const fs = require("fs");
async function scrape() {
    const page = await axios.get("https://en.wikipedia.org/wiki/Sugar_Ray_Robinson")
    const html = page.data
    const jsdom = new JSDOM(html);

     ///tbody>tr>td>select world champions

    const tableSection = jsdom.window.document.querySelector(".wikitable")
    //ul list in the div 
    const table = tableSection.querySelectorAll("tbody");
    //const rows = tableSection.querySelectorAll('tr')
    //console.log(rows)
    //console.log(table.length)
    const opponents = []

          for (rows of table){
            console.log(rows)
            const tableItems = rows.querySelectorAll('tr')
             console.log(tableItems)
            for (data of tableItems){
                const name = tableItems.querySelector("td")
                console.log(name)
            }
          }
    

   
     //console.log(table.length)
     //console.log(table)
     //console.log(rows)




    

//? possible that it is nothing
//it is called optional chaining 

     //fs.writeFileSync("SugarRayOpponents.json", JSON.stringify(opponents)); 

    }

    

scrape();  
