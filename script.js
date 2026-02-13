function checkSafety() {

    let fileName = document.getElementById("fileName").value.toLowerCase();
    let fileType = document.getElementById("fileType").value;
    let source   = document.getElementById("source").value;
    let fileSize = parseFloat(document.getElementById("fileSize").value);

    let result = document.getElementById("result");

    let risk = 0;
    let reason = [];

    // Rule 1
    if (fileType === "exe" && source === "unknown") {
        risk += 50;
        reason.push("Executable file from unknown source");
    }

    // Rule 2
    if (fileName.includes(".pdf.exe") || fileName.includes(".jpg.exe")) {
        risk += 40;
        reason.push("Double extension detected");
    }

    // Rule 3
    if (fileType === "exe" && fileSize < 1) {
        risk += 20;
        reason.push("Very small executable file");
    }

    if (risk >= 60) {
        result.innerHTML = "HIGH RISK<br>" + reason.join(", ");
    } 
    else if (risk >= 30) {
        result.innerHTML = "MEDIUM RISK<br>" + reason.join(", ");
    } 
    else {
        result.innerHTML = "LOW RISK<br>File looks safe.";
    }
}