let [ X, Y ] = require('./StudentData')
const hypothesis = require('./HypothesisFunction')
const calculateCost = require('./CostFunction')
const calculateGradient = require('./Gradient')

/* Using m to Denote Sample Count */
const m = X.length

/* Using alpha to Denote Learning Rate */
const alpha = 0.0001

/*
  Using BIG THETA to Denote Array of Thetas, so theta_0
  will be THETA[0] while theta_1 will be THETA[1]
*/
const THETA = [0, 0]

/*
  Using iteration to Denote the Count of Iteration in
  Gradient Descent Algorithm
*/
const iteration = 300
let currentIteration = 1

/* Preprocess Student's Exam Data */
X = X.map( x => x / 100 )
Y = Y.map( y => y / 100 )

while (currentIteration <= iteration) {
  /* Print out current cost */
  console.log(`Iteration ${currentIteration} - Cost: ${calculateCost(X, Y, m, THETA)}`)

  /* Calculate Gradient */
  let gradient = calculateGradient(X, Y, m, THETA)
  let temp_0 = THETA[0] - alpha * gradient[0]
  let temp_1 = THETA[1] - alpha * gradient[1]

  /* Simultaneous Update Theta Parameter */
  THETA[0] = temp_0
  THETA[1] = temp_1

  /* Print out current cost every 30 Iterations */
  // if (currentIteration % 30 === 0) {
  //   console.log(`Iteration ${currentIteration} - Cost: ${calculateCost(X, Y, m, THETA)}`)
  //   console.log(`Theta_0: ${THETA[0]}`)
  //   console.log(`Theta_1: ${THETA[1]}`)
  // }

  /* End Iteration */
  currentIteration++
}