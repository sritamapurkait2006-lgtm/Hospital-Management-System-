import { db } from "./firebase.js";
import {
    doc,
    setDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

import { auth } from "./firebase.js";

import {
    createUserWithEmailAndPassword,
    updateProfile,
    sendEmailVerification,
    signOut
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const form = document.getElementById("registerForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword =
        document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match.";
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        message.textContent = "Enter a valid 10-digit phone number.";
        return;
    }

    try {
        message.textContent = "Creating your account...";

        const result = await createUserWithEmailAndPassword(
            auth, email, password
        );

        await updateProfile(result.user, {
            displayName: name
        });
      await setDoc(doc(db, "patients", result.user.uid), {
    name: name,
    email: email,
    phone: phone,
    createdAt: serverTimestamp()
});

        await sendEmailVerification(result.user);

        await signOut(auth);

        message.textContent =
            "Registration successful! Please verify your email, then log in.";

        form.reset();

    } catch (error) {
        message.textContent = error.message;
    }
});
