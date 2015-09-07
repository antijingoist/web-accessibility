// Accessablize js.

function symbolPop(theElement) {
//Will apply a span style to punctuation and capital letters that you can use to make more obvious
   var largeString = "";

   largeString = $(theElement).html().replace(/(?:((\<\ba href\b.*\"\>.*\<\/\a\>)))|([A-Z]{1})|!|\.|\,|\?|\$\s?(\d+[\.\s,\dk]+)|(\d+[\.\s,\dk]+)\$s/g, '<span class="symbolPop">$&</span>');
   $(theElement).html(largeString);
}