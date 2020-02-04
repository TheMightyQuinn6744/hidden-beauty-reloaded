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


window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop < 100) {
        document.getElementById("navbar").style.top = "0";
        //hides content of scrolling navbar 
        document.getElementById("navtext1").style.display = "none";
        document.getElementById("navtext2").style.display = "none";
        document.getElementById("navtext3").style.display = "none";
        //applies transparent background to relative navbar
        document.getElementById("navbar").style.backgroundColor = "transparent";
        //display contents of relative navbar
        document.getElementById("navtextA").style.display = "";
        document.getElementById("navtextB").style.display = "";
        document.getElementById("navtextC").style.display = "";
        //hides hidden beauty logo image contained in scrolling navbar
        document.getElementById("navlogo").style.display="none";

    } else {
        //hides scrolling navbar until user scrolls 100px
        document.getElementById("navbar").style.top = "-50px;";
        //reveals hidden beauty logo to scrolling navbar beyond 100px
        document.getElementById("navlogo").style.display="";
        //reveals contents of scrolling navbar beyond 100px
        document.getElementById("navtext1").style.display = "";
        document.getElementById("navtext2").style.display = "";
        document.getElementById("navtext3").style.display = "";
        //applies white background color to scrolling navbar beyond 100px
        document.getElementById("navbar").style.backgroundColor = "white";
        //hides content from relative navbar
        document.getElementById("navtextA").style.display = "none";
        document.getElementById("navtextB").style.display = "none";
        document.getElementById("navtextC").style.display = "none";

        //reveals the hidden beauty logo for a scrolling navbar
        document.getElementById("navlogo").style.display = "block";
        //
        document.getElementById("navscroll").style.display = "";

    }
};

