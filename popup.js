function updateFeeTable(fees) {
  const feeTable = document.getElementById("feeTable");
  feeTable.innerHTML = `
    <tr>
      <td>Fastest</td>
      <td>${fees.fastestFee}</td>
    </tr>
    <tr>
      <td>Half Hour</td>
      <td>${fees.halfHourFee}</td>
    </tr>
    <tr>
      <td>Hour</td>
      <td>${fees.hourFee}</td>
    </tr>
    <tr>
      <td>Economy</td>
      <td>${fees.economyFee}</td>
    </tr>
    <tr>
      <td>Minimum</td>
      <td>${fees.minimumFee}</td>
    </tr>
  `;
}

function fetchGasFees() {
  fetch("https://mempool.space/api/v1/fees/recommended")
    .then((response) => response.json())
    .then((fees) => {
      updateFeeTable(fees);
    })
    .catch((error) => {
      console.error("Error fetching gas fees:", error);
    });
}

document.addEventListener("DOMContentLoaded", fetchGasFees);
