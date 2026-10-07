const API_URL = "http://localhost:5168/api/Auth";

export async function iniciarSesion(correo, contrasena) {

    const respuesta = await fetch(
        `${API_URL}/login`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                Correo: correo,
                Password: contrasena
            })
        }
    );


    if (!respuesta.ok) {
        throw new Error(
            "No se pudo procesar la solicitud."
        );
    }


    return await respuesta.json();
}
