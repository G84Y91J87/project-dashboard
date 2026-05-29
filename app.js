function updateProgress(){

    const fields = document.querySelectorAll(
        "input:not([readonly]), textarea:not([readonly])"
    );

    const filled = [...fields]
        .filter(f => f.value.trim() !== "")
        .length;

    const percent = fields.length
        ? Math.round((filled / fields.length) * 100)
        : 0;

    progressText.textContent = percent + "%";
    progressFill.style.width = percent + "%";
}

document.addEventListener("input", updateProgress);
updateProgress();