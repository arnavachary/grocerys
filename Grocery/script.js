  let second = 60

function createList() {
    let value = document.getElementById("input").value;
   

    let container = document.createElement("div");
    let section = document.createElement("section")
    let item = document.createElement("p").innerText = value
    container.setAttribute("class", "list")
    let icon1 = document.createElement("i")
    icon1.setAttribute("class", "fa fa-edit")
    icon1.style.marginLeft = "80%"
      let icon2 = document.createElement("i");
    icon2.setAttribute("class", "fa fa-trash");
    icon2.style.marginLeft = "3%"
    section.append(item,icon1,icon2)
    container.append(section);
    document.getElementById("grocery").append(container);
    
    
    

    
  
    
}

function updateTimer() {
  document.getElementById("alert")
  
  
}
setInterval(updateTimer, 3);