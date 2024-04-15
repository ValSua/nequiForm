import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPhone(event.target.value);
  };

  const handlePasswordChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("Nombre:", name);
    console.log("Celular:", phone);
    console.log("Contraseña:", password);
  };

  return (
    <>
      <header className="ng-scope">
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
            <div className="col-xs-12 col-md-10 container-buttons">
              <div className="wrap-main-menu">
                <div className="row">
                  <div className="col-xs-12 col-md-8"></div>
                  <div className="col-xs-12 col-md-4">
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
              </div>
            </div>
          </div>
        </div>
      </header>

      <div>
        
      </div>
      <h1>Nequi</h1>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
          <br />
          <label>
            Celular:
            <input type="text" value={phone} onChange={handlePhoneChange} />
          </label>
          <br />
          <label>
            Contraseña:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <br />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
}

export default App;
