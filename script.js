//based on a pen by @robinselmer
var url = "https://api.minetools.eu/ping/cometfreebuild.ddns.net/25565";
 
$.getJSON(url, function(r) {
    //data is the JSON string
 if(r.error){
    $('#rest').html('Comet Freebuild is Offline');
   return false;
 } 
var pl = '';
 if(r.players.sample.length > 0 )
  $('#rest').html(r.description.replace(/§(.+?)/gi, '')+'<br><br><b>Players Online:</b> '+r.players.online+pl);
 $('#favicon').attr('src', r.favicon);
    
});

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}
