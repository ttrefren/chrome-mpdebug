const storageKey = 'chrome-mpdebug-enabled';
let enabled = true;

chrome.storage.sync.get(storageKey, function(val) {
    enabled = val[storageKey];
    updateIcon();
});

chrome.browserAction.onClicked.addListener(function(tab) {
    enabled = !enabled;
    chrome.storage.sync.set({[storageKey]: enabled}, function() {
        updateIcon();
    });
});

function updateIcon() {
    chrome.browserAction.setBadgeText({text: enabled ? '✓' : 'X'});
}
