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
                  className={`c-pointer ${activeBtn("test-category")}`}
                  onClick={handleFilterKeyChange("test-category")}>
                  <input
                    type="radio"
                    name="fl_radio"
                    defaultValue=".test-category"
                  />
                  Games
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="Music"
                  className={`c-pointer ${activeBtn("f-music")}`}
                  onClick={handleFilterKeyChange("f-music")}>
                  <input type="radio" name="fl_radio" defaultValue=".f-music" />
                  Music
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="Links"
                  className={`c-pointer ${activeBtn("f-links")}`}
                  onClick={handleFilterKeyChange("f-links")}>
                  <input type="radio" name="fl_radio" defaultValue=".f-links" />
                  Links
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="Content"
                  className={`c-pointer ${activeBtn("f-content")}`}
                  onClick={handleFilterKeyChange("f-content")}>
                  <input
                    type="radio"
                    name="fl_radio"
                    defaultValue=".f-content"
                  />
                  Content
                </label>
              </div>
            </div>
          </div>
          <div className="box-items portfolio-items">
            <div className="box-item f-content">
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
                  <img src="images/works/work3.jpg" alt />
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
                <div className="category">Content</div>
                <a
                  href="#popup-1"
                  className="name has-popup-media"
                  onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal(true);
                    setCurrentPopupId("popup-1");
                  }}>
                  Cardboard Box
                </a>
              </div>
            </div>
            <div className="box-item f-content">
              <div className="image">
                <a
                  href="#popup-2"
                  className="has-popup-media"
                  onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal(true);
                    setCurrentPopupId("popup-2");
                    console.log("Setting currentPopupId to:", "popup-2"); // Adjust accordingly
                  }}>
                  <img src="images/works/work3.jpg" alt />
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
                <div className="category">Content</div>
                <a
                  href="#popup-2"
                  className="name has-popup-media"
                  onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal(true);
                    setCurrentPopupId("popup-2");
                  }}>
                  Cardboard Box
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
