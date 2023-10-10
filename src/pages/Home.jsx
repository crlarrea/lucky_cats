import React from "react";
import { cats } from "../assets/data/Data";
import { Cats } from "../components/Cats";
export const Home = () => {
  return (
    <section className="home">
      <h1>
        招き猫 <span>Manekineko</span>
      </h1>
      {cats.map((entry, index) => {
        return <Cats key={`cat-${index}`} props={entry} />;
      })}
    </section>
  );
};
