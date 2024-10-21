import React from "react";
import "./SectionContact.css";

const headerStyles = {
  textAlign: "center",
  color: "#0066cc",
  marginBottom: "20px",
};

const inputStyles = {
  width: "100%",
  padding: "8px",
  marginBottom: "10px",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

const buttonStyles = {
  padding: "10px",
  backgroundColor: "#0066cc",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  margin: "0 auto",
};

export const SectionContact = () => {
  return (
    <div className="c_SectionContact">
      <h2 style={headerStyles}>
        ¿Interesado en proponer propiedades de inversión?
      </h2>
      <h3
        style={{ textAlign: "center", marginBottom: "20px", color: "#0C49B0" }}
      >
        DÉJANOS TUS DATOS
      </h3>
      <form>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "48%" }}>
            <label htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              type="text"
              placeholder="Escribe tu nombre"
              style={inputStyles}
            />
          </div>
          <div style={{ width: "48%" }}>
            <label htmlFor="apellido">Apellido</label>
            <input
              id="apellido"
              type="text"
              placeholder="Escribe tu apellido"
              style={inputStyles}
            />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "48%", marginTop: "30px" }}>
            <label htmlFor="email">Correo Electrónico</label>
            <input
              id="email"
              type="email"
              placeholder="Ejemplo: tu@correo.com"
              style={inputStyles}
            />
          </div>
          <div style={{ width: "48%", marginTop: "30px" }}>
            <label htmlFor="documento">Documento de Identidad</label>
            <input
              id="documento"
              type="text"
              placeholder="Escribe tu Documento de Identidad"
              style={inputStyles}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "30px",
            marginBottom:"50px"
          }}
        >
          <div style={{ width: "30%" }}>
            <label htmlFor="pais">Código del país</label>
            <select id="pais" style={inputStyles} defaultValue="mexico">
              <option value="mexico">México (+52)</option>
              {/* Add more countries as needed */}
            </select>
          </div>
          <div style={{ width: "30%" }}>
            <label htmlFor="telefono">¿Cuál es tu número móvil?</label>
            <input
              id="telefono"
              type="tel"
              placeholder="Escribe tu número móvil"
              style={inputStyles}
            />
          </div>
          <div style={{ width: "30%" }}>
            <label className="upload-file" htmlFor="file">
              <span> Sube tu título de propiedad</span>{" "}
              <svg
                width="39"
                height="39"
                viewBox="0 0 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  opacity="0.5"
                  cx="19.5"
                  cy="19.5"
                  r="19.5"
                  fill="#1A1A1A"
                />
                <path
                  d="M27 21H21V27H19V21H13V19H19V13H21V19H27V21Z"
                  fill="white"
                />
              </svg>
            </label>
            <input id="file" type="file" style={inputStyles} />
          </div>
        </div>
        <button
          className="w-25 mx-auto my-0 "
          type="submit"
          style={buttonStyles}
        >
          Enviar Datos
        </button>
      </form>
    </div>
  );
};
