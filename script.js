//your JS code here. If required.
const para=document.getElementById("status");
const header=document.createElement("h1");
const body=document.getElementsByTagName("body")[0];
header.textContent="Entered Metaverse";
function myfunction(){
	para.textContent="";
	para.appendChild(header);
}

