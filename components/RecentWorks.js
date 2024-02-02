"use client";
import { context } from "@/context/context";
import FsLightbox from "fslightbox-react";

import Isotope from "isotope-layout";
import {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const galleryImages = {
  1: [
    "images/works/work1.jpg",
    "images/works/work2.jpg",
    "images/works/work3.jpg",
    "images/works/work4.jpg",
  ],
  2: [
    "images/works/work5.jpg",
    "images/works/work2.jpg",
    "images/works/work3.jpg",
    "images/works/work4.jpg",
  ],
};

const RecentWorks = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-items", {
        itemSelector: ".box-item",
        // layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".box-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    // return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value) => (value === filterKey ? "glitch-effect" : "");

  const [activeGallaryImage, setActiveGallaryImage] = useState(1);
  const [gallery, setGallery] = useState(false);
  const [currentPopupId, setCurrentPopupId] = useState(null);
  const { modalToggle, setPortfolioModal } = useContext(context);

  return (
    <Fragment>
      <FsLightbox
        toggler={gallery}
        sources={galleryImages[activeGallaryImage]}
      />
      <div className="section works section_" id="section-works">
        <div className="content">
          <div className="title">
            <div className="title_inner">Previous Works</div>
          </div>
          <div className="filter-menu">
            <div className="filters">
              <div className="btn-group">
                <label
                  data-text="All"
                  className={`c-pointer ${activeBtn("*")}`}
                  onClick={handleFilterKeyChange("*")}>
                  <input
                    type="radio"
                    name="fl_radio"
                    defaultValue=".box-item"
                  />
                  All
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="Game"
                  className={`c-pointer ${activeBtn("ai")}`}
                  onClick={handleFilterKeyChange("ai")}>
                  <input
                    type="radio"
                    name="fl_radio"
                    defaultValue=".ai"
                  />
                  AI & ML
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="Music"
                  className={`c-pointer ${activeBtn("data-analysis")}`}
                  onClick={handleFilterKeyChange("data-analysis")}>
                  <input type="radio" name="fl_radio" defaultValue=".data-analysis" />
                  Data Science
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="Links"
                  className={`c-pointer ${activeBtn("dsa")}`}
                  onClick={handleFilterKeyChange("dsa")}>
                  <input type="radio" name="fl_radio" defaultValue=".dsa" />
                  Data Structures
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="Content"
                  className={`c-pointer ${activeBtn("game-dev")}`}
                  onClick={handleFilterKeyChange("game-dev")}>
                  <input
                    type="radio"
                    name="fl_radio"
                    defaultValue=".game-dev"
                  />
                  Game Development
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="Content"
                  className={`c-pointer ${activeBtn("lang")}`}
                  onClick={handleFilterKeyChange("lang")}>
                  <input
                    type="radio"
                    name="fl_radio"
                    defaultValue=".lang"
                  />
                  Language Processing
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="Content"
                  className={`c-pointer ${activeBtn("web-dev")}`}
                  onClick={handleFilterKeyChange("web-dev")}>
                  <input
                    type="radio"
                    name="fl_radio"
                    defaultValue=".web-dev"
                  />
                  Web Development
                </label>
              </div>
            </div>
          </div>
          <div className="box-items portfolio-items">
            <div className="box-item ai">
              <div className="image">
                <a
                  href="https://github.com/IrfanEzani/script-gpt"
                  className="has-popup-media"
                  target="_blank"
                  /* onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal(true);
                    setCurrentPopupId("popup-1");
                    console.log("Setting currentPopupId to:", "popup-1"); // Adjust accordingly
                  }}*/> 
                  <img src='images/works/work1.jpg' alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-ios-plus-empty" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Artificial Intelligence</div>
                <a
                  href="https://github.com/IrfanEzani/script-gpt"
                  className="name has-popup-media"
                  target="_blank">
                  ScriptGPT
                </a>
              </div>
            </div>

            <div className="box-item ai">
              <div className="image">
                <a
                  href="https://github.com/IrfanEzani/billboard-wikipedia-scrapper"
                  className="has-popup-media"
                  target="_blank"
                  /* onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal(true);
                    setCurrentPopupId("popup-1");
                    console.log("Setting currentPopupId to:", "popup-1"); // Adjust accordingly
                  }}*/> 
                  <img src='images/works/work2.png' alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-ios-plus-empty" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Artificial Intelligence</div>
                <a
                  href="https://github.com/IrfanEzani/script-gpt"
                  className="name has-popup-media"
                  target="_blank">
                  Billboard Scraper
                </a>
              </div>
            </div>

            <div className="box-item data-analysis">
              <div className="image">
                <a
                  href="https://github.com/IrfanEzani/county-house-price-analysis"
                  className="has-popup-media"
                  target="_blank"
                  /* onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal(true);
                    setCurrentPopupId("popup-1");
                    console.log("Setting currentPopupId to:", "popup-1"); // Adjust accordingly
                  }}*/> 
                  <img src='images/works/work3.png' alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-ios-plus-empty" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Data Analysis</div>
                <a
                  href="https://github.com/IrfanEzani/county-house-price-analysis"
                  className="name has-popup-media"
                  target="_blank">
                  King County House Price Analysis
                </a>
              </div>
            </div>

            <div className="box-item data-analysis">
              <div className="image">
                <a
                  href="https://github.com/IrfanEzani/AITA-data-exploration"
                  className="has-popup-media"
                  target="_blank"
                  /* onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal(true);
                    setCurrentPopupId("popup-1");
                    console.log("Setting currentPopupId to:", "popup-1"); // Adjust accordingly
                  }}*/> 
                  <img src='images/works/work4.jpeg' alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-ios-plus-empty" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Data Science</div>
                <a
                  href="https://github.com/IrfanEzani/AITA-data-exploration"
                  className="name has-popup-media"
                  target="_blank">
                  r/AITA and Ethics Study
                </a>
              </div>
            </div>

            <div className="box-item dsa">
              <div className="image">
                <a
                  href="https://github.com/IrfanEzani/maze-solver"
                  className="has-popup-media"
                  target="_blank"
                  /* onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal(true);
                    setCurrentPopupId("popup-1");
                    console.log("Setting currentPopupId to:", "popup-1"); // Adjust accordingly
                  }}*/> 
                  <img src='images/works/work5.png' alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-ios-plus-empty" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Data Structures</div>
                <a
                  href="https://github.com/IrfanEzani/maze-solver"
                  className="name has-popup-media"
                  target="_blank">
                  Maze Solver
                </a>
              </div>
            </div>

            <div className="box-item dsa">
              <div className="image">
                <a
                  href="https://github.com/IrfanEzani/target-identifier"
                  className="has-popup-media"
                  target="_blank"
                  /* onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal(true);
                    setCurrentPopupId("popup-1");
                    console.log("Setting currentPopupId to:", "popup-1"); // Adjust accordingly
                  }}*/> 
                  <img src='images/works/work6.png' alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-ios-plus-empty" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Data Structures</div>
                <a
                  href="https://github.com/IrfanEzani/target-identifier"
                  className="name has-popup-media"
                  target="_blank">
                  Target Identifier
                </a>
              </div>
            </div>

            <div className="box-item game-dev">
              <div className="image">
                <a
                  href="https://github.com/IrfanEzani/texas-hold-em"
                  className="has-popup-media"
                  target="_blank"
                  /* onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal(true);
                    setCurrentPopupId("popup-1");
                    console.log("Setting currentPopupId to:", "popup-1"); // Adjust accordingly
                  }}*/> 
                  <img src='images/works/work7.png' alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-ios-plus-empty" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Game Development</div>
                <a
                  href="https://github.com/IrfanEzani/texas-hold-em"
                  className="name has-popup-media"
                  target="_blank">
                  Texas Hold 'Em
                </a>
              </div>
            </div>

            <div className="box-item game-dev">
              <div className="image">
                <a
                  href="https://github.com/IrfanEzani/tetris"
                  className="has-popup-media"
                  target="_blank"
                  /* onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal(true);
                    setCurrentPopupId("popup-1");
                    console.log("Setting currentPopupId to:", "popup-1"); // Adjust accordingly
                  }}*/> 
                  <img src='images/works/tetris.png' alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-ios-plus-empty" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Game Development</div>
                <a
                  href="https://github.com/IrfanEzani/tetris"
                  className="name has-popup-media"
                  target="_blank">
                  Tetris
                </a>
              </div>
            </div>

            <div className="box-item game-dev">
              <div className="image">
                <a
                  href="https://github.com/IrfanEzani/blackjack-game"
                  className="has-popup-media"
                  target="_blank"
                  /* onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal(true);
                    setCurrentPopupId("popup-1");
                    console.log("Setting currentPopupId to:", "popup-1"); // Adjust accordingly
                  }}*/> 
                  <img src='images/works/blackjack-game.png' alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-ios-plus-empty" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Game Development</div>
                <a
                  href="https://github.com/IrfanEzani/blackjack-game"
                  className="name has-popup-media"
                  target="_blank">
                  Blackjack
                </a>
              </div>
            </div>

            <div className="box-item lang">
              <div className="image">
                <a
                  href="https://github.com/IrfanEzani/language-processor"
                  className="has-popup-media"
                  target="_blank"
                  /* onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal(true);
                    setCurrentPopupId("popup-1");
                    console.log("Setting currentPopupId to:", "popup-1"); // Adjust accordingly
                    
                  }}*/> 
                  <img src='images/works/word-weaver.png' alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-ios-plus-empty" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Language Transformation</div>
                <a
                  href="https://github.com/IrfanEzani/language-processor"
                  className="name has-popup-media"
                  target="_blank">
                  WordWeaver  
                </a>
              </div>
            </div>

            <div className="box-item lang">
              <div className="image">
                <a
                  href="https://github.com/IrfanEzani/NFA-library"
                  className="has-popup-media"
                  target="_blank"
                  /* onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal(true);
                    setCurrentPopupId("popup-1");
                    console.log("Setting currentPopupId to:", "popup-1"); // Adjust accordingly
                    
                  }}*/> 
                  <img src='images/works/nfa.png' alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-ios-plus-empty" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Regex</div>
                <a
                  href="https://github.com/IrfanEzani/NFA-library"
                  className="name has-popup-media"
                  target="_blank">
                  NFA Library  
                </a>
              </div>
            </div>

            <div className="box-item lang">
              <div className="image">
                <a
                  href="https://github.com/IrfanEzani/microcaml-interpreter"
                  className="has-popup-media"
                  target="_blank"
                  /* onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal(true);
                    setCurrentPopupId("popup-1");
                    console.log("Setting currentPopupId to:", "popup-1"); // Adjust accordingly
                    
                  }}*/> 
                  <img src='images/works/interpreter.jpg' alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-ios-plus-empty" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Interpreter</div>
                <a
                  href="https://github.com/IrfanEzani/microcaml-interpreter"
                  className="name has-popup-media"
                  target="_blank">
                  microCaml Interpreter  
                </a>
              </div>
            </div>

            <div className="box-item web-dev">
              <div className="image">
                <a
                  href="https://github.com/IrfanEzani/base-initiative-website"
                  className="has-popup-media"
                  target="_blank"
                  /* onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal(true);
                    setCurrentPopupId("popup-1");
                    console.log("Setting currentPopupId to:", "popup-1"); // Adjust accordingly
                    
                  }}*/> 
                  <img src='images/works/base.png' alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-ios-plus-empty" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Web Dev</div>
                <a
                  href="https://github.com/IrfanEzani/base-initiative-website"
                  className="name has-popup-media"
                  target="_blank">
                  base.initiative  
                </a>
              </div>
            </div>

            <div className="box-item web-dev">
              <div className="image">
                <a
                  href="https://github.com/IrfanEzani/mock-college-website"
                  className="has-popup-media"
                  target="_blank"
                  /* onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal(true);
                    setCurrentPopupId("popup-1");
                    console.log("Setting currentPopupId to:", "popup-1"); // Adjust accordingly
                    
                  }}*/> 
                  <img src='images/works/mock.png' alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-ios-plus-empty" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Web Dev</div>
                <a
                  href="https://github.com/IrfanEzani/mock-college-website"
                  className="name has-popup-media"
                  target="_blank">
                  Mock Alumni Website  
                </a>
              </div>
            </div>


            <div className="box-item">
              <div className="image">
                <a
                  href="https://github.com/IrfanEzani/mandelbrot-visualization"
                  className="has-popup-media"
                  target="_blank"
                  /* onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal(true);
                    setCurrentPopupId("popup-1");
                    console.log("Setting currentPopupId to:", "popup-1"); // Adjust accordingly
                  }}*/> 
                  <img src='images/works/work8.png' alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-ios-plus-empty" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Fractal Rendering</div>
                <a
                  href="https://github.com/IrfanEzani/mandelbrot-visualization"
                  className="name has-popup-media"
                  target="_blank">
                  Mandelbrot Set Visualization
                </a>
              </div>
            </div>
            
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};

export default RecentWorks;
