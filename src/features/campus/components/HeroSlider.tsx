"use client";

import { useEffect } from "react";

import "@/../public/campus-ambassdor-assets/css/swiper.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";

export default function HeroSlider() {
  // Hero slider
  useEffect(() => {
    const fn_cs_slider = document.querySelectorAll(".fn_cs_slider");
    fn_cs_slider.forEach((element) => {
      const sliderTop = element.getElementsByClassName("slider_top")[0],
        sliderBottom = element.getElementsByClassName("slider_content"),
        speed = 6000;
      let activeIndex = 2;

      let myInterval = setInterval(function () {
        activeIndex++;
        activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
      }, speed);
      const prev = document.querySelector(".slider_nav .prev"),
        next = document.querySelector(".slider_nav .next"),
        li = element.getElementsByTagName("li");
      prev?.addEventListener("click", function (e) {
        e.preventDefault();
        clearInterval(myInterval);
        activeIndex--;
        activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        myInterval = setInterval(function () {
          activeIndex++;
          activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        }, speed);
        return false;
      });
      next?.addEventListener("click", (e) => {
        e.preventDefault();
        clearInterval(myInterval);
        activeIndex++;
        activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        myInterval = setInterval(function () {
          activeIndex--;
          activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        }, speed);
        return false;
      });
      for (let i = 0; i < li.length; i++) {
        const liElement = li[i];
        const getClass = liElement.getAttribute("class");
        if (getClass === "next") {
          activeIndex++;
        } else if (getClass === "prev") {
          activeIndex--;
        } else {
          return false;
        }
        clearInterval(myInterval);
        activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        myInterval = setInterval(function () {
          activeIndex++;
          activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        }, speed);
        return false;
      }
    });
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sliderDo = (sliderTop: any, sliderBottom: any, activeIndex: any) => {
    const topLength = sliderTop.getElementsByTagName("li").length;
    if (activeIndex > topLength) {
      activeIndex -= topLength;
    }
    let indexPrev = activeIndex - 1;
    let indexPrev2 = activeIndex - 2;
    let indexNext = activeIndex + 1;
    let indexNext2 = activeIndex + 2;
    if (indexPrev > topLength) {
      indexPrev -= topLength;
    }
    if (indexPrev2 > topLength) {
      indexPrev2 -= topLength;
    }
    if (indexNext > topLength) {
      indexNext -= topLength;
    }
    if (indexNext2 > topLength) {
      indexNext2 -= topLength;
    }
    if (indexPrev < 1) {
      indexPrev += topLength;
    }
    if (indexPrev2 < 1) {
      indexPrev2 += topLength;
    }
    if (activeIndex < 1) {
      activeIndex += topLength;
    }
    if (indexNext < 1) {
      indexNext += topLength;
    }
    if (indexNext2 < 1) {
      indexNext2 += topLength;
    }
    const li = sliderTop.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
      const element = li[i];
      element.classList.remove("prev", "prev2", "active", "next", "next2");
      // element.setAttribute(`data-index${indexNext}`);
    }
    sliderTop
      .querySelector('li[data-index="' + indexPrev2 + '"]')
      .classList.add("prev2");
    sliderTop
      .querySelector('li[data-index="' + indexPrev + '"]')
      .classList.add("prev");
    sliderTop
      .querySelector('li[data-index="' + activeIndex + '"]')
      .classList.add("active");
    sliderTop
      .querySelector('li[data-index="' + indexNext + '"]')
      .classList.add("next");
    sliderTop
      .querySelector('li[data-index="' + indexNext2 + '"]')
      .classList.add("next2");
    return activeIndex;
  };

  return (
    <section id="home" className="h-18 w-full">
      <div className="container">
        {/* Slider */}
        <div className="fn_cs_slider" data-responsive="on">
          <div className="slider_top">
            <Image
              width={100}
              height={100}
              src="/campus-ambassdor-assets/images/1x1.jpg"
              alt=""
            />
            <ul>
              <li className="prev" data-index={1}>
                <div className="item">
                  <Image
                    width={100}
                    height={100}
                    src="/campus-ambassdor-assets/images/1x1.jpg"
                    alt=""
                  />
                  <div className="item_in">
                    <div
                      className="img"
                      data-bg-img="/project-details-assets/images/1.jpg"
                      style={{
                        backgroundImage: `url('/project-details-assets/images/1.jpg')`,
                      }}
                    />
                  </div>
                </div>
              </li>
              <li className="active" data-index={2}>
                <div className="item">
                  <Image
                    width={100}
                    height={100}
                    src="/campus-ambassdor-assets/images/1x1.jpg"
                    alt=""
                  />
                  <div className="item_in">
                    <div
                      className="img"
                      data-bg-img="/project-details-assets/images/2.jpg"
                      style={{
                        backgroundImage: `url('/project-details-assets/images/2.jpg')`,
                      }}
                    />
                  </div>
                </div>
              </li>
              <li className="next" data-index={3}>
                <div className="item has_video">
                  <Image
                    width={100}
                    height={100}
                    src="/campus-ambassdor-assets/images/1x1.jpg"
                    alt=""
                  />

                  <div className="item_in">
                    <div
                      className="img"
                      data-bg-img="/project-details-assets/images/3.jpg"
                      style={{
                        backgroundImage: `url('/project-details-assets/images/3.jpg')`,
                      }}
                    />
                  </div>
                </div>
              </li>
              <li className="next2" data-index={4}>
                <div className="item">
                  <Image
                    width={100}
                    height={100}
                    src="/campus-ambassdor-assets/images/1x1.jpg"
                    alt=""
                  />
                  <div className="item_in">
                    <div
                      className="img"
                      data-bg-img="/project-details-assets/images/6.jpg"
                      style={{
                        backgroundImage: `url('/project-details-assets/images/6.jpg')`,
                      }}
                    />
                  </div>
                </div>
              </li>
              <li data-index={5}>
                <div className="item">
                  <Image
                    width={100}
                    height={100}
                    src="/campus-ambassdor-assets/images/1x1.jpg"
                    alt=""
                  />
                  <div className="item_in">
                    <div
                      className="img"
                      data-bg-img="/project-details-assets/images/1.jpg"
                      style={{
                        backgroundImage: `url('/project-details-assets/images/1.jpg')`,
                      }}
                    />
                  </div>
                </div>
              </li>
              <li data-index={6}>
                <div className="item">
                  <Image
                    width={100}
                    height={100}
                    src="/campus-ambassdor-assets/images/1x1.jpg"
                    alt=""
                  />
                  <div className="item_in">
                    <div
                      className="img"
                      data-bg-img="/project-details-assets/images/2.jpg"
                      style={{
                        backgroundImage: `url('/project-details-assets/images/2.jpg')`,
                      }}
                    />
                  </div>
                </div>
              </li>
              <li className="prev2" data-index={7}>
                <div className="item">
                  <Image
                    width={100}
                    height={100}
                    src="/campus-ambassdor-assets/images/1x1.jpg"
                    alt=""
                  />
                  <div className="item_in">
                    <div
                      className="img"
                      data-bg-img="/project-details-assets/images/3.jpg"
                      style={{
                        backgroundImage: `url('/project-details-assets/images/3.jpg')`,
                      }}
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="slider_nav">
            <a href="#" className="prev">
              <span className="circle" />
              <span className="icon">
                <MdArrowBackIos className="fn__svg" />
              </span>
              <span className="circle" />
            </a>
            <a href="#" className="next">
              <span className="circle" />
              <span className="icon">
                <MdArrowForwardIos className="fn__svg" />
              </span>
              <span className="circle" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
