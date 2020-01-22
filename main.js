//assign varibale to button assignments for cut/style & color 
let cutButton = document.getElementById('styleButton');
let colorButton = document.getElementById('colorButton');

//assign variable to table assignments for table1(cut/style) & table2(color)
const cutTable = document.getElementById('table1');
const colorTable = document.getElementById('table2');

//write function for cut/style on click event 
cutButton.onclick = function() {
    cutTable.style.display='';
    colorTable.style.display='none';
};

//write function for color style on click event 
colorButton.onclick = function() {
    colorTable.style.display='';
    cutTable.style.display='none';
    
};

//window load default click for cut/style
window.onload=function() {
    document.getElementById("styleButton").click();
};