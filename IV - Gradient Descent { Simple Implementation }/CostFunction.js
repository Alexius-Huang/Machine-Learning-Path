const hypothesis = require('./HypothesisFunction')

module.exports = function calculateCost(X, Y, m, THETA) {
  /* Initialize the cost */
  let costSummation = 0

  /* Iterate through all of the samples */
  for (let i = 0; i < m; i++) {
    /* Current data denote using downcase x and y */
    let x = X[i], y = Y[i]

    /* Calculate Squared Error */
    costSummation += Math.pow(hypothesis(x, THETA) - y, 2)
  }

  /* Get the Half-Mean of the Squared Error */
  return (1 / (2 * m)) * costSummation
}