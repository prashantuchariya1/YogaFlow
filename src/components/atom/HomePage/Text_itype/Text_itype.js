import style from "./Text_itype.module.css";
// import React, { Component } from 'react'
// import { init } from 'ityped'

// export default class Text_itype extends Component {
//   componentDidMount(){
//     const myElement = document.querySelector('.myElement')
//     init(myElement, { showCursor: true, strings: ['Use with React'] })
//   }
//   render(){
//     return <div class="myElement"></div>
//   }
// }

import React, { useEffect, useRef } from "react";

import { init } from "ityped";

export default function Text_itype() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 3000,
      backSpeed: 200,

      strings: ["Body & Soul"],
    });
  }, []);

  return (
    
      <span>
        <span className={style.text_itype} ref={textRef}></span>
      </span>
    
  );
}
