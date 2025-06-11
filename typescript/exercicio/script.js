function calculaRaio() {
    var inputRaio = document.getElementById("raio");
    if (inputRaio !== null) {
        var raio = (inputRaio === null || inputRaio === void 0 ? void 0 : inputRaio.value) || 0;
        var area = document.getElementById("area");
        var circ = document.getElementById("circ");
        if (area !== null) {
            area.value = Math.PI * raio * raio;
        }
        if (circ !== null) {
            circ.value = Math.PI * 2 * raio;
        }
    }
}
