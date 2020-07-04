/* Includes header and footer*/

$(document).ready(function() {
    console.log(1);
    $(function() {
        var includes = $('[data-include]');
        jQuery.each(includes, function() {
            var file = '../html/' + $(this).data('include') + '.html';
            $(this).load(file);
        });
    });
});
// console.log(2);

let checkFile = document.getElementById('active');
