import React, { useState, useEffect } from "react";

function LoginPhotoGallery() {
  const [login, setLogin] = useState(false);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!login) return;
    const loadImages = async () => {
      console.log("Fetching images...");
      try {
        const res = await fetch("https://picsum.photos/v2/list?page=1&limit=20");
        console.log("Fetch status:", res.status);
        if (!res.ok) throw new Error(`Network error: ${res.status}`);
        const data = await res.json();
        setImages(data);
        console.log("Fetched successfully!");
        console.log(data);
      } catch (err) {
        console.error("Error fetching images:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, [login]);

  if (!login) {
    return (
      <div style={styles.loginContainer}>
        <div style={styles.loginBox}>
          <h2 style={{ color: "#6e8efb", marginBottom: "25px" }}>Login</h2>
          <label style={styles.label}>Email Address</label>
          <input type="email" placeholder="Enter Email Address" style={styles.input} />

          <label style={styles.label}>Password</label>
          <input type="password" placeholder="Enter Password" style={styles.input} />

          <button onClick={() => setLogin(true)} style={styles.button}>
            Submit
          </button>
        </div>
      </div>
    );
  }
  return (
    <div style={styles.galleryContainer}>
      <div style={styles.galleryBox}>
        <h1 style={styles.heading}>Photo Gallery</h1>

        {loading && <p style={styles.loading}>Loading images...</p>}
        {error && <p style={styles.error}>Error fetching images: {error.message}</p>}

        {!loading && !error && (
          <div style={styles.imageGrid}>
            {images.map((imag) => (
              <div key={imag.id} style={styles.imageCard}>
                <img
                  src={imag.download_url}
                  alt={`Photo by ${imag.author}`}
                  style={styles.galleryImage}
                />
                <p style={styles.imageAuthor}>By: {imag.author}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
const styles = {
  loginContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#f4f6f9",
  },
  loginBox: {
    backgroundColor: "whitesmoke",
    padding: "35px 30px",
    borderRadius: "10px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
    width: "320px",
    textAlign: "center",
  },
  label: {
    display: "block",
    textAlign: "left",
    color: "#333",
    marginBottom: "6px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "18px",
    fontSize: "14px",
    outline: "none",
  },
  button: {
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
  },
  galleryContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    width: "100vw",
    backgroundColor: "#f4f6f9",
    overflowY: "auto",
  },
  galleryBox: {
    backgroundColor: "#fff",
    padding: "40px 30px",
    borderRadius: "12px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
    textAlign: "center",
    width: "90%",
    maxWidth: "1200px",
  },
  heading: {
    color: "#6e8efb",
    fontSize: "28px",
    marginBottom: "30px",
    marginTop:"10px"
  },
  imageGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "16px",
    justifyContent: "center",
  },
  imageCard: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    overflow: "hidden",
    transition: "transform 0.3s ease",
  },
  galleryImage: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    display: "block",
  },
  imageAuthor: {
    margin: "10px",
    fontSize: "14px",
    color: "#333",
  },
  loading: {
    color: "#555",
    fontSize: "16px",
  },
  error: {
    color: "red",
    fontSize: "16px",
  },
};

export default LoginPhotoGallery;
