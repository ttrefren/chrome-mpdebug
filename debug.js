const storageKey = 'chrome-mpdebug-enabled';

chrome.storage.sync.get(storageKey, function(val) {
    if (val[storageKey]) { init(); }
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
    if (storageKey in changes) {
        const state = changes[storageKey].newValue ? 'enabled' : 'disabled';
        console.log('Mixpanel debug mode has been', state);
    }
});

function init() {
    console.log('CHROME-MPDEBUG: initiated');
    var script = document.createElement('script');
    script.innerHTML = 'window.mixpanel = window.mixpanel || []; window.mixpanel.push(["set_config", { debug: true }]);';
    (document.head || document.documentElement).appendChild(script);
}
