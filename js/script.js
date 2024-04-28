const form = document.getElementById('citaForm'); 

const mensajeDiv = document.getElementById('mensaje'); 



form.addEventListener('submit', async (event) => { 

    event.preventDefault(); 



    const formData = new FormData(form); 

    const data = Object.fromEntries(formData.entries()); 



    try { 

        const response = await fetch('http://localhost:3000/guardar_cita', { 

            method: 'POST', 

            headers: { 

                'Content-Type': 'application/json' 

            }, 

            body: JSON.stringify(data) 

        }); 



        if (!response.ok) { 

            throw new Error('Error al guardar la cita'); 

        } 



        const result = await response.json(); 

        mensajeDiv.textContent = result.message; 

    } catch (error) { 

        mensajeDiv.textContent = 'Error al procesar la solicitud'; 

        console.error('Error:', error); 

    } 

}); 
