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

function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}
