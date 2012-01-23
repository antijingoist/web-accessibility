// symbolpop.js
// This is a hack, but needed it to be done quickly
// as a proof of concept.
// Send me a round-tuit and i'll fix it

// The whole point is to subtly make symbols stand out
// to the reader to increase readability.
// requries, in order: jquery, jquery.highlight-3.js
// and below just tells it what to highlight.
// call symbolPop(); from your page to highlight everything.
function symbolPop() {
	$('body').highlight('.');
   $('body').highlight('\”');
   $('body').highlight('\"');
   $('body').highlight('\“');
	$('body').highlight(',');
	$('body').highlight(':');
	$('body').highlight(';');
	$('body').highlight('(');
	$('body').highlight(')');
	$('body').highlight('-');
	$('body').highlight('[');
	$('body').highlight(']');
	$('body').highlight('!');
	$('body').highlight('@');
	$('body').highlight('$');
	$('body').highlight('#');
	$('body').highlight('%');
	$('body').highlight('{');
	$('body').highlight('}');
	$('body').highlight('<');
	$('body').highlight('>');
	$('body').highlight('*');
	$('body').highlight('^');
	$('body').highlight('~');
	$('body').highlight('?');
	$('body').highlight('/');
	$('body').highlight('+');
	$('body').highlight('=');
	$('body').highlight('|');
	$('body').highlight('\\');
}