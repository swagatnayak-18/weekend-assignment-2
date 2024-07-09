document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".sidebar ul li a");
    links.forEach(link => {
        link.addEventListener("click", function() {
            links.forEach(lnk => lnk.classList.remove("active"));
            this.classList.add("active");
        });
    });
});