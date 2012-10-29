// Accessablize js.
// This is a hack, but needed it to be done quickly.
// Send me a round-tuit and i'll fix it

   			
function symbolPop() {
    var hiliteSymbols = new Array('.',
                                '”',
                                '"',
                                '“',
                                ',',
                                ':',
                                ';',
                                '(',
                                ')',
                                '-',
                                '[',
                                ']',
                                '!',
                                '@',
                                '$',
                                '#',
                                '%',
                                '{',
                                '}',
                                '<',
                                '>',
                                '*',
                                '^',
                                '~',
                                '?',
                                '/',
                                '+',
                                '=',
                                '|',
                                '\\');

    if (!(/facebook/.test(self.location.href))) {
        $('body').css('color', '#13295d !important');

        for (var index in hiliteSymbols) {
            $('body').highlight(hiliteSymbols[index]);
        }
    }
}