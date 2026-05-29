function updateProgress(){

    document.querySelectorAll("details").forEach(section => {

        const fields = section.querySelectorAll(
            "input:not([readonly]), textarea:not([readonly])"
        );

        const filled = [...fields]
            .filter(f => f.value.trim() !== "")
            .length;

        const percent = fields.length
            ? Math.round((filled / fields.length) * 100)
            : 0;

        const bar = section.querySelector(".progress-fill");
        const check = section.querySelector(".check");

        if (bar) {
            bar.style.width = percent + "%";
        }

        if (check) {
            check.textContent = percent === 100 ? "✔" : "";
        }
    });
}

document.addEventListener("input", updateProgress);
updateProgress();