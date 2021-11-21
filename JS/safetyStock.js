var serviceLevelInput;
var selectedServiceLevel;
var zScoreCalculation;
var avgDemand;
var stDevDemand;
var avgLeadtime;
var stDevLeadtime;
var cost;


zScoreMap = new Map(
    [
        ["80%", 0.84],
        ["85%", 1.04],
        ["90%", 1.28],
        ["95%", 1.64],
        ["96%", 1.75],
        ["97%", 1.88],
        ["98%", 2.05],
        ["99%", 2.33],
        ["99.9%", 3.09],
        ["99.99%", 3.72]
    ]
)

val();

function val() {
    serviceLevelInput = document.getElementById("serviceLevels");
    selectedServiceLevel = serviceLevelInput.options[serviceLevelInput.selectedIndex].text;
    zScoreCalculation = zScoreMap.get(selectedServiceLevel);
    avgDemand = parseInt(document.getElementById("averageDemand").value);
    stDevDemand = parseInt(document.getElementById("stDevDemand").value);
    avgLeadtime = parseInt(document.getElementById("averageLeadtime").value);
    stDevLeadtime = parseInt(document.getElementById("stDevLeadtime").value);
    stDevLeadtime = parseInt(document.getElementById("stDevLeadtime").value);
    cost = parseInt(document.getElementById("unitCost").value);
    calculateSafetyStockUnits();

}

function calculateSafetyStockUnits() {
    var safetyStockCalculation =
        Math.ceil(
            zScoreCalculation *
            Math.sqrt(
                ((avgLeadtime / 7)
                    *
                    (Math.pow(stDevDemand, 2)))
                +
                (Math.pow(((stDevLeadtime / 7) * avgDemand), 2))))

    //document.getElementById("output1").innerHTML = `You will want to carry ${safetyStockCalculation} units of safety stock`;
    document.getElementById("safetyStockUnits").innerHTML = `${safetyStockCalculation}`
    calculateSafetyStockCost(safetyStockCalculation);
}

function calculateSafetyStockCost(safetyStockCalculation) {
    var safetyStockCost = cost * safetyStockCalculation;
    //document.getElementById("output2").innerHTML = `This will come at an inventory cost of $${safetyStockCost}`;
    document.getElementById("safetyStockCost").innerHTML = `${safetyStockCost}`


}