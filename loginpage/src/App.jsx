import React, { useState } from "react";
import LoginPage from "./LoginPage";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f4f6f9",
      }}
    >
      <div
        style={{
          backgroundColor: "whitesmoke",
          padding: "35px 30px",
          borderRadius: "10px",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
          width: "320px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#6e8efb", marginBottom: "25px" }}>Login</h2>

        <label
          style={{
            display: "block",
            textAlign: "left",
            color: "#333",
            marginBottom: "6px",
            fontWeight: "bold",
          }}
        >
          Email Address
        </label>
        <input
          type="email"
          placeholder="Enter Email Address"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginBottom: "18px",
            fontSize: "14px",
            outline: "none",
          }}
        />

        <label
          style={{
            display: "block",
            textAlign: "left",
            color: "#333",
            marginBottom: "6px",
            fontWeight: "bold",
          }}
        >
          Password
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginBottom: "20px",
            fontSize: "14px",
            outline: "none",
          }}
        />

        <button
          onClick={() => setLogin(true)}
          style={{
            backgroundColor: "#6e8efb",
            color: "white",
            padding: "10px",
            width: "100%",
            border: "none",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: "15px",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          Submit
        </button>

        {login && (
          <LoginPage>
            <div
              style={{
                marginTop: "25px",
                backgroundColor: "#fff",
                border: "2px solid #6e8efb",
                borderRadius: "8px",
                padding: "15px",
              }}
            >
              <div
                style={{
                  color: "#333",
                  fontWeight: "bold",
                  fontSize: "18px",
                  padding: "10px",
                  margin: "10px 0 20px 0",
                  border: "2px solid #fff",
                  backgroundColor: "#fff",
                }}
              >
                Login Successful
              </div>
              <button
                onClick={() => setLogin(false)}
                style={{
                  backgroundColor: "#6e8efb",
                  color: "white",
                  padding: "10px 20px",
                  width: "100%",
                  border: "none",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  fontSize: "15px",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
              >
                Close
              </button>
            </div>
          </LoginPage>
        )}
      </div>
    </div>
  );
}

export default App;
