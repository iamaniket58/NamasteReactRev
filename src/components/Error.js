
import { useNavigate, useRouteError } from "react-router-dom";
import "../../ErrorPage.css";

const ErrorPage = () => {
    const navigate = useNavigate();
    const err = useRouteError();
    console.log(err);
    return (
        <div className="error-page">
            <div className="stars" />

            <nav className="error-navbar">
                <a href="/" className="error-logo">
                    <span className="logo-icon">✦</span>
                    YourLogo
                </a>

                <span className="nav-message">Lost in cyberspace?</span>
            </nav>

            <main className="error-content">
                <section className="error-text">
                    <p className="error-label">
                        <span className="status-dot" />
                        ERROR 404
                    </p>

                    <h1 className="error-number">404</h1>

                    <h2>Oops! Page Not Found</h2>

                    <p className="error-description">
                        Looks like you've ventured into uncharted territory.
                        The page you're looking for doesn't exist or has been moved.
                    </p>

                    <div className="error-actions">
                        <button
                            className="home-button"
                            onClick={() => navigate("/")}
                        >
                            <span>⌂</span> Go to Home
                        </button>

                        <button
                            className="back-button"
                            onClick={() => navigate(-1)}
                        >
                            ← Go Back
                        </button>
                    </div>

                    <p className="error-hint">
                        Don't worry, even the best explorers get lost.
                    </p>
                </section>

                <section className="error-illustration">
                    <div className="orbit orbit-one" />
                    <div className="orbit orbit-two" />

                    <div className="planet">
                        <div className="planet-crater crater-one" />
                        <div className="planet-crater crater-two" />
                        <div className="planet-crater crater-three" />
                    </div>

                    <div className="astronaut">👨‍🚀</div>

                    <div className="floating-card">
                        <span>🚀</span>
                        <p>Mission status</p>
                        <strong>Page not found</strong>
                    </div>

                    <span className="floating-star star-one">✦</span>
                    <span className="floating-star star-two">✧</span>
                    <span className="floating-star star-three">✦</span>
                </section>
            </main>

            <footer className="error-footer">
                <span>© 2026 YourLogo</span>
                <span>Every great journey starts somewhere.</span>
            </footer>
        </div>
    );
};

export default ErrorPage;
