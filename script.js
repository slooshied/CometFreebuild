//based on a pen by @robinselmer
var url = "https://api.minetools.eu/ping/cometfreebuild.ddns.net/25565";

$.getJSON(url, function(r) {
    //data is the JSON string
 if(r.error){
    $('#rest').html('<img src="https://icon-library.com/images/failed-icon/failed-icon-7.jpg" style="width:16px;height:16px;"></img><b>⠀Comet  Freebuild is <u>OFFLINE</u></b>');
   return false;
 } 
var pl = '';
 if(r.players.sample.length > 0 )
  document.getElementById("rest").style.fontFamily = "Open Sans Condensed";
  $('#rest').html('<img src="https://i.imgur.com/49vJcdL.png" style="width:16px;height:16px;"></img><b>⠀Comet Freebuild is <u>ONLINE</u></b><br></br><b>Players Online: </b>'+r.players.online+pl+' <b>/</b> 50<br>'+'<b>MOTD: </b>'+r.description.replace(/§(.+?)/gi, '')+'<br>');
 $('#favicon').attr('src', r.favicon);
    
});

function myFunction() { 
alert("Copied IP address: cometfreebuild.ddns.net");
}

new ClipboardJS('.btn');
