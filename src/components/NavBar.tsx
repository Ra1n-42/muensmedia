import styles from "./Navbar.module.css";

interface Props {
  value: any;
}

function NavBar({ value }: Props) {
  const backgroundColors = [
    "rgb(255, 255, 255)",
    "rgb(200, 214, 230)",
    "rgb(150, 169, 192)",
    "rgb(80, 94, 120)",
    "rgb(0, 0, 0)",
  ];
  const navBarStyles = {
    backgroundColor: `rgba(255, 255, 255, ${value.scrollV})`,
  };

  const navAnchorStyles = {
    color: backgroundColors[value.scrollCount] ?? "rgb(0, 0, 0)",
  };
  return (
    <div style={navBarStyles} className={styles.navBar}>
      <div className={styles.navBarWrapper}>
        <a href="/" className={styles.brand}>
          {/* <img
            className={`${styles.logo} ${styles.white}`}
            src="https://uploads-ssl.webflow.com/5b8055e9a6d81643508ad243/619f84b3469a19231962dee0_webseite_logo_white.svg"
          /> */}
          <img
            className={`${styles.logo} ${styles.dark}`}
            src="https://uploads-ssl.webflow.com/5b8055e9a6d81643508ad243/619f67d7737ae800a3d45c79_test2.png"
          />
        </a>
        <div className={styles.navMenuWrapper}>
          <nav role="navigation" className={styles.navMenu}>
            <a href="/neos-agentur" style={navAnchorStyles}>
              <strong>NEOS</strong>
              <br />
              Webseiten
            </a>
            <a href="/wordpress-agentur-magdeburg" style={navAnchorStyles}>
              <strong>WordPress</strong>
              <br />
              Entwicklung
            </a>
            <a href="/go-digital" style={navAnchorStyles}>
              <strong>go-digital </strong>
              <br />
              Förderung
            </a>
            <a href="/it-security-workshop" style={navAnchorStyles}>
              <strong>
                IT-Sicher-
                <br />
                heitsschulung
              </strong>
            </a>
            <a href="/pflichtberatung-it-sicherheit" style={navAnchorStyles}>
              <strong>
                Pflichtberatung
                <br />
                IT-Sicherheit
              </strong>
            </a>
            <a href="/team" style={navAnchorStyles}>
              Unsere <br />
              <strong>Agentur</strong>
            </a>
          </nav>
          <a
            href="https://harmonizely.com/muensmedia/"
            className={`${styles.Button} ${styles.westButton}`}
          >
            <strong>
              Gespräch
              <br />
              vereinbaren
            </strong>
          </a>
          <a
            href="/karriere"
            className={`${styles.Button} ${styles.eastButton}`}
          >
            <strong>
              8 offene
              <br /> Jobs
            </strong>
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
