import NavBar from "./components/NavBar";
import styles from "./components/App.module.css";
import { WheelEvent, useEffect, useState } from "react";

function isBottomOfPage() {
  return (
    window.scrollY + window.innerHeight >= document.documentElement.scrollHeight
  );
}
function isTopOfPage() {
  return window.scrollY === 0;
}
function App() {
  const [scrollValue, setScrollValue] = useState({
    scrollV: 0,
    scrollCount: 0,
  });

  const handleWheelEvent = (e: WheelEvent) => {
    const newValue = -(e.deltaY / 100);
    const step = 0.4;
    if (newValue === -1) {
      //  nach unten
      if (isBottomOfPage()) return;
      setScrollValue({
        ...scrollValue,
        scrollV: scrollValue.scrollV + step,
        scrollCount: scrollValue.scrollCount + 1,
      });
    } else {
      // bach oben
      if (scrollValue.scrollV - step > 0) {
        setScrollValue({
          ...scrollValue,
          scrollV: scrollValue.scrollV - step,
          scrollCount: scrollValue.scrollCount - 1,
        });
      }
    }
  };
  interface DelayedContentProps {
    delay: number; // test here
  }

  function DelayedContent({ delay }: DelayedContentProps) {
    useEffect(() => {
      const delayTimer = setTimeout(() => {}, delay);

      return () => {
        clearTimeout(delayTimer);
      };
    }, [delay]);

    return null;
  }
  return (
    <div className={styles.pageWrapper} onWheel={handleWheelEvent}>
      <NavBar value={scrollValue} />
      <div id={styles.Hero} className={`${styles.sectionMain}`}>
        <div className={`${styles.wrapper} ${styles.flexEnd}`}>
          <div className={styles.heroIntro}>
            <div className={`${styles.heroHead} ${styles.white}`}>
              WEBENTWICKLUNG FÜR VORAUSSCHAUENDE
            </div>
            <div className={`${styles.heroTitle} ${styles.white}`}>
              <h1>Wir machen Sie zum Gewinner im digitalen Wandel.</h1>
            </div>
            <div className={`${styles.heroMainText} ${styles.white}`}>
              <h3>
                Mit qualitativ hochwertigen{" "}
                <strong>
                  Webseiten und Webapplikationen helfen wir Ihnen die Chancen
                  des digitalen Marktes zu nutzen.
                </strong>
              </h3>
            </div>
            <div className={`${styles.heroButton} ${styles.white}`}>
              <a href="#lol">Jetzt kennenlernen</a>
            </div>
          </div>
        </div>
        {<div className={styles.heroImage}></div>}
      </div>
      <div className={styles.section}>Sektion</div>
      <div className={styles.section}>Sektion</div>
    </div>
  );
}

export default App;
