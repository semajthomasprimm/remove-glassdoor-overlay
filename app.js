// removes overlay
document.getElementById("HardsellOverlay").remove();

// enables scrolling for body
const bodyStyle = document.getElementsByTagName("body")[0].style;
bodyStyle.removeProperty("height");
bodyStyle.removeProperty("overflow");
bodyStyle.removeProperty("position");