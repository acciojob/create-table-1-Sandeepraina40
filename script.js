function insert_Row() {
    //Write your code here
	let table = document.getElementById("sampleTable");
	let new = table.insertRow(0);
	let cell1 = new.insertCell(0);
	let cell2 = new.insertCell(1);
	cell1.innerHTML = "New Cell1";
	cell2.innerHTML = "New Cell2";

  
}
