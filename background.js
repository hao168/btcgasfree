function updateBadge(fastestFee) {
  chrome.browserAction.setBadgeText({ text: String(fastestFee) });
  chrome.browserAction.setBadgeBackgroundColor({ color: "#4CAF50" });
}

function fetchGasFees() {
  fetch("https://mempool.space/api/v1/fees/recommended")
    .then((response) => response.json())
    .then((fees) => {
      updateBadge(fees.fastestFee);
    })
    .catch((error) => {
      console.error("Error fetching gas fees:", error);
    });
}

// Fetch gas fees when the extension is first installed or started
fetchGasFees();

// Fetch gas fees every 5 minutes (300,000 milliseconds)
const updateInterval = 60000;
setInterval(fetchGasFees, updateInterval);
