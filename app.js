function updateProgress() {
    document.querySelectorAll("details").forEach(section => {
        const fields = section.querySelectorAll("input, textarea");
        const filled = [...fields].filter(f => f.value.trim()).length;
        const complete = fields.length && filled === fields.length;

        section.classList.toggle("complete", complete);
        section.querySelector(".check").textContent = complete ? "✔" : "";
    });
}

document.addEventListener("input", updateProgress);
updateProgress();