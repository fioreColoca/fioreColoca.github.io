document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {accordion: false});
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, { inDuration: 800 });
 });


 