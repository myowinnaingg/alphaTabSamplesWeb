"use client"

import { useEffect, useRef, useState } from "react";
import { AlphaTabApi, Settings } from "@coderline/alphatab";

export default function Home() {
  const elementRef = useRef<HTMLDivElement>(null);
  const [api, setApi] = useState<AlphaTabApi>();

  useEffect(() => {
    const api = new AlphaTabApi(elementRef.current!, {
      core: {
        fontDirectory: '/alphatab/font/'
      },
      player: {
        enablePlayer: true,
        enableCursor: true,
        enableUserInteraction: true,
        soundFont: '/alphatab/soundfont/sonivox.sf2'
      }
    } as Settings);

    api.tex(`
      \\title "Canon Rock"
      \\subtitle "JerryC"
      \\tempo 90
      .
      :2 19.2{v f} 17.2{v f} |
      15.2{v f} 14.2{v f} |
      12.2{v f} 10.2{v f} |
      12.2{v f} 14.2{v f}.4 :8 15.2 17.2 |
      14.1.2 :8 17.2 15.1 14.1{h} 17.2 |
      15.2{v d}.4 :16 17.2{h} 15.2 :8 14.2 14.1 17.1{b (0 4 4 0)}.4 |
      15.1.8 :16 14.1{tu 3} 15.1{tu 3} 14.1{tu 3} :8 17.2 15.1 14.1 :16 12.1{tu 3} 14.1{tu 3} 12.1{tu 3} :8 15.2 14.2 |
      12.2 14.3 12.3 15.2 :32 14.2{h} 15.2{h} 14.2{h} 15.2{h} 14.2{h} 15.2{h} 14.2{h} 15.2{h} 14.2{h} 15.2{h} 14.2{h} 15.2{h} 14.2{h} 15.2{h} 14.2{h} 15.2{h}
    `);
    
    setApi(api);

    return () => {
      console.log('destroy', elementRef, api);
      api.destroy();
    }
  }, []);

  function playPause() {
    api?.playPause();
  }
  
  return (
    <>
      <main>
        <button onClick={() => playPause()}>Play/Pause</button>
        <div ref={elementRef}></div>
      </main>
    </>
  );
}
