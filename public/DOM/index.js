function myFunction() {
  var x = document.getElementById("table-wrapper").rows[0].cells.length;
  document.getElementById("demo").innerHTML = "Found " + x + " cells in the first tr element.";
}