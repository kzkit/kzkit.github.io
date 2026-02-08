import React from "react";
import CursorEffect from "./components/CursorEffect";

function App() {
  return (
    <>
      <CursorEffect />
      <main className="overlay">
        {/* Main Grid Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "20px",
            width: "100%",
            height: "100%",
          }}
        >
          {/* Hero Section */}
          <div style={{ gridColumn: "span 12", marginBottom: "40px" }}>
            <h1
              style={{
                fontSize: "clamp(3rem, 15vw, 12rem)",
                fontFamily: "GeistPixelGrid",
                lineHeight: "0.8",
                letterSpacing: "-0.04em",
                textTransform: "lowercase",
                wordBreak: "break-word",
              }}
            >
              Zhen Kit
              <br />
              Kong<span style={{ color: "#d68316ff" }}>_</span>
            </h1>
          </div>

          {/* Left Column - Details */}
          <div style={{ gridColumn: "span 12" }}>
            <p
              style={{
                fontFamily: "GeistPixelSquare",
                fontSize: "1.25rem",
                maxWidth: "400px",
                marginBottom: "40px",
                lineHeight: "1.4",
              }}
            >
              just building things i use
            </p>
          </div>

          {/* Projects Section */}
          <div
            style={{
              gridColumn: "1 / -1",
              marginTop: "60px",
            }}
          >
            {/* Project: Matcha */}
            <div
              style={{
                borderTop: "1px solid black",
                paddingTop: "20px",
                marginBottom: "40px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "20px",
                }}
              >
                <h2
                  style={{
                    fontFamily: "GeistPixelSquare",
                    fontSize: "2rem",
                    textTransform: "lowercase",
                    margin: 0,
                  }}
                >
                  matcha 🍵 (mac OS)
                </h2>
              </div>

              <p
                style={{
                  fontFamily: "GeistPixelSquare",
                  fontSize: "1rem",
                  marginBottom: "30px",
                  lineHeight: "1.5",
                  opacity: 0.9,
                }}
              >
                keeps your mac awake. timer-based, schedule-aware, or
                app-triggered. lightweight. written in swift.
              </p>

              {/* Screenshots Grid */}
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  marginTop: "20px",
                  flexWrap: "wrap",
                }}
              >
                <img
                  src="/matcha-settings.jpeg"
                  alt="Matcha menu bar interface"
                  style={{
                    maxWidth: "450px",
                    width: "100%",
                    height: "auto",
                    border: "1px solid rgba(0,0,0,0.1)",
                    borderRadius: "4px",
                  }}
                />
                <img
                  src="/matcha-menu.jpeg"
                  alt="Matcha settings window"
                  style={{
                    maxWidth: "350px",
                    width: "100%",
                    height: "auto",
                    border: "1px solid rgba(0,0,0,0.1)",
                    borderRadius: "4px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer
          style={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid black",
            paddingTop: "10px",
            fontFamily: "GeistPixelGrid",
            fontSize: "0.75rem",
            opacity: 0.6,
          }}
        >
          <div>© 2026 ZHENKITKONG // ALL RIGHTS RESERVED</div>
        </footer>
      </main>
    </>
  );
}

export default App;
