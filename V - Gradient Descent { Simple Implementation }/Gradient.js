const hypothesis = require('./HypothesisFunction')

module.exports = function calculateGradient(X, Y, m, THETA) {
  let grad = [0, 0]

  /* costSummation denots the summation part in THETA[0] and THETA[1] */
  let costSummation = [0, 0]

  for (let i = 0; i < m; i++) {
    let x = X[i], y = Y[i]

    /*
      Notice that this time because we are calculating the gradient (which
      is the derivative of the cost function), we don't need to squared the
      error
    */
    costSummation[0] += (hypothesis(x, THETA) - y)
    costSummation[1] += (hypothesis(x, THETA) - y) * x
  }

  /* Mean of the costSummation */
  grad[0] = (1 / m) * costSummation[0]
  grad[1] = (1 / m) * costSummation[1]
  return grad
}