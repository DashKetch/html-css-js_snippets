        function openDevResources() {
            const password = prompt("Enter the password to access the Dev Resources:");
            if (password === "Dash_Ketch") {
                window.location.href = "https://drive.google.com/drive/folders/1mNURkXHBowitwKD3A56LWZKoGFdMyEud?usp=sharing";
            } else {
                alert("Incorrect password!");
            }
        }

        function openMinecraftServerResources() {
            const password = prompt("Enter the password to access the Minecraft Server Resources:");
            if (password === "Minecraft") {
                window.location.href = "https://drive.google.com/drive/folders/1CqY7dvIpi0ADGO8PKuVFaVUAOuglViss?usp=sharing";
            } else {
                alert("Incorrect password!");
            }
        }

        function mailToNate() {
                window.location.href = "mailto:natedaskew@gmail.com";
        }

        function openGitHubRepo() {
                window.location.href = "https://github.com/DashKetch/html-css-js_snippets/tree/HTML";
        }

        function testHTML() {
                const password = prompt("Enter the password to access the Dev's Testing Page:");
                if (password && password.trim() === "DashKetch") {
                    window.location.href = "https://dashketchcoding.w3spaces-preview.com/test-files/test-page.html";
                } else {
                    alert("Incorrect Password!");
                }
        }


        async function fetchNews() {
            const apiKey = "[API KEY HERE]";
            const url = `https://api.thenewsapi.com/v1/news/top?api_token=${apiKey}&locale=us&limit=5`;

            try {
                const response = await fetch(url);
                const contentType = response.headers.get("content-type");
                if (!contentType || !contentType.includes("application/json")) {
                    throw new Error("Invalid response format. Check API key or endpoint.");
                }
                const data = await response.json();
                const newsList = document.getElementById("news-list");
                newsList.innerHTML = "";
                data.data.forEach(article => {
                    const li = document.createElement("li");
                    li.innerHTML = `<a href="${article.url}" target="_blank">${article.title}</a>`;
                    newsList.appendChild(li);
                });
            } catch (error) {
                const newsList = document.getElementById("news-list");
                newsList.innerHTML = `<li>Error loading news: ${error.message}</li>`;
                console.error("Error fetching news:", error);
            }
        }
        fetchNews();

        function updateWorldClocks() {
            const cities = [
                { "name": "Pago Pago", "timezone": "Pacific/Pago_Pago" },
                { "name": "Honolulu", "timezone": "Pacific/Honolulu" },
                { "name": "Anchorage", "timezone": "America/Anchorage" },
                { "name": "Los Angeles", "timezone": "America/Los_Angeles" },
                { "name": "Phoenix", "timezone": "America/Phoenix" },
                { "name": "Mexico City", "timezone": "America/Mexico_City" },
                { "name": "New York City", "timezone": "America/New_York" },
                { "name": "São Paulo", "timezone": "America/Sao_Paulo" },
                { "name": "Buenos Aires", "timezone": "America/Argentina/Buenos_Aires" },
                { "name": "Praia", "timezone": "Atlantic/Cape_Verde" },
                { "name": "London", "timezone": "Europe/London" },
                { "name": "Lagos", "timezone": "Africa/Lagos" },
                { "name": "Cairo", "timezone": "Africa/Cairo" },
                { "name": "Moscow", "timezone": "Europe/Moscow" },
                { "name": "Dubai", "timezone": "Asia/Dubai" },
                { "name": "Karachi", "timezone": "Asia/Karachi" },
                { "name": "Dhaka", "timezone": "Asia/Dhaka" },
                { "name": "Bangkok", "timezone": "Asia/Bangkok" },
                { "name": "Beijing", "timezone": "Asia/Shanghai" },
                { "name": "Tokyo", "timezone": "Asia/Tokyo" },
                { "name": "Melbourne/PWR Office", "timezone": "Australia/Melbourne" },
                { "name": "Port Moresby", "timezone": "Pacific/Port_Moresby" },
                { "name": "Auckland", "timezone": "Pacific/Auckland" },
                { "name": "Apia", "timezone": "Pacific/Apia" },
                { "name": "Kiritimati", "timezone": "Pacific/Kiritimati" }
            ];

            const clocksContainer = document.getElementById("world-clocks");
            if (!clocksContainer) return;

            clocksContainer.innerHTML = "";
            cities.forEach(city => {
                try {
                    const now = new Date().toLocaleTimeString("en-US", {
                        timeZone: city.timezone,
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit"
                    });
                    const clockDiv = document.createElement("div");
                    clockDiv.innerHTML = `<strong>${city.name}:</strong> ${now}`;
                    clocksContainer.appendChild(clockDiv);
                } catch (error) {
                    console.error(`Failed to display time for ${city.name}:`, error);
                }
            });
        }
        setInterval(updateWorldClocks, 1000);
        updateWorldClocks();

        function printNotes() {
    const notesContent = document.getElementById('notes').value;
    const printWindow = window.open('', '', 'width=600,height=400');
    printWindow.document.write(`
        <html>
        <head>
            <title>Print Notes</title>
        </head>
        <body>
            <pre style="font-family: Arial, sans-serif;">${notesContent}</pre>
            <script>
                window.onload = function() {
                    window.print();
                    window.onafterprint = function() {
                        window.close();
                    };
                };
            <\/script>
        </body>
        </html>
    `);
    printWindow.document.close();
}
