import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore, doc, getDoc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

async function incrementCounter() {
    const docRef = doc(firestore, "Activity", "Visitas");

    try {
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            // Actualizar el campo contador con un incremento de 1
            await updateDoc(docRef, {
                Contador: increment(1)
            });

            // Obtener el documento actualizado
            const updatedDocSnap = await getDoc(docRef);
            console.log("Activity: ", updatedDocSnap.data().Contador);
        } else {
            console.log("El documento no existe.");
        }
    } catch (error) {
        console.error("Error al actualizar el contador: ", error);
    }
}

// Ejecutar la función cuando la página se cargue
window.addEventListener('load', incrementCounter);
