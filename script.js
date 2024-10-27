const apiKey = "f1rCSIgq931mbp3Q2lYt86soc1NkecT33u5Muvgn"; // Your API key

function fetchHoroscope() {
    const sign = document.getElementById("signs").value;
    if (!sign) {
        document.getElementById("horoscopeOutput").innerHTML = "<p>Please select a sign.</p>";
        return;
    }

    const requestData = {
        year: 1976, // Example year
        month: 6,   // Example month
        date: 10,   // Example daysss
        hours: 11,  // Example hours
        minutes: 10, // Example minutes
        seconds: 0, // Example seconds
        latitude: 18.933, // Example latitude
        longitude: 72.8166, // Example longitude
        timezone: 5.5, // Example timezone
        config: {
            observation_point: "topocentric",
            ayanamsha: "lahiri"
        }
    };

    fetch("https://cors.bridged.cc/https://json.apiastro.com/planets", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": apiKey
        },
        body: JSON.stringify(requestData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        displayHoroscope(data);
    })
    .catch(error => {
        document.getElementById("horoscopeOutput").innerHTML = `<p>Error: ${error.message}</p>`;
    });
}

// Function to display the horoscope data
function displayHoroscope(data) {
    document.getElementById("horoscopeOutput").innerHTML = JSON.stringify(data, null, 2); // For testing
}





