function updateProgress(){

    const sections = document.querySelectorAll("details");

    sections.forEach(section => {

        const fields = section.querySelectorAll(
            "input:not([readonly]), textarea:not([readonly])"
        );

        const filled = [...fields]
            .filter(f => f.value.trim() !== "")
            .length;

        const percent = fields.length
            ? Math.round((filled / fields.length) * 100)
            : 0;

        const badge = section.querySelector(".progress-badge");

        if (badge) {
            badge.textContent = fields.length
                ? `${percent}%`
                : "";
        }
    });
}

document.addEventListener("input", updateProgress);
updateProgress();