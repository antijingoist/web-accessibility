// Accessablize js.
// This is a hack, but needed it to be done quickly.
// Send me a round-tuit and i'll fix it
   			
function symbolPop() {
    hiliteSymbols = new Array(".",
                                '\”',
                                '\"',
                                '\“',
                                ",",
                                ":",
                                ";",
                                "(",
                                ")",
                                "-",
                                "[",
                                "]",
                                "!",
                                "@",
                                "$",
                                "#",
                                "%",
                                "{",
                                "}",
                                "<",
                                ">",
                                "*",
                                "^",
                                "~",
                                "?",
                                "/",
                                "+",
                                "=",
                                "|",
                                '\\');
                                
    hiliteSymbols.forEach(function( callback, thisArg ) {
                                    $('#main_content_wrap').highlight(this);
                                    }
                                    );
}