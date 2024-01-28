"use client";
import { context } from "@/context/context";
import { useContext } from "react";
import PopContainer from "./PopupContainer";
const ProjectPopup = () => {
  const { setPortfolioModal, portfolioModal, currentPopupId } = useContext(context);
  console.log('Current Popup ID in ProjectPopup:', currentPopupId);

  const renderContentBasedOnId = () => {
    switch (currentPopupId) {
      case "popup-1":
        console.log(currentPopupId);
        return (
          <div className="content">
            <div className="image">
              <img src="images/works/work9.jpg" alt="" />
            </div>
            <div className="desc">
              <div className="category">Graphics</div>
              <h4>Texas Hold 'Em Poker Game</h4>
              <p>
                Game simulation of the Texas Hold 'Em poker, built with the
                integration of Java's graphical user interface and
                implementation of the game's infrastructure. Includes poker hand
                evaluations with shuffle and cut functions.
              </p>
              <a
                href="https://github.com/IrfanEzani/texas-hold-em"
                className="btn"
                data-text="View Project">
                View Project
              </a>
            </div>
          </div>
        );
      case "popup-2":
        console.log(currentPopupId);
        return (
          <div className="content">
          <div className="image">
            <img src="images/works/work9.jpg" alt="" />
          </div>
          <div className="desc">
            <div className="category">Test 2</div>
            <h4>Test 2</h4>
            <p>
            Test 2
            </p>
            <a
              href="https://github.com/IrfanEzani/texas-hold-em"
              className="btn"
              data-text="View Project">
              View Project
            </a>
          </div>
        </div>
        );
      default:
        console.log(currentPopupId);
        return (
          <div className="content">
          <div className="image">
            <img src="images/works/work9.jpg" alt="" />
          </div>
          <div className="desc">
            <div className="category">Test empty</div>
            <h4>Test empty</h4>
            <p>
            Test empty
            </p>
            <a
              href="https://github.com/IrfanEzani/texas-hold-em"
              className="btn"
              data-text="View Project">
              View Project
            </a>
          </div>
        </div>
        );
    }
  };

  return (
    <PopContainer nullValue={setPortfolioModal}>
      {renderContentBasedOnId()}
    </PopContainer>
  );
};
export default ProjectPopup;
