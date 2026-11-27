
import { auth } from "./firebase.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// Check whether a patient is logged in
onAuthStateChanged(auth, function(user) {

    if (!user || !user.emailVerified) {
        window.location.replace("login.html");
        return;
    }

    document.getElementById("patientName").textContent =
        user.displayName || "Patient";

    document.getElementById("patientEmail").textContent =
        user.email || "";
});

// Logout
const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", async function() {

    try {
        await signOut(auth);
        window.location.replace("login.html");

    } catch (error) {
        alert("Unable to log out. Please try again.");
    }
});

// Mobile navigation
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function() {
    navbar.classList.toggle("show");
});
