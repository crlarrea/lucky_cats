import React from "react";
import { useIntersectionObserver } from "@uidotdev/usehooks";

export const Cats = ({ props: { imgURL, backgroundColour, textColour } }) => {
  console.log(backgroundColour);
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.5,
    root: null,
    rootMargin: "0px",
  });

  const updateStyle = ()=>{
    document.body.style.backgroundColor = backgroundColour;
    document.querySelector('h1').style.color = textColour
  }
  return (
    <article ref={ref}>
      <img src={imgURL} loading="lazy" />

      {entry?.isIntersecting && updateStyle()}
    </article>
  );
};
