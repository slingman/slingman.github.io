$(function(){
  $("[data-toggle=popover]").popover({
    html : true,
    content: function() {
      var content = $(this).attr("data-popover-content");
      return $(content).children(".popover-body").html();
    },
    title: function() {
      var title = $(this).attr("data-popover-content");
      return $(title).children(".popover-heading").html();
    }
  });
});

$(document).on('click', function(e) {
  $('[data-toggle="popover"]').each(function() {
    //the 'is' for buttons that trigger popups
    //the 'has' for icons within a button that triggers a popup
    if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
      $(this).popover('hide').data('bs.popover').inState.click = false // fix for BS 3.3.6
    }
  });
});
