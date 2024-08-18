import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getFirestore, doc, getDoc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

async function incrementarLikes(blogId, likeButton) {
    try {
        const blogDocRef = doc(db, 'entradasBlog', blogId);
        
        await updateDoc(blogDocRef, {
            likes: increment(1)
        });
    
        const updatedDoc = await getDoc(blogDocRef);
    
        likeButton.textContent = `Likes: ${updatedDoc.data().likes || 0}`;
    } catch (error) {
        console.error('Error al incrementar el contador:', error);
    }
}
