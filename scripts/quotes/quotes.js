const QuoteComponent = (quote) => {
  return `
      <div class="quote">
          <h4>${quote.title}</h4>
          <p>${quote.paragraph}</p>
      </div>
  `
}

export default QuoteComponent