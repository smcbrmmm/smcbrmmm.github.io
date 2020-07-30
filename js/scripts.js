$(document).ready(function () {
  $("#monday").on("click", function (e) {
    $(".card-monday ").slideToggle("slow")
    $(".card-tuesday,.card-wednesday,.card-thursday,.card-friday").slideUp("slow")
    $(".card-webtech,.card-seminar,.card-english,.card-ip,.card-sa,.card-unix,.card-os").slideUp("slow")
    $('html,body').animate({ scrollTop: $("#page-top").offset().top }, 'slow')
  });



  $("#tuesday").on("click", function (e) {
    $(".card-tuesday").slideToggle("slow");
    $(".card-monday,.card-wednesday,.card-thursday,.card-friday").slideUp("slow");
    $(".card-webtech,.card-seminar,.card-english,.card-ip,.card-sa,.card-unix,.card-os").slideUp("slow")
    $('html,body').animate({ scrollTop: $("#page-top").offset().top }, 'slow')
  });

  $("#wednesday").on("click", function (e) {
    $(".card-wednesday").slideToggle("slow");
    $(".card-monday,.card-tuesday,.card-thursday,.card-friday").slideUp("slow");
    $(".card-webtech,.card-seminar,.card-english,.card-ip,.card-sa,.card-unix,.card-os").slideUp("slow")
    $('html,body').animate({ scrollTop: $("#page-top").offset().top }, 'slow')
  });

  $("#thursday").on("click", function (e) {
    $(".card-thursday").slideToggle("slow");
    $(".card-monday,.card-tuesday,.card-wednesday,.card-friday").slideUp("slow");
    $(".card-webtech,.card-seminar,.card-english,.card-ip,.card-sa,.card-unix,.card-os").slideUp("slow")
    $('html,body').animate({ scrollTop: $("#page-top").offset().top }, 'slow')
  });

  $("#friday").on("click", function (e) {
    $(".card-friday").slideToggle("slow");
    $(".card-monday,.card-tuesday,.card-wednesday,.card-thursday").slideUp("slow");
    $(".card-webtech,.card-seminar,.card-english,.card-ip,.card-sa,.card-unix,.card-os").slideUp("slow")
    $('html,body').animate({ scrollTop: $("#page-top").offset().top }, 'slow')
  });

  $("#study-ip1 , #study-ip2").on("click", function (e) {
    $(".card-ip").slideToggle("slow");
    $(".card-monday,.card-tuesday,.card-wednesday,.card-thursday,.card-friday").slideUp("slow");
    $(".card-webtech,.card-seminar,.card-english,.card-sa,.card-unix,.card-os").slideUp("slow")
    $('html,body').animate({ scrollTop: $("#page-top").offset().top }, 'slow')
  });


  $("#study-seminar").on("click", function (e) {
    $(".card-seminar").slideToggle("slow");
    $(".card-monday,.card-tuesday,.card-wednesday,.card-thursday,.card-friday").slideUp("slow");
    $(".card-webtech,.card-english,.card-ip,.card-sa,.card-unix,.card-os").slideUp("slow")
    $('html,body').animate({ scrollTop: $("#page-top").offset().top }, 'slow')
  });


  $("#study-webtech1,#study-webtech2").on("click", function (e) {
    $(".card-webtech").slideToggle("slow");
    $(".card-monday,.card-tuesday,.card-wednesday,.card-thursday,.card-friday").slideUp("slow");
    $(".card-seminar,.card-english,.card-ip,.card-sa,.card-unix,.card-os").slideUp("slow")
    $('html,body').animate({ scrollTop: $("#page-top").offset().top }, 'slow')
  });

  $("#study-eng1,#study-eng2").on("click", function (e) {
    $(".card-english").slideToggle("slow");
    $(".card-monday,.card-tuesday,.card-wednesday,.card-thursday,.card-friday").slideUp("slow");
    $(".card-webtech,.card-seminar,.card-ip,.card-sa,.card-unix,.card-os").slideUp("slow")
    $('html,body').animate({ scrollTop: $("#page-top").offset().top }, 'slow')
  });

  $("#study-os1,#study-os2").on("click", function (e) {
    $(".card-os").slideToggle("slow");
    $(".card-monday,.card-tuesday,.card-wednesday,.card-thursday,.card-friday").slideUp("slow");
    $(".card-webtech,.card-seminar,.card-english,.card-ip,.card-sa,.card-unix").slideUp("slow")
    $('html,body').animate({ scrollTop: $("#page-top").offset().top }, 'slow')
  });

  $("#study-sa1,#study-sa2").on("click", function (e) {
    $(".card-sa").slideToggle("slow");
    $(".card-monday,.card-tuesday,.card-wednesday,.card-thursday,.card-friday").slideUp("slow");
    $(".card-webtech,.card-seminar,.card-english,.card-ip,.card-unix,.card-os").slideUp("slow");
    $('html,body').animate({ scrollTop: $("#page-top").offset().top }, 'slow')

  });

  $("#study-unix1,#study-unix2").on("click", function (e) {
    $(".card-unix").slideToggle("slow");
    $(".card-monday,.card-tuesday,.card-wednesday,.card-thursday,.card-friday").slideUp("slow");
    $(".card-webtech,.card-seminar,.card-english,.card-ip,.card-sa,.card-os").slideUp("slow")
    $('html,body').animate({ scrollTop: $("#page-top").offset().top }, 'slow')
  });


});