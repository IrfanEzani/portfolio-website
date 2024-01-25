"use client";

export const Knowledge = () => {
  return (
    <div className="section skills">
      <div className="content">
        <div className="title">
          <div className="title_inner">Skillset</div>
        </div>
        <div className="skills list">
          <ul>
            <li>
              <div className="name">Website Development: HTML, CSS, Javascript, React</div>
            </li>
            <li>
              <div className="name">Data Science: Python, R, SQL</div>
            </li>
            <li>
              <div className="name">Data Visualization: Power BI, Tableau</div>
            </li>
            <li>
              <div className="name">Programming: Java, C++, Ruby, Ocaml, Rust</div>
            </li>
            <li>
              <div className="name">Search Engine Optimization</div>
            </li>
            <li>
              <div className="name">Large Language Models Manipulation</div>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

import { glitcheUtils } from "@/utility";
import { Fragment, useEffect } from "react";
const Skills = ({
  design = true,
  languages = true,
  coding = true,
  knowledge = true,
}) => {
  return (
    <Fragment>
      {knowledge && <Knowledge />}
    </Fragment>
  );
};
export default Skills;
