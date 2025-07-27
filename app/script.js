let quotes = [];

// Load quotes from JSON file
async function loadQuotes() {
  try {
    const response = await fetch("./app/quotes.json");
    const data = await response.json();
    quotes = data.quotes;
    displayRandomQuote();
  } catch (error) {
    console.error("Error loading quotes:", error);
  }
}

// Display a random quote
function displayRandomQuote() {
  if (quotes.length > 0) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById("quote-text").textContent = `"${quote.text}"`;
    document.getElementById("quote-author").textContent = `- ${quote.author}`;
  }
}

document
  .getElementById("random-quote-btn")
  .addEventListener("click", displayRandomQuote);

// Search functionality
function performSearch() {
  const searchTerm = document.getElementById("search-input").value
    .trim()
    .toLowerCase();
  const results = quotes.filter(
    (quote) =>
      quote.text.toLowerCase().includes(searchTerm) ||
      quote.author.toLowerCase().includes(searchTerm)
  );

  if (results.length > 0) {
    // Show the first matching result
    const quote = results[0];
    document.getElementById("quote-text").textContent = `"${quote.text}"`;
    document.getElementById("quote-author").textContent = `- ${quote.author}`;
  } else {
    document.getElementById("quote-text").textContent = "No quotes found.";
    document.getElementById("quote-author").textContent = "";
  }
}

document.getElementById("search-btn").addEventListener("click", performSearch);

document.getElementById("search-input").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    performSearch();
  }
});

// Dark mode
document
  .getElementById("dark-mode-toggle")
  .addEventListener("click", function () {
    // This function needs to toggle the 'dark-mode' class on the body element
    console.log("Dark mode toggle not implemented yet");
  });

// Initialize the app
loadQuotes();
