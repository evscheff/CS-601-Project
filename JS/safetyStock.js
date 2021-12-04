var serviceLevelInput;
var selectedServiceLevel;
var zScoreCalculation;
var avgDemand;
var stDevDemand;
var avgLeadtime;
var stDevLeadtime;
var cost;

// mapping of service levels to the statistical z-score
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
        ["99.99%", 3.72],
        ["99.999%", 4.26],
        ["99.9999%", 4.75]
    ]
);

// run the calculator function upon page load, based on defaults
calculate();

// read the inputs and run the calculator
function calculate() {
    serviceLevelInput = document.getElementById("serviceLevels");
    selectedServiceLevel = serviceLevelInput.options[serviceLevelInput.selectedIndex].text;
    zScoreCalculation = zScoreMap.get(selectedServiceLevel);
    avgDemand = parseInt(document.getElementById("averageDemand").value);
    stDevDemand = parseInt(document.getElementById("stDevDemand").value);
    avgLeadtime = parseInt(document.getElementById("averageLeadtime").value);
    stDevLeadtime = parseInt(document.getElementById("stDevLeadtime").value);
    cost = parseInt(document.getElementById("unitCost").value);
    calculateSafetyStockUnits();
}

function calculateSafetyStockUnits() {
    // safety stock formula
    var safetyStockCalculation =
        Math.ceil(
            zScoreCalculation *
            Math.sqrt(
                ((avgLeadtime / 7)
                    *
                    (Math.pow(stDevDemand, 2)))
                +
                (Math.pow(((stDevLeadtime / 7) * avgDemand), 2))));

    // write outputs
    if (isNaN(safetyStockCalculation)) {
        document.getElementById("safetyStockUnits").innerHTML = "calculator error: please ensure all fields have valid inputs";
        document.getElementById("safetyStockUnits").style.color = "red";
        document.getElementById("safetyStockCost").innerHTML = "calculator error: please ensure all fields have valid inputs";
        document.getElementById("safetyStockCost").style.color = "red";
    } else {
        document.getElementById("safetyStockUnits").innerHTML = `${safetyStockCalculation}`;
        document.getElementById("safetyStockUnits").style.color = "";
        calculateSafetyStockCost(safetyStockCalculation);
    }
}

// calculate cost of safety stock
function calculateSafetyStockCost(safetyStockCalculation) {
    var safetyStockCost = cost * safetyStockCalculation;
    document.getElementById("safetyStockCost").innerHTML = `${safetyStockCost}`;
    document.getElementById("safetyStockCost").style.color = "";
}

// rest the form to default values
function reset() {
    document.getElementById("serviceLevels").reset();
    document.getElementById("averageDemand").reset();
    document.getElementById("stDevDemand").reset();
    document.getElementById("averageLeadtime").reset();
    document.getElementById("stDevLeadtime").reset();
    document.getElementById("unitCost").reset();
}