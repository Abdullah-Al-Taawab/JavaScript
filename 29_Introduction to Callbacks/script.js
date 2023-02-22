//callbacks
function loadScript(src, callback)
  {
    var script= document.createElement("script");
    script.src=src;
    script.onload= function(){callback()};
    document.body.appendChild(script);
    
  }
const hello=()=>
  {
    alert("Hello done");
  }
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", hello);