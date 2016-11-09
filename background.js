console.log('init background.js');

const storageKey = 'chrome-mpdebug-enabled';
let enabled = true;

chrome.storage.sync.get(storageKey, function(val) {
    enabled = val[storageKey];
    updateIcon();
    console.log('Got value from storage');
    console.log('Enabled is:', enabled);
});

chrome.browserAction.onClicked.addListener(function(tab) {
    enabled = !enabled;
    chrome.storage.sync.set({[storageKey]: enabled}, function() {
        updateIcon();
        console.log('Set value in storage');
        console.log('Enabled is:', enabled);
    });
});

function updateIcon() {
    chrome.browserAction.setBadgeText({text: enabled ? '✓' : 'X'});
}
