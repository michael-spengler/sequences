import { fail } from "https://deno.land/std@0.86.0/testing/asserts.ts";
import { AddingAndClosingPointsProvider } from "./adding-and-closing-points-provider.ts";

interface ITestData {
    scenarioName: string
    longShortDelta: number
    liquidityLevel: number
    riskLevel: number
}


const testData: ITestData[] = []

testData.push({ scenarioName: 'Long Short Ratio Balanced; High Liquidity; High RiskLevel', longShortDelta: 0, liquidityLevel: 20, riskLevel: 2 })
testData.push({ scenarioName: 'Long; High Liquidity; High RiskLevel', longShortDelta: 60, liquidityLevel: 20, riskLevel: 2 })
testData.push({ scenarioName: 'Short; High Liquidity; High RiskLevel', longShortDelta: -60, liquidityLevel: 20, riskLevel: 2 })

testData.push({ scenarioName: 'Long Short Ratio Balanced; High Liquidity; Low RiskLevel', longShortDelta: 0, liquidityLevel: 20, riskLevel: 1 })
testData.push({ scenarioName: 'Long; High Liquidity; Low RiskLevel', longShortDelta: 60, liquidityLevel: 20, riskLevel: 1 })
testData.push({ scenarioName: 'Short; High Liquidity; Low RiskLevel', longShortDelta: -60, liquidityLevel: 20, riskLevel: 1 })

testData.push({ scenarioName: 'Long Short Ratio Balanced; Low Liquidity; High RiskLevel', longShortDelta: 0, liquidityLevel: 5, riskLevel: 2 })
testData.push({ scenarioName: 'Long; Low Liquidity; High RiskLevel', longShortDelta: 60, liquidityLevel: 5, riskLevel: 2 })
testData.push({ scenarioName: 'Short; Low Liquidity; High RiskLevel', longShortDelta: -60, liquidityLevel: 5, riskLevel: 2 })

testData.push({ scenarioName: 'Long Short Ratio Balanced; Low Liquidity; Low RiskLevel', longShortDelta: 0, liquidityLevel: 5, riskLevel: 1 })
testData.push({ scenarioName: 'Long; Low Liquidity; Low RiskLevel', longShortDelta: 60, liquidityLevel: 5, riskLevel: 1 })
testData.push({ scenarioName: 'Short; Low Liquidity; Low RiskLevel', longShortDelta: -60, liquidityLevel: 5, riskLevel: 1 })


Deno.test("should return close to perfect adding and closing points", () => {

    for (const scenario of testData) {
        const addingPointLong = AddingAndClosingPointsProvider.getAddingPointLong(scenario.longShortDelta, scenario.liquidityLevel, scenario.riskLevel)
        const addingPointShort = AddingAndClosingPointsProvider.getAddingPointShort(scenario.longShortDelta, scenario.liquidityLevel, scenario.riskLevel)
        const closingPointLong = AddingAndClosingPointsProvider.getClosingPointLong(scenario.longShortDelta, scenario.liquidityLevel)
        const closingPointShort = AddingAndClosingPointsProvider.getClosingPointShort(scenario.longShortDelta, scenario.liquidityLevel)

        console.log(`\nScenario: "${scenario.scenarioName}":`)
        console.log(`addingPointLong: ${addingPointLong} - addingPointShort: ${addingPointShort}`)
        console.log(`closingPointLong: ${closingPointLong} - closingPointShort: ${closingPointShort}`)

    }

})
