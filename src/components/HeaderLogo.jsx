// import logo from "./";

function HeaderLogo() {
  return (
    <header className="logo-container">
      <img
        src="./logo.png"
        style={{
          cursor: "pointer",
          height: "100px",
          width: "250px",
          objectFit: "contain",
          marginLeft: "10px",
          transition: "all 0.3s ease",
        }}
        alt="logo"
      />
    </header>
  );
}

export default HeaderLogo;
