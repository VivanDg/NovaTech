import { useState } from "react";
import { iniciarSesion } from "../services/authService";

function LoginForm() {

    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");

    const [errores, setErrores] = useState({});
    const [mensaje, setMensaje] = useState("");
    const [tipoMensaje, setTipoMensaje] = useState("");

    const [mostrarContrasena, setMostrarContrasena] = useState(false);
    const [procesando, setProcesando] = useState(false);

    const validarFormulario = () => {

        const nuevosErrores = {};

        const correoLimpio = correo.trim();

        if (!correoLimpio) {
            nuevosErrores.correo =
                "El correo institucional es obligatorio.";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correoLimpio)
        ) {
            nuevosErrores.correo =
                "Ingresa un correo electrónico válido.";
        }

        if (!contrasena) {
            nuevosErrores.contrasena =
                "La contraseña es obligatoria.";
        }

        setErrores(nuevosErrores);

        return Object.keys(nuevosErrores).length === 0;
    };

    const manejarSubmit = async (e) => {

        e.preventDefault();

        setMensaje("");
        setTipoMensaje("");

        if (!validarFormulario()) {
            return;
        }

        setProcesando(true);
        setMensaje("Verificando credenciales...");
        setTipoMensaje("procesando");

        const tiempoMinimo = new Promise((resolve => setTimeout(resolve, 1200)));

        try {

            const [resultado] = await Promise.all([
                iniciarSesion(correo, contrasena),
                tiempoMinimo
            ]);

            if (resultado.exito_login === true|| resultado.Exito_login === true) {

                setMensaje(
                    "Inicio de sesión correcto."
                );

                setTipoMensaje("exito");
                setErrores({});
            } else {

                setMensaje(
                    resultado.mensaje_login  ||
                    "El correo o la contraseña no son correctos."
                );

                setTipoMensaje("error");
            }

        } catch (error) {

            await tiempoMinimo;

            setMensaje(
                "No se pudo conectar con el servidor. Inténtalo nuevamente."
            );

            setTipoMensaje("error");

        } finally {

            setProcesando(false);
        }
    };

    return (
        <form
            className="login-form"
            onSubmit={manejarSubmit}
            noValidate
        >

            <div className="form-group">

                <label htmlFor="correo">
                    Correo institucional
                </label>

                <input
                    id="correo"
                    type="email"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    placeholder="correo@novatech.com"
                    disabled={procesando}
                    aria-invalid={!!errores.correo}
                    aria-describedby={
                        errores.correo
                            ? "error-correo"
                            : undefined
                    }
                />

                {errores.correo && (
                    <span
                        id="error-correo"
                        className="field-error"
                    >
                        {errores.correo}
                    </span>
                )}

            </div>

            <div className="form-group">

                <label htmlFor="contrasena">
                    Contraseña
                </label>

                <div className="password-container">

                    <input
                        id="contrasena"
                        type={
                            mostrarContrasena
                                ? "text"
                                : "password"
                        }
                        value={contrasena}
                        onChange={(e) =>
                            setContrasena(e.target.value)
                        }
                        placeholder="Ingresa tu contraseña"
                        disabled={procesando}
                        aria-invalid={!!errores.contrasena}
                        aria-describedby={
                            errores.contrasena
                                ? "error-contrasena"
                                : undefined
                        }
                    />

                    <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setMostrarContrasena(!mostrarContrasena)}
                        disabled={procesando}
                        aria-label={
                            mostrarContrasena
                                ? "Ocultar contraseña"
                                : "Mostrar contraseña"
                        }
                        aria-pressed={mostrarContrasena}
                    >
                        {mostrarContrasena ? (
                            // (contraseña visible → clic para ocultar)
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                                <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
                                <line x1="1" y1="1" x2="23" y2="23" />
                            </svg>
                        ) : (
                            // (contraseña oculta → clic para mostrar)
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                        )}
                    </button>

                </div>  

                {errores.contrasena && (
                    <span
                        id="error-contrasena"
                        className="field-error"
                    >
                        {errores.contrasena}
                    </span>
                )}

            </div>

            {mensaje && (
                <div
                    className={`login-message ${tipoMensaje}`}
                    role="alert"
                    aria-live="polite"
                >
                    {mensaje}
                </div>
            )}

            <button
                type="submit"
                className="login-button"
                disabled={procesando}
            >
                {procesando
                    ? "Verificando..."
                    : "Ingresar"}
            </button>

        </form>
    );
}

export default LoginForm;