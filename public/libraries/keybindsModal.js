function hideKeybinds(){keybindsSiteOverlay=document.getElementById("keybindsSiteOverlay"),keybindsContainer=document.getElementById("keybindsContainer"),keybindsHideAlert=document.getElementById("keybindsHideAlert"),keybindsSiteOverlay.style.opacity=0,keybindsContainer.style.opacity=0,keybindsContainer.style.scale=.98,setTimeout(function(){keybindsSiteOverlay.style.display="none",keybindsContainer.style.display="none"},600),keybindsHideAlert.style.display="inline",keybindsHideAlert.style.bottom="-100px",setTimeout(function(){keybindsHideAlert.style.bottom="15px"},20),setTimeout(function(){keybindsHideAlert.style.bottom="-100px",setTimeout(function(){keybindsHideAlert.style.display="none"},2e3)},7500),hidden=!0}function forceHideKeybinds(){keybindsSiteOverlay=document.getElementById("keybindsSiteOverlay"),keybindsContainer=document.getElementById("keybindsContainer"),keybindsSiteOverlay.style.opacity=0,keybindsContainer.style.opacity=0,keybindsContainer.style.scale=.98,setTimeout(function(){keybindsSiteOverlay.style.display="none",keybindsContainer.style.display="none"},600),hidden=!0}function showKeybinds(){hidden=!1,keybindsSiteOverlay=document.getElementById("keybindsSiteOverlay"),keybindsContainer=document.getElementById("keybindsContainer"),keybindsSiteOverlay.style.display="inline",keybindsContainer.style.display="inline",keybindsSiteOverlay.style.opacity=0,keybindsContainer.style.opacity=0,keybindsContainer.style.scale=.95,setTimeout(function(){keybindsSiteOverlay.style.opacity=.5,keybindsContainer.style.opacity=1,keybindsContainer.style.scale=1},20)}console.log("nebula#~ keybindsModal.js"),hidden=!0,document.onkeydown=function(e){("key"in(e=e||window.event)?"Escape"===e.key||"Esc"===e.key:27===e.keyCode)&&!hidden&&hideKeybinds()};