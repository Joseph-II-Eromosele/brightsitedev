const tabs = document.querySelectorAll(".tab-btn");
const sections = document.querySelectorAll(".pricing-section");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((btn) => btn.classList.remove("active"));
    sections.forEach((sec) => sec.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.target).classList.add("active");
  });
});

const buttons = document.querySelectorAll(".service-btn");
const services = document.querySelectorAll(".service");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Hide all services
    services.forEach((s) => (s.style.display = "none"));

    // Show selected service
    const serviceId = btn.dataset.service;
    document.getElementById(serviceId).style.display = "grid";
  });
});
