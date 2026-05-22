/* ================= TABS ================= */

document.querySelectorAll(".tabs button").forEach(button => {

    button.onclick = () => {

        document.querySelector(".tabs .active")
            .classList.remove("active");

        document.querySelector("section.active")
            .classList.remove("active");

        button.classList.add("active");

        document.getElementById(button.dataset.tab)
            .classList.add("active");
    };
});

/* ================= PROGRESS ================= */

function updateProgress() {

    const fields = document.querySelectorAll(
        "input:not([type='file']), textarea"
    );

    let done = 0;

    fields.forEach(f => {
        if (f.value.trim()) done++;
    });

    const percent = Math.round(done / fields.length * 100);

    progressText.textContent = percent + "%";
    progressFill.style.width = percent + "%";
}

document.addEventListener("input", updateProgress);

/* ================= DATA ================= */

function getData() {

    const data = {};

    const fields = document.querySelectorAll(
        "input:not([type='file']), textarea"
    );

    fields.forEach(f => {
        data[f.id] = f.value;
    });

    return data;
}

/* ================= EXPORT ================= */

function exportData() {

    const blob = new Blob(
        [JSON.stringify(getData(), null, 2)],
        { type: "application/json" }
    );

    const a = document.createElement("a");

    a.href = URL.createObjectURL(blob);
    a.download = "project.json";
    a.click();
}

/* ================= IMPORT ================= */

file.onchange = e => {

    const reader = new FileReader();

    reader.onload = x => {

        const data = JSON.parse(x.target.result);

        document.querySelectorAll(
            "input:not([type='file']), textarea"
        ).forEach(f => {

            f.value = data[f.id] || "";
        });

        updateProgress();
    };

    reader.readAsText(e.target.files[0]);
};

/* ================= RESET ================= */

function resetData() {

    if (!confirm("Alles wissen?")) return;

    document.querySelectorAll(
        "input:not([type='file']), textarea"
    ).forEach(f => f.value = "");

    updateProgress();
}

/* INIT */

updateProgress();