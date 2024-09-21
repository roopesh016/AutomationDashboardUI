fetch("http://localhost:8080/fetchTotalNumberOfTestCases/10/81").then((data)=>
	{
		// console.log(data); //json format
		return data.json(); //converted to object
	}).then((objectData)=>{
        console.log(objectData[0].automatedTestCases);
        let tableData="";
        objectData.map((values)=>{
        	tableData+=`<tr>
      <td>${values.totalNumberOfTestCases}</td>
      <td>${values.automatedTestCases}</td>
      <td>${values.automationPercentage}</td>
    </tr>`;
        });
        // document.getElementById("gat_body").
        // innerHTML=tableData;
   const tableBody = document.getElementById("gat_body");
    if (tableBody) {
      tableBody.innerHTML = tableData;
    } else {
      console.error("Table body element not found");
    }
  }).catch((error) => {
console.error(error);
});