export const displayToast = function (text: string, title: string) {
    const toast = document.createElement("div");
    const toastHeader = document.createElement("div");
    const toastBody = document.createElement("div");
    const toastTitle = document.createElement("strong")
    const toastExit = document.createElement("i");
    const toastText = document.createElement("p");

    toast.classList.add("toast");
    toastHeader.classList.add("toast-header");
    toastBody.classList.add("toast-body");
    toastTitle.classList.add("toast-title");
    toastExit.classList.add("toast-exit", "fa-solid", "fa-x");
    toastText.classList.add("toast-text");
    toastExit.id = "toastExit";

    toastTitle.textContent = title;
    toastText.textContent = text;

    document.getElementById("toastContainer")?.appendChild(toast);
    toast.appendChild(toastHeader);
    toast.appendChild(toastBody);
    toastHeader.appendChild(toastTitle);
    toastHeader.appendChild(toastExit);
    toastBody.appendChild(toastText);

    const timeout = setTimeout(() => {
        toast.parentElement?.removeChild(toast);
    }, 5000);

    toastExit.addEventListener("click", () => {
        clearTimeout(timeout)
        toast.parentElement?.removeChild(toast);
    });

};