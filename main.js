$( document ).ready(function() {
$('#btn').on("click", function() {
    if($('#input').val()==""){
        alert("pleas enter cat")
    }
    else{
    var val = $('#input').val()
    $('#main').empty();
    fetch(val);
    }
})
fetch('elonmusk')
function fetch(cat){
     $('#loading-image').show(); 
$.ajax({
    url : "https://newsapi.org/v2/everything?q="+cat+"&apiKey=4a6e5a4ca2004e46a34adf20f70b622b",
    type : "GET",
    success : function(data){
        console.log(data)
$.each(data.articles, function(key, value) {
$('#main').append(' <p id="source">'+ value.source.name+'</p><div class="cont"><h6 class="title">"'+ value.title +'"</h6><img class="img" src="'+ value.urlToImage +'"" alt=""><p class="content">"'+ value.content +'"</p> <p class="btn"><a class="atag" target=”_blank” href="'+ value.url +'">Read...</a></p><br><div class="dummy"></div></div>');
console.log(value.urlToImage);
$('.atag').html('Read...')
});
    },
  complete: function() {
     $('#loading-image').hide();
    }
})
}
});
