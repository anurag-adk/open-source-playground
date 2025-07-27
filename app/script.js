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
document.getElementById("search-btn").addEventListener("click", function () {
  const searchTerm = document.getElementById("search-input").value;
  // This function needs to be implemented to search through quotes
  console.log("Search functionality not implemented yet");
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
