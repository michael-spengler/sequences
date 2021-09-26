

export class AddingAndClosingPointsProvider {


    public static getAddingPointLong(longShortDeltaInPercent: number, liquidityLevel: number, riskLevel = 1.2): number {

        let addingPointLong

        addingPointLong = ((Math.pow(longShortDeltaInPercent / riskLevel, 3) * - 1) * (4 / Math.pow(liquidityLevel, 2)))

        if (addingPointLong > -10) addingPointLong = -10


        return addingPointLong

    }


    public static getAddingPointShort(longShortDeltaInPercent: number, liquidityLevel: number, riskLevel = 1): number {

        let addingPointShort

        addingPointShort = ((Math.pow(longShortDeltaInPercent / riskLevel, 3)) * (4 / Math.pow(liquidityLevel, 2)))

        if (addingPointShort > -10) addingPointShort = -10


        return addingPointShort

    }


    public static getClosingPointLong(longShortDeltaInPercent: number, liquidityLevel: number): number {

        let closingPointLong = (Math.pow(longShortDeltaInPercent / 3, 3)) * -1 / (liquidityLevel * 3)

        if (closingPointLong < 24) closingPointLong = 24

        return closingPointLong

    }


    public static getClosingPointShort(longShortDeltaInPercent: number, liquidityLevel: number): number {

        let closingPointShort = (Math.pow(longShortDeltaInPercent / 3, 3)) / (liquidityLevel * 3)

        if (closingPointShort < 24) closingPointShort = 24

        return closingPointShort

    }
}