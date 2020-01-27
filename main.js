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
//function that clicks styleButton by default upon page loading
window.onload=function() {
    document.getElementById("styleButton").click();
};
//When the user scrolls down 20px from the top of the document, slide down the navbar 
//When the user scrolls to the top of the page, slide up the navbar (50px out of the top of the view)
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop < 100) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navtext1").style.display = "none";
        document.getElementById("navtext2").style.display = "none";
        document.getElementById("navtext3").style.display = "none";
        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("navtextA").style.display = "";
        document.getElementById("navtextB").style.display = "";
        document.getElementById("navtextC").style.display = "";
        document.getElementById("navlogo").style.display="none";
        
    } else {
        document.getElementById("navbar").style.top = "-100px;";
        document.getElementById("navlogo").style.display="";
        document.getElementById("navtext1").style.display = "";
        document.getElementById("navtext2").style.display = "";
        document.getElementById("navtext3").style.display = "";
        document.getElementById("navbar").style.backgroundColor = "white";
        document.getElementById("navtextA").style.display = "none";
        document.getElementById("navtextB").style.display = "none";
        document.getElementById("navtextC").style.display = "none";

    }
};

