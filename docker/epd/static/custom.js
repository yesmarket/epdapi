function hideElements(){
   function tryHideElements() {
      var elements = document.querySelectorAll('h4[id^="operations-tag-"]');
      if (elements.length)
      {
         var subdomain = window.location.hostname.split('.')[0].toLowerCase();
         for (var i = 0; i < elements.length; i++) {
            if (elements[i].id.toLowerCase() != `operations-tag-${subdomain}`) {
               var div = elements[i].parentElement;
               div.parentElement.style.display = "none";
               div.style.visibility = "hidden";
            }
         }
         clearInterval(interval);
      }
   }
   var interval = setInterval(tryHideElements, 100);
}
window.onload = hideElements();
