import { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm";

function LoginPage() {

    // Lee la preferencia guardada o la del sistema
    const [modoOscuro, setModoOscuro] = useState(() => {
        const guardado = localStorage.getItem("tema");
        if (guardado) return guardado === "oscuro";

        return window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
    });

    // Aplica/quita la clase en <body> y guarda la preferencia
    useEffect(() => {
        document.body.classList.toggle("dark", modoOscuro);
        localStorage.setItem(
            "tema",
            modoOscuro ? "oscuro" : "claro"
        );
    }, [modoOscuro]);

    return (
        <main className="login-page">

            <section className="login-panel">

                <div className="brand">
                    <div className="brand-logo">
                        <svg viewBox="0 0 100 100" aria-hidden="true">
                            <polygon
                                points="50,3 93,27 93,73 50,97 7,73 7,27"
                                className="hex-outer"
                            />
                            <polygon
                                points="50,19 78,34 78,66 50,81 22,66 22,34"
                                className="hex-inner"
                            />
                            <text
                                x="50"
                                y="52"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                className="hex-letter"
                            >
                                N
                            </text>
                        </svg>
                    </div>

                    <span>NovaPortal</span>
                </div>

               <div className="login-card">

                    <div className="login-content">

                        <h1>Iniciar sesión</h1>

                        <p className="login-subtitle">
                            Ingresa a tu cuenta para continuar
                        </p>

                        <LoginForm />

                    </div>

                </div>

                <p className="login-footer">
                    NovaTech Servicios Digitales S.A.C.
                </p>

            </section>

            <section className="login-image">

                {/* Toggle de tema (reemplaza el badge) */}
                <button
                    type="button"
                    className="theme-toggle"
                    onClick={() => setModoOscuro(!modoOscuro)}
                    aria-label={
                        modoOscuro
                            ? "Activar modo claro"
                            : "Activar modo oscuro"
                    }
                    aria-pressed={modoOscuro}
                >
                    <span className="theme-toggle-icon">
                        {modoOscuro ? "☀" : "☾"}
                    </span>

                    <span className="theme-toggle-label">
                        {modoOscuro ? "Modo claro" : "Modo oscuro"}
                    </span>
                </button>

                

            </section>

        </main>
    );
}

export default LoginPage;