"use client";
import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
const Blog = ({ dark }) => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".blog-items", {
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

  const blogs = [
    {
      id: 1,
      title: "Mandelbrot Set and its bigger implication",
      img: "images/mandelbrot-set.jpg",
      date: "January 31, 2024",
    },
    /* {
      id: 2,
      title: "Test",
      img: "images/works/work2.jpg",
      date: "14 June 2016",
    },
    {
      id: 3,
      title: "Test",
      img: "images/works/work3.jpg",
      date: "14 June 2016",
    }, */
  ];

  return (
    <div className="section blog section_" id="section-blog">
      <div className="content">
        <div className="title">
          <div className="title_inner">Latest Posts</div>
        </div>
        <div className="box-items blog-items">
          {blogs.map((blog) => (
            <div className="box-item" key={blog.id}>
              <div className="image">
                <Link href={`blog_inner${dark ? "-dark" : ""}`}>
                  <img src={blog.img} alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-ios-book-outline" />
                      </span>
                    </span>
                  </span>
                </Link>
              </div>
              <div className="desc">
                <div className="date">{blog.date}</div>
                <Link
                  href={`${dark ? "-dark" : ""}`}
                  className="name"
                >
                  {blog.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Blog;
