// Hackathon


// Creating a table
var table = document.createElement("table")
table.setAttribute("class", "table table-dark rounded  text-center col-lg- col-md-6 col-sm-6 ")
document.body.append(table)

//Creating Thead
var thead = document.createElement("thead")

// Creating tr
var tr = document.createElement("tr")

// Creating th
var th1 = createthtd("th", "Name")
th1.setAttribute("scope", "col")
var th2 = createthtd("th", "Countries")
th2.setAttribute("scope", "col")
var th3 = createthtd("th", "Probabilities")
th3.setAttribute

// Adding innerHTML elements 
th1.innerHTML = "Name"
th2.innerHTML = "countries"
th3.innerHTML = "probability"

//Appending the elements
tr.append(th1, th2, th3)
thead.append(tr)
table.append(thead)
document.body.append(table)



// Function for creating the repeated element
function createthtd(elementname, val) {
  var ele = document.createElement(elementname);
  ele.innerHTML = val;
  return ele;

}
// Creating a Tbody outside of EventListner function
var tbody = document.createElement("tbody")

// Creating an EventListner for the button
document.getElementById("button-addon2").addEventListener("click", foo)

// Async function ( function for Event listner) 
async function foo() {
  var inp_value = document.getElementById("input").value

  // Using try catch For Error handling
  try {
    // Using fetch function to get the Api data

    var data = await fetch(`https://api.nationalize.io/?name=${inp_value}`)
    if (data.ok === false) {
      throw "Page not found"
    }
    var data1 = await data.json() // Parsing an Json data
    tbody.innerHTML = ""
    console.log(data1);
  } catch (error) {
    console.log(error);
    console.log("Page 404 Error");
  }
  var arr_country = []; // Variable to get an contry data
  var arr_probability = []; //Variable to get an probablity data
  for (i = 0; i < data1.country.length; i++) {
    arr_country.push(data1.country[i].country_id);     // getting an country data into an array 
    arr_probability.push(data1.country[i].probability) // getting an probablity data into an array

    //   console.log(Math.max(arr_probability));  If needed here we can get the majority result
  }
  var tr1 = document.createElement("tr")  // creating an tr1

  var td1 = document.createElement("td")   // creating an td1
  var Name = data1.name      // Here we getting an name data
  td1.setAttribute("rowspan", data1.country.length + 1)
  td1.innerHTML = `${Name}`
  tr1.append(td1)
  tbody.append(tr1)
  for (j = 0; j < arr_country.length; j++) {

    var tr2 = document.createElement("tr")       // creating an tr2
    var td2 = document.createElement("td")        // creating an td2
    td2.innerHTML = `${arr_country[j]}`
    var td3 = document.createElement("td")       //  creating an td3
    td3.innerHTML = `${arr_probability[j]}`




    tr2.append(td2, td3)
    tbody.append(tr2)


  }
  table.append(tbody)         // Finally appending it into Tbody 
}

