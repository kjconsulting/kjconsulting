document.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");
    const fraction = 1 / sections.length;

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const top = rect.top;
        const bottom = rect.bottom;
        const screenHeight = window.innerHeight || document.documentElement.clientHeight;

        // Check if the section is visible
        if (top < screenHeight && bottom >= 0) {
            const color = interpolateColor("#ff7f50", "#ffdb58", (index + fraction - top / screenHeight) % 1);
            document.body.style.backgroundColor = color;
        }
    });
});

function interpolateColor(color1, color2, factor) {
    let result = '#';
    for (let i = 0; i < 3; i++) {
        let val1 = parseInt(color1.substring(1 + i * 2, 3 + i * 2), 16);
        let val2 = parseInt(color2.substring(1 + i * 2, 3 + i * 2), 16);
        let val = Math.round(val1 + (val2 - val1) * factor).toString(16);
        while (val.length < 2) { val = '0' + val; } // Pad with zero if necessary
        result += val;
    }
    return result;
}
