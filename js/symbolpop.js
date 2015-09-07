// Accessablize js.

//Will apply a span style to punctuation and capital letters that you can use to make more obvious
function symbolPop(theElement) {
   theElement = theElement || "body";
   var largeString = "";

   largeString = $(theElement).html().replace(/[A-Z]{1}|!|\.|\,|\?|\$\s?(\d+[\.\s,\dk]+)|(\d+[\.\s,\dk]+)\$s/g, '<span class="symbolPop">$&</span>');
   $(theElement).html(largeString);
}