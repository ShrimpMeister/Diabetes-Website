var mmolEl = document.getElementById("mmol/L");
mmolEl.focus();
var mgEl = document.getElementById("mg/dl");

mmolEl.addEventListener("keyup", doConversion, false);
mgEl.addEventListener("keyup", doConversion, false);

function doConversion(event) {
    if (event.target.id === "mmol/L") {
        var mmol = mmolEl.value.trim();
        if (!isNaN(mmol)) {
            var mmol = parseFloat(mmol);
            var mgdl = mmol * 18;
        } else {
            mgEl.value = "Input is not a number"
        }
        mgEl.value = String(mgdl.toFixed(2));

    } else if (event.target.id === "mg/dl") {
        var mgdl = mgEl.value.trim();
        if (!isNaN(mgdl)) {
            var mgdl = parseFloat(mgdl);
            var mmol = mgdl / 18;
        } else {
            mmolEl.value = "Input is not a number"
        }
        mmolEl.value = String(mmol.toFixed(2));
    }
}