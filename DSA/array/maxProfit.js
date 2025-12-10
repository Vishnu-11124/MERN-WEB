const maxProfit = (prices) => {
    let minPrice = prices[0]
    let maxProfit = 0

    for(let i = 1; i < prices.length; i++){
        // minimum price
        minPrice = Math.min(minPrice, prices[i])

        // maximum price
        maxProfit = Math.max(maxProfit, prices[i] - minPrice)

    }
    return maxProfit
}

const prices = [7, 1, 5, 3, 6, 4]

const profit = maxProfit(prices)

console.log(`Maximum Profit: ${profit}`)