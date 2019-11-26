import { useQuote } from "/scripts/quotes/quoteDataProvider.js"
import QuoteComponent from "/scripts/quotes/quotes.js"

/**
 *  QuotesListComponent which renders individual quotes objects as HTML
 */

// Import `useQuotes` from the data provider module

const QuoteListComponent = () => {

  // Get a reference to the `<article class="quoteList ">` element
  const contentElement = document.querySelector(".quoteList")
  const quotes = useQuote()

  let allQuoteHTML = ""

  for (const quote of quotes) {
    const quoteHTML = QuoteComponent(quote)
    allQuoteHTML += quoteHTML
  }

  // Add to the existing HTML in the content element
  contentElement.innerHTML += `
      <section class="quoteList">
                    ${
            quotes.map(
              (currentQuote) => {
               return QuoteComponent(currentQuote)
              }
            ).join("")
          }
      </section>
  `
}


useQuote()

export default QuoteListComponent