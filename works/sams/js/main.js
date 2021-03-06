// var el = document.querySelector(".svg");
// var elWrapperClone = el.innerHTML;
// document.getElementById("add").addEventListener("click", function() {
//   el.innerHTML = elWrapperClone;
// });


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

// add to cart //

// $(document).on('click', function(e) {
//   $('[data-toggle="collapse"]').each(function() {
//     //the 'is' for buttons that trigger popups
//     //the 'has' for icons within a button that triggers a popup
//     if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
//       $(this).popover('hide').data('bs.popover').inState.click = false // fix for BS 3.3.6
//     }
//   });
// });

// animate floating label //

$(".form-group input").change(function() {
  if ($(this).val() != "") {
    $(this).addClass('filled');
  } else {
    $(this).removeClass('filled');
  }
})

$(".form-group select").change(function() {
  if ($(this).val() != "") {
    $(this).addClass('filled');
  } else {
    $(this).removeClass('filled');
  }
})

// $('#free-shipping-plus').popover({
//   html: true,
//   trigger: 'manual',
//   container: '#free-shipping-plus',
//   content: function() {
//     var content = $(this).attr("data-popover-content");
//     return $(content).children(".popover-body").html();
//   },
//   title: function() {
//     var title = $(this).attr("data-popover-content");
//     return $(title).children(".popover-heading").html();
//   }
// });


$(document).ready(function(){

  $('.grid_tiles_wrap').each(function() {
    var $addtocart = $(this);

    $(".a2c-click", $addtocart).click(function(e) {
      e.preventDefault();
      $div = $(".a2c-overlay", $addtocart);
      $div.toggle();
      $(".a2c-overlay").not($div).hide();
      return false;
    });

});

  $('html').click(function(){
    $(".a2c-overlay").hide();
  });

});



$(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});


$(function(){
  $('.hide-show').show();
  $('.hide-show span').addClass('show')

  $('.hide-show span').click(function(){
    if( $(this).hasClass('show') ) {
      $(this).text('Hide');
      $('input[name="login[password]"]').attr('type','text');
      $(this).removeClass('show');
    } else {
       $(this).text('Show');
       $('input[name="login[password]"]').attr('type','password');
       $(this).addClass('show');
    }
  });

	$('form button[type="submit"]').on('click', function(){
		$('.hide-show span').text('Show').addClass('show');
		$('.hide-show').parent().find('input[name="login[password]"]').attr('type','password');
	});
});
