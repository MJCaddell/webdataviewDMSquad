/**
 * Created by Matt Nick Sam and Rohan
 */

console.log("Deactivate Video Info Selection!");

vips = new VipsAPI();
globalBlocks = vips.getVisualBlockList();
for (var i = 0; i < globalBlocks.length; i++) {
	globalBlocks[i]['-att-box'].style.border = "";
}
