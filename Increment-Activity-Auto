async function incrementCounter() {
    const docRef = doc(firestore, "Activity", "Visitas");
    
    try {
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            // Update the counter field with an increment of 1
            await updateDoc(docRef, {
                Contador: increment(1)
            });
            
            // Fetch the updated document
            const updatedDocSnap = await getDoc(docRef);
            console.log("Activity: ", updatedDocSnap.data().Contador);
        } else {
            console.log("El documento no existe.");
        }
    } catch (error) {
        console.error("Error al actualizar el contador: ", error);
    }
}
