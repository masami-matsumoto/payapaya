$(function(){
    $(window).scroll(function () {
    $('.story-container div').each(function () {
    boxNum = $(this).attr("class"),
    scrollTop = $(window).scrollTop();
    areaTop = $(this).offset().top;
    if (scrollTop > areaTop) {
    $('.images-container .' + boxNum).addClass('active');
    } else{
    $('.images-container .' + boxNum).removeClass('active');
    }
    });
    });

    // Search (header).
		var $search = $('#search'),
        $search_input = $search.find('input');

    $body
        .on('click', '[href="#search"]', function(event) {

            event.preventDefault();

            // Not visible?
                if (!$search.hasClass('visible')) {

                    // Reset form.
                        $search[0].reset();

                    // Show.
                        $search.addClass('visible');

                    // Focus input.
                        $search_input.focus();

                }

        });

    $search_input
        .on('keydown', function(event) {

            if (event.keyCode == 27)
                $search_input.blur();

        })
        .on('blur', function() {
            window.setTimeout(function() {
                $search.removeClass('visible');
            }, 100);
        });
        
    });