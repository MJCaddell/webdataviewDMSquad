/**
 * Created by Matt Nick Sam and Rohan
 */

 //Initialization
 vips = new VipsAPI(); //our API
 globalBlocks = vips.getVisualBlockList(); //the list that contains your data, each item is a data element

 alert("HARD CODED DEMO, ONLY WORKS ON https://www.youtube.com/watch?v=yRYFKcMa_Ek (Maneater by Hall and Oates)");
 console.log("Activated Video Info Selection!");

 ids = [];

 /*
  * Youtube Key Code
  * 1-3-1 = Video Name
  *
  */

 //Suggested Videos: starting "1-6-1"; ending "1-27-1";
 //for (var i = 21; i <= 40; i++) {
 	ids.push("1-"+3+"-1");
 //}
 //starting "1-6-2"; ending "1-27-2";
 //for (var i = 6; i <= 27; i++) {
 //	ids.push("1-"+i+"-2");
 //}

 //Visualize the result
 for (var i = 0; i < globalBlocks.length; i++) {
 	for (var j = 0; j < ids.length; j++) {
 		if (globalBlocks[i]['-vips-id']===ids[j])
 			globalBlocks[i]['-att-box'].style.border = "4px solid blue";
 	}
 }
 //confirm("The following boxes should contain all the crucial information about this video, if anything looks incorrect please click on it!");
