import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Load } from "../style/loading.style";

const Loading = () => {
  const Text:any = useRef();
  const Text1: any = useRef();
  const Text2: any = useRef();
  const Text3: any = useRef();
  const hide: any = useRef();

    useEffect(() => {
    gsap.to(Text.current, { y: "0%", delay: .7 });
    gsap.to(Text1.current, { y: "0%", delay: .8 });
    gsap.to(Text2.current, { y: "0%", delay: .9 });
    gsap.to(Text3.current, { y: "0%", delay: 1 });

    gsap.to(hide.current, { y: '-100%', delay: 2 });
     
    }, [])
    

  return (
    <Load ref={hide}>
      <div className="hide">
        <img src="/logo3.png" alt="" ref={Text} className="u" />
        <img src="/logo2.png" alt="" ref={Text1} className="d" />
        <img src="/logo3.png" alt="" ref={Text2} className="u" />
        <img src="/logo1.png" alt="" ref={Text3} className="x" />
      </div>
    </Load>
  );
};

export default Loading;
