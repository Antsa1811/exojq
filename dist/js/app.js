$(document).ready(function(){var e=$("#textFooter"),n=($("#pictJeu"),$("#string1"));$("#btnActive").click(function(t){t.preventDefault(),e.addClass("blue-light")}),$("#btnP").click(function(t){t.preventDefault(),console.log(n.attr("id"))}),$("#verif").click(function(t){t.preventDefault();var e=$(".lead:last").text();console.log(e)})});