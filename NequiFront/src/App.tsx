import React, { useState } from "react";
import "./App.css";

function App() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handlePhoneNumberChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setPhoneNumber(event.target.value);
  };

  const handlePasswordChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log("Número de celular:", phoneNumber);
    console.log("Contraseña:", password);
    // Aquí podrías enviar los datos a un servidor para autenticar al usuario
  };

  return (
    <>
      <header>
        <div className="row">
          <div className="col-xs-12 col-md-2">
            <div className="logo">
              <a href="https://www.nequi.com.co">
                <img
                  alt="nequi"
                  src="https://uploads-ssl.webflow.com/6317a229ebf7723658463b4b/64dfef05bc6705edb9447499_nequi.svg"
                ></img>
              </a>
            </div>
            <div className="buttons-right">
              <ul>
                <li>
                  <a
                    href="https://recarga.nequi.com.co/bdigitalpsl"
                    target="_blank"
                    className="button-recarga"
                  >
                    Recarga
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <section className="login-section">
        <div className="login-wrap">
          <h1>Entra a tu Nequi</h1>
          <p>Podrás bloquear tu Nequi, consultar tus datos.</p>
          <div className="login-formwrap">
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label>Número de celular</label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  placeholder="Escribe tu número de celular"
                  required
                  pattern="[0-9]*"
                  maxLength={10}
                />
              </div>
              <div className="form-group">
                <label>Contraseña</label>
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Contraseña"
                  required
                  maxLength={4}
                />
              </div>
              <button className="form-btn-submit" type="submit">
                Entra
              </button>
            </form>
            <div
              className="g-recaptcha"
              data-sitekey="tu-clave-del-sitio"
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
