// $.widget.bridge('uibutton', $.ui.button);

$(function () {
  $('*[data-href]').click(function () {
    window.location = $(this).data('href');
    return false;
  });
});


$(function () {
  $("#example1").DataTable();
  $('.customdatatable').DataTable({
    "paging": true,
    "lengthChange": false,
    "searching": true,
    "ordering": true,
    "info": true,
    "autoWidth": false,
  });
});

$("#showUpdate").on("click", function () {
  alert("Clique");
});
