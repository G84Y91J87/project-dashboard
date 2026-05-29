const updateProgress = () => {
    const fields = document.querySelectorAll("input, textarea");
    document.querySelector(".global-fill").style.width =
        [...fields].filter(f => f.value.trim()).length / fields.length * 100 + "%";
};

document.addEventListener("input", updateProgress);
updateProgress();