function insert_Row() {
  // get the table
  let table = document.getElementById("sampleTable");
  
  // insert a new row at the top (index 0)
  let newRow = table.insertRow(0);
  
  // insert two new cells into that row
  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);

  // set the text inside the cells
  cell1.innerHTML = "New Cell1";
  cell2.innerHTML = "New Cell2";
}
