console.log("CHROME-MPDEBUG: running debug.js");
var script = document.createElement("script");
script.innerHTML = 'window.mixpanel = window.mixpanel || []; window.mixpanel.push(["set_config", { debug: true }]);';

(document.head || document.documentElement).appendChild(script);
