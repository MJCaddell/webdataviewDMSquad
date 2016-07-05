/**
 * Created by Matt Nick Sam and Rohan
 */

console.log("Deactivate Video Info Selection!");

if (typeof showBorderForDomSelection != 'function') {
	showBorderForDomSelection = function(){
		event.preventDefault();
	    event.target.style.border = "2px solid #FF0000";
	}
}

if (typeof hideBorderForDomSelection != 'function') {
	hideBorderForDomSelection = function (){
		event.preventDefault();
	    event.target.style.border = "";
	}
}

document.removeEventListener("mouseover", showBorderForDomSelection);
document.removeEventListener("mouseout", hideBorderForDomSelection);
