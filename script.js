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
  $('#rest').html('<b>Players Online: </b>'+r.players.online+pl+'<br>'+'<b>MOTD: </b>'+r.description.replace(/§(.+?)/gi, '')+'<br>');
 $('#favicon').attr('src', r.favicon);
    
});

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

var clip = new Clipboard('.btn');

clip.on("success", function() {
  document.body.insertAdjacentHTML('beforeend', '<div>that worked.</div>');
});
clip.on("error", function() {
  document.body.insertAdjacentHTML('beforeend', '<div>that didn\'t work.</div>');
});
