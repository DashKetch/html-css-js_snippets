        async function fetchNews() {
            const apiKey = //api key here//;
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
