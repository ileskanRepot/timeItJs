// Functional coding approach
const calcTotPriceFunc = (productsList) => {
	return totPrice = productsList.
  	map(ii => ii * 0.9).
  	filter((ii) => ii > 20).
  	reduce((ii, jj) => ii + jj, 0)
}

// Imperative coding approach
const calcTotPriceIte = (productsList) => {
	let totSum = 0
	for (let ii = 0; ii < products.length; ii++) {
  	const discPrice = products[ii] * 0.9
	
  	if (discPrice > 20){
    	totSum += discPrice
  	}
	}
	return totSum
}

// Calculate standard deviation
const standDev = (arr, avg) => {
	return Math.sqrt(
		arr.reduce(
			(ii, jj) => {
				return ii + (jj - avg)**2
			}
			, 0
		) / (arr.length)
	)
}

// Timing function
const timeit = (func, trys, inpt, slice = 0) => {
	const times = []
	for (let ii = 0; ii < trys; ii++){
		const start = new Date()
		func(inpt)
		const end = new Date()
		times.push(end - start)
	}

	// Cut few first test out because it takes time for the 
	// code to warm up
	const timesSmaller = times.slice(slice)

	const avg = times.reduce((ii, jj) => ii + jj,0) / trys
	const retObj = {
		testCount: trys,
		avg: avg,
		standDev: standDev(times, avg)
	}
	return retObj
}

// Decleare
const numElem = 1E7
const numTest = 100
const max = 100
const min = 0
const products = Array.from(
  { length: numElem },
  () => Math.floor(Math.random() * (max - min + 1)) + min
)

const statsIte = timeit(calcTotPriceIte, numTest, products)
const statsFunc = timeit(calcTotPriceFunc, numTest, products)

console.log(statsFunc)
console.log(statsIte)
