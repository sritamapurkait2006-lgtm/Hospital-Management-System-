
// HealthCare Website JavaScript

// Mobile navigation
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("show");
});

// Close menu after clicking a link
document.querySelectorAll("#navbar a").forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("show");
    });
});

// Doctor search
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const doctorCards = document.querySelectorAll(".doctor-card");
const searchMessage = document.getElementById("searchMessage");

function searchDoctors() {
    const searchValue = searchInput.value.toLowerCase().trim();
    let found = 0;

    doctorCards.forEach(function (doctor) {
        const doctorInfo = doctor.innerText.toLowerCase();
        const keywords = doctor.dataset.search.toLowerCase();

        if (
            doctorInfo.includes(searchValue) ||
            keywords.includes(searchValue)
        ) {
            doctor.style.display = "block";
            found++;
        } else {
            doctor.style.display = "none";
        }
    });

    if (searchValue === "") {
        doctorCards.forEach(function (doctor) {
            doctor.style.display = "block";
        });
        searchMessage.textContent = "";
    } else if (found > 0) {
        searchMessage.textContent = found + " doctor(s) found.";
    } else {
        searchMessage.textContent = "No matching doctors found.";
    }
}

searchBtn.addEventListener("click", searchDoctors);

searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        searchDoctors();
    }
});

// Appointment form
const appointmentForm =
    document.getElementById("appointmentForm");

const bookingMessage =
    document.getElementById("bookingMessage");

const appointmentDate =
    document.getElementById("appointmentDate");

// Prevent selecting a past date
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

appointmentDate.min = `${year}-${month}-${day}`;

appointmentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const patientName =
        document.getElementById("patientName").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const specialization =
        document.getElementById("specialization").value;

    const date = appointmentDate.value;

    if (!/^[0-9]{10}$/.test(phone)) {
        bookingMessage.textContent =
            "Please enter a valid 10-digit phone number.";
        return;
    }

    if (!patientName || !specialization || !date) {
        bookingMessage.textContent =
            "Please complete all fields.";
        return;
    }

    bookingMessage.textContent =
        "Demo request submitted successfully for " +
        patientName + ". This is not a confirmed hospital booking.";

    appointmentForm.reset();
    appointmentDate.min = `${year}-${month}-${day}`;
});

console.log("HealthCare website loaded successfully!");
