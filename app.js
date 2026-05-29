function updateProgress() {

    const sections = document.querySelectorAll("details");

    let totalFields = 0;
    let totalFilled = 0;

    sections.forEach((section, index) => {

        const fields = section.querySelectorAll(
            "input:not([readonly]), textarea:not([readonly])"
        );

        const filled = [...fields].filter(f => f.value.trim() !== "").length;

        const percent = fields.length
            ? Math.round((filled / fields.length) * 100)
            : 0;

        const bar = section.querySelector(".progress-fill");
        const check = section.querySelector(".check");

        if (bar) bar.style.width = percent + "%";
        if (check) check.textContent = percent === 100 ? "✔" : "";

        totalFields += fields.length;
        totalFilled += filled;

        // auto open next
        if (percent === 100) {
            const next = sections[index + 1];
            if (next) next.open = true;
        }

        // active highlight
        section.addEventListener("toggle", () => {
            sections.forEach(s => s.classList.remove("active"));
            if (section.open) section.classList.add("active");
        });
    });

    const global = totalFields
        ? Math.round((totalFilled / totalFields) * 100)
        : 0;

    document.querySelector(".global-fill").style.width = global + "%";
}

document.addEventListener("input", updateProgress);
updateProgress();