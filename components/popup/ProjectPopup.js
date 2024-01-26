"use client";
import { context } from "@/context/context";
import { useContext } from "react";
import PopContainer from "./PopupContainer";
const ProjectPopup = () => {
  const { setPortfolioModal, portfolioModal } = useContext(context);
  return (
    <PopContainer nullValue={setPortfolioModal}>
      <div className="content">
        <div className="image">
          <img src="images/works/work9.jpg" alt="" />
        </div>
        <div className="desc">
          <div className="category">Graphics</div>
          <h4>Texas Hold 'Em Poker Game</h4>
          <p>
          Game simulation of the Texas Hold 'Em poker, built with the integration of Java's graphical user interface and implementation of the game's infrastructure. Includes poker hand evaluations with shuffle and cut functions.
          </p>
          <a href="https://github.com/IrfanEzani/texas-hold-em" className="btn" data-text="View Project">
            View Project
          </a>
        </div>
      </div>
    </PopContainer>
  );
};
export default ProjectPopup;
