function Layout(host)
{
  Corpse.call(this,host);

  this.timeline = document.createElement('c'); this.timeline.id = "timeline"; this.timeline.className = "timeline";

  this.map = new Google_Map();

  this.start = function()
  {
    var sailed = 0;
    var spent  = 0;
    for(id in invoke.vessel.timeline.events){
      var event = invoke.vessel.timeline.events[id];
      if(event.type == "sail"){ sailed += parseFloat(event.vlue);}
      if(event.type == "expense"){ spent += parseFloat(event.vlue);}
    }

    var km = parseInt(sailed * 1.852)

    this.hd.innerHTML = `
    
    <img src='media/interface/logo.svg' id='logo'/>

    <c class='headline'>
      <h1>Hundred Rabbits</h1>
      <p>We have sailed <a id='show_map'>`+(km.toString().substr(0,2)+"'"+km.toString().substr(2,3))+`km</a> making tools and games aboard <a href='https://github.com/hundredrabbits/Pino/blob/master/README.md' target='_blank'>Pino</a>.</p>
    </c>

    <c class="menu">
      <a href="blog.html#About">The Rabbits</a>
      <a href="blog.html#Our+sailboat">SV Pino</a>
      <a href="blog.html">Blog</a>
      <a href="https://hundredrabbits.itch.io" target="_blank">Games</a>
      <a href="https://www.youtube.com/channel/UCzdg4pZb-viC3EdA1zxRl4A" target="_blank">Videos</a>
      <a href="blog.html#Support">Support Us</a>
    </c>

    <c class= "subscribe">
      <p>Never miss an update</p>
      <form action="https://tinyletter.com/hundredrabbits" method="post" target="popupwindow" onsubmit="window.open('https://tinyletter.com/hundredrabbits', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
        <input type="email" value="" name="EMAIL" class="email" placeholder="email@address.com" required>
        <input type="submit" value="Subscribe" name="subscribe" class="button">
      </form>
    </c>  

    `
    document.getElementById("show_map").addEventListener("click", this.show_map);
  
    for(id in invoke.vessel.timeline.events){
      var event = invoke.vessel.timeline.events[id];
      // if(event.type != "video"){ continue; }
      this.timeline.appendChild(event.el)
    }

    this.md.appendChild(this.timeline)

    document.body.appendChild(this.map.el)

    if(window.location.hash == "#map"){
      this.show_map();
    }
  }

  this.show_map = function(e)
  {
    window.location.hash = "#map"
    document.getElementById("hundredrabbits").style.display = "none";
  }

  this.load = function(key)
  {
  }
}

invoke.vessel.seal("corpse","layout");