$(window).on('load', () => {

    function onResize() {
        $('#main-content').height('auto');
        let height = $(window).innerHeight() - $('#navbar').height() - $('#footer').height();
        if ($('#main-content').height() < height) {
            $('#main-content').height(height);
        } else {
            $('#main-content').height('auto');
        }
    }

    $(window).resize(onResize.bind(this));
    onResize();

});
