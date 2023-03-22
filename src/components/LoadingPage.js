import React, { useRef, useEffect } from "react";
import { gsap } from 'gsap/dist/gsap';


export default function Loading() {
    const loadingBar = useRef(null);
    const loadingPage = useRef(null);

    useEffect(() => {
        const timeLine = gsap.timeline();

        timeLine.to(loadingBar.current, {
            width: '100%',
            duration: 4,
            ease: 'expo. inOut',
        });

        timeLine.to(loadingBar.current, { opacity: "0", duration: 0.2 });
        timeLine.to(loadingPage.current, {
            opacity: 0,
            display: "none",
            duration: 0.5,
        });
    });

    return (
      <section ref={loadingPage} className="loading_section">
        <div className="loading_wrapper">
          <div className="bar" ref={loadingBar}></div>
        </div>
      </section>
    );

}