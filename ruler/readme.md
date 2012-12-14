The reading bar on the website is done with two really small code snippets. Yes, the CSS should be in a different file. Usually.
Include the below javascript in your `<head>`:
 
**javascript:**

    <script type="text/javascript">
    $(document).ready(function(){
   	    		$('body').mousemove(function(event) {
          			$("#ruler").css('top', event.pageY - 30);
          			$("#ruler").css('width', $(window).innerWidth());
                });
    });
    </script>

just after your `<body>` tag, include the following html/inline css (yes, you can break it into a separate file. Probably should).

    <div id="ruler" style="height: 1.4em; background-color: rgba(0,0,0,.1); position: absolute; top=-100px; z-index: -1"></div>

The `z-index` keeps it from hovering over your elements and mucking up where you click. The `top` just sets it so it's above the page, but you can move that any where: its going to move with the mouse after all.