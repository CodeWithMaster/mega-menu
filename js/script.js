$(document).ready(function () {
  $(".megaMenu > ul > li > ul")
    .filter(function () {
      return !$(this).find("ul").length;
    })
    .addClass("smallMenu");
});
// @CodeWithMaster💙
