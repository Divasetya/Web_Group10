// init Isotope
var $grid = $('#product-list').isotope({
    layoutMode: 'fitRows',
    fitRows: {
        gutter: 10
    }
});

// bind filter button click
$('#filters').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    $grid.isotope({ filter: filterValue });
});