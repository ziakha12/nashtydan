"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [690],
  {
    690: function (e, s, l) {
      l.d(s, {
        default: function () {
          return w;
        },
      });
      var a = l(7437),
        i = l(7323),
        r = l.n(i);
      let c = {
        animation() {
          r().init();
        },
        fixedHeader() {
          window.addEventListener("scroll", function () {
            if (document.querySelectorAll(".main-header").length) {
              var e = document.documentElement.scrollTop,
                s = document.querySelector(".main-header");
              e >= 100
                ? s.classList.add("fixed-header")
                : s.classList.remove("fixed-header");
            }
          });
        },
      };
      var d = l(2265),
        t = l(2204),
        n = l.n(t),
        o = l(7138),
        h = (e) => {
          let { footer: s = 1 } = e;
          switch (s) {
            case 1:
            default:
              return (0, a.jsx)(x, {});
            case 2:
              return (0, a.jsx)(j, {});
            case 3:
              return (0, a.jsx)(f, {});
            case 5:
              return (0, a.jsx)(m, {});
            case 6:
              return (0, a.jsx)(u, {});
          }
        };
      let x = () =>
          (0, a.jsxs)("footer", {
            className: "main-footer bgc-black rel z-1",
            style: {
              backgroundImage: "url(assets/images/background/footer-bg.png)",
            },
            children: [
              (0, a.jsx)("div", {
                className: "footer-top py-130 rpy-100",
                children: (0, a.jsx)("div", {
                  className: "container",
                  children: (0, a.jsx)("div", {
                    className: "row justify-content-center",
                    children: (0, a.jsxs)("div", {
                      className: "col-xl-7 col-lg-9",
                      "data-aos": "fade-up",
                      "data-aos-duration": 1500,
                      "data-aos-offset": 50,
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "section-title text-white text-center mb-35",
                          children: [
                            (0, a.jsx)("span", {
                              className: "sub-title mb-10",
                              children: "join our newsletter",
                            }),
                            (0, a.jsx)("h2", {
                              children:
                                "subscribe follow our newsletter to get more updates",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("form", {
                          className: "newsletter-form",
                          action: "#",
                          children: [
                            (0, a.jsx)("label", {
                              htmlFor: "news-email",
                              children: (0, a.jsx)("i", {
                                className: "fas fa-envelope",
                              }),
                            }),
                            (0, a.jsx)("input", {
                              id: "news-email",
                              type: "email",
                              placeholder: "Email Address",
                              required: "",
                            }),
                            (0, a.jsxs)("button", {
                              className: "theme-btn",
                              type: "submit",
                              children: [
                                "Subscribe ",
                                (0, a.jsx)("i", {
                                  className: "far fa-arrow-alt-right",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
              (0, a.jsx)("div", {
                className: "widget-area pb-70",
                children: (0, a.jsx)("div", {
                  className: "container",
                  children: (0, a.jsxs)("div", {
                    className: "row justify-content-between",
                    children: [
                      (0, a.jsx)("div", {
                        className: "col-xl-3 col-lg-4 col-sm-6",
                        "data-aos": "fade-up",
                        "data-aos-duration": 1500,
                        "data-aos-offset": 0,
                        children: (0, a.jsxs)("div", {
                          className: "footer-widget footer-text",
                          children: [
                            (0, a.jsx)("div", {
                              className: "footer-logo mb-25",
                              children: (0, a.jsx)(o.default, {
                                href: "/",
                                children: (0, a.jsx)("img", {
                                  src: "assets/images/logos/logo.jpg",
                                  alt: "Logo",
                                }),
                              }),
                            }),
                            (0, a.jsx)("p", {
                              children:
                                "Temporibus autem quibusdam officiis aut rerum necessitatibus eveniet voluta repudiandae molestiae recusandae",
                            }),
                            (0, a.jsxs)("div", {
                              className: "social-style-one mt-15",
                              children: [
                                (0, a.jsx)(o.default, {
                                  href: "contact",
                                  children: (0, a.jsx)("i", {
                                    className: "fab fa-facebook-f",
                                  }),
                                }),
                                (0, a.jsx)(o.default, {
                                  href: "contact",
                                  children: (0, a.jsx)("i", {
                                    className: "fab fa-twitter",
                                  }),
                                }),
                                (0, a.jsx)(o.default, {
                                  href: "contact",
                                  children: (0, a.jsx)("i", {
                                    className: "fab fa-linkedin-in",
                                  }),
                                }),
                                (0, a.jsx)(o.default, {
                                  href: "contact",
                                  children: (0, a.jsx)("i", {
                                    className: "fab fa-instagram",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "col-xl-4 col-lg-5 col-sm-6",
                        "data-aos": "fade-up",
                        "data-aos-delay": 50,
                        "data-aos-duration": 1500,
                        "data-aos-offset": 0,
                        children: (0, a.jsxs)("div", {
                          className: "footer-widget footer-links",
                          children: [
                            (0, a.jsx)("div", {
                              className: "footer-title",
                              children: (0, a.jsx)("h5", {
                                children: "popular food",
                              }),
                            }),
                            (0, a.jsxs)("ul", {
                              className: "two-column",
                              children: [
                                (0, a.jsx)("li", {
                                  children: (0, a.jsx)(o.default, {
                                    href: "product-details",
                                    children: "Hamburger",
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  children: (0, a.jsx)(o.default, {
                                    href: "product-details",
                                    children: "French fries",
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  children: (0, a.jsx)(o.default, {
                                    href: "product-details",
                                    children: "Chicken pizza",
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  children: (0, a.jsx)(o.default, {
                                    href: "product-details",
                                    children: "Onion rings",
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  children: (0, a.jsx)(o.default, {
                                    href: "product-details",
                                    children: "Vegetable roll",
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  children: (0, a.jsx)(o.default, {
                                    href: "product-details",
                                    children: "Chicken nuggets",
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  children: (0, a.jsx)(o.default, {
                                    href: "product-details",
                                    children: "Sea fish",
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  children: (0, a.jsx)(o.default, {
                                    href: "product-details",
                                    children: "Tacos Pizza",
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  children: (0, a.jsx)(o.default, {
                                    href: "product-details",
                                    children: "Fried chicken",
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  children: (0, a.jsx)(o.default, {
                                    href: "product-details",
                                    children: "Hot Dogs",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "col-xl-5",
                        children: (0, a.jsxs)("div", {
                          className: "row justify-content-between",
                          children: [
                            (0, a.jsx)("div", {
                              className: "col-xl-6 col-lg-5 col-sm-6",
                              "data-aos": "fade-up",
                              "data-aos-delay": 100,
                              "data-aos-duration": 1500,
                              "data-aos-offset": 50,
                              children: (0, a.jsxs)("div", {
                                className: "footer-widget footer-contact",
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "footer-title",
                                    children: (0, a.jsx)("h5", {
                                      children: "contact us",
                                    }),
                                  }),
                                  (0, a.jsxs)("ul", {
                                    children: [
                                      (0, a.jsx)("li", {
                                        children:
                                          "1403 Washington Ave, New Orlea ns, LA 70130, United States",
                                      }),
                                      (0, a.jsx)("li", {
                                        children: (0, a.jsx)("a", {
                                          href: "mailto:wellfood@gmail.com",
                                          children: (0, a.jsx)("u", {
                                            children: "wellfood@gmail.com",
                                          }),
                                        }),
                                      }),
                                      (0, a.jsx)("li", {
                                        children: (0, a.jsx)("a", {
                                          href: "callto:+(1)0987654321",
                                          children: "+(1) 098 765 4321",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "col-xl-6 col-lg-5 col-sm-6",
                              "data-aos": "fade-up",
                              "data-aos-delay": 150,
                              "data-aos-duration": 1500,
                              "data-aos-offset": 50,
                              children: (0, a.jsxs)("div", {
                                className: "footer-widget opening-hour",
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "footer-title",
                                    children: (0, a.jsx)("h5", {
                                      children: "opening hour",
                                    }),
                                  }),
                                  (0, a.jsxs)("ul", {
                                    children: [
                                      (0, a.jsxs)("li", {
                                        children: [
                                          "Monday – Friday: ",
                                          (0, a.jsx)("span", {
                                            children: "8am – 4pm",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("li", {
                                        children: [
                                          "Saturday: ",
                                          (0, a.jsx)("span", {
                                            children: "8am – 12am",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "any-question mt-20",
                                    children: [
                                      (0, a.jsx)("h5", {
                                        children: "Have any questions?",
                                      }),
                                      (0, a.jsxs)("a", {
                                        href: "#",
                                        className: "theme-btn style-two",
                                        children: [
                                          "let’s talk us ",
                                          (0, a.jsx)("i", {
                                            className: "far fa-arrow-alt-right",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, a.jsx)("div", {
                className: "footer-bottom pt-30 pb-15",
                children: (0, a.jsxs)("div", {
                  className: "container",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "row",
                      children: [
                        (0, a.jsx)("div", {
                          className: "col-lg-5",
                          children: (0, a.jsx)("div", {
                            className:
                              "copyright-text text-center text-lg-start",
                            children: (0, a.jsxs)("p", {
                              children: [
                                "Copyright 2024 ",
                                (0, a.jsx)(o.default, {
                                  href: "/",
                                  children: "Wellfood",
                                }),
                                ". All Rights Reserved",
                                " ",
                              ],
                            }),
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className: "col-lg-7 text-center text-lg-end",
                          children: (0, a.jsxs)("ul", {
                            className: "footer-bottom-nav",
                            children: [
                              (0, a.jsx)("li", {
                                children: (0, a.jsx)("a", {
                                  href: "#",
                                  children: "Privacy Policy",
                                }),
                              }),
                              (0, a.jsx)("li", {
                                children: (0, a.jsx)("a", {
                                  href: "#",
                                  children: "Terms & Condition",
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsx)("button", {
                      className: "scroll-top scroll-to-target",
                      "data-target": "html",
                      children: (0, a.jsx)("i", {
                        className: "fas fa-arrow-alt-up",
                      }),
                    }),
                  ],
                }),
              }),
              (0, a.jsxs)("div", {
                className: "footer-shapes",
                children: [
                  (0, a.jsx)("div", {
                    className: "shape one",
                    children: (0, a.jsx)("img", {
                      src: "assets/images/shapes/hero-shape5.png",
                      alt: "Shape",
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "shape two",
                    children: (0, a.jsx)("img", {
                      src: "assets/images/shapes/tomato.png",
                      alt: "Shape",
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "shape three",
                    children: (0, a.jsx)("img", {
                      src: "assets/images/shapes/pizza-two.png",
                      alt: "Shape",
                    }),
                  }),
                ],
              }),
            ],
          }),
        j = () =>
          (0, a.jsxs)("footer", {
            className: "main-footer bgc-black pt-130 rpt-100 rel z-1",
            style: {
              backgroundImage: "url(assets/images/background/footer-bg.png)",
            },
            children: [
              (0, a.jsx)("div", {
                className: "widget-area pb-70",
                children: (0, a.jsx)("div", {
                  className: "container",
                  children: (0, a.jsxs)("div", {
                    className: "row justify-content-between",
                    children: [
                      (0, a.jsx)("div", {
                        className: "col-xl-3 col-lg-4 col-sm-6",
                        children: (0, a.jsxs)("div", {
                          className: "footer-widget footer-text",
                          "data-aos": "fade-up",
                          "data-aos-duration": 1500,
                          "data-aos-offset": 50,
                          children: [
                            (0, a.jsx)("div", {
                              className: "footer-logo mb-25",
                              children: (0, a.jsx)(o.default, {
                                href: "/",
                                children: (0, a.jsx)("img", {
                                  src: "assets/images/logos/logo-white.png",
                                  alt: "Logo",
                                }),
                              }),
                            }),
                            (0, a.jsx)("p", {
                              children:
                                "Temporibus autem quibusdam officiis aut rerum necessitatibus eveniet voluta repudiandae molestiae recusandae",
                            }),
                            (0, a.jsxs)("div", {
                              className: "social-style-one mt-15",
                              children: [
                                (0, a.jsx)(o.default, {
                                  href: "contact",
                                  children: (0, a.jsx)("i", {
                                    className: "fab fa-facebook-f",
                                  }),
                                }),
                                (0, a.jsx)(o.default, {
                                  href: "contact",
                                  children: (0, a.jsx)("i", {
                                    className: "fab fa-twitter",
                                  }),
                                }),
                                (0, a.jsx)(o.default, {
                                  href: "contact",
                                  children: (0, a.jsx)("i", {
                                    className: "fab fa-linkedin-in",
                                  }),
                                }),
                                (0, a.jsx)(o.default, {
                                  href: "contact",
                                  children: (0, a.jsx)("i", {
                                    className: "fab fa-instagram",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "col-xl-4 col-lg-5 col-sm-6",
                        children: (0, a.jsxs)("div", {
                          className: "footer-widget footer-links",
                          "data-aos": "fade-up",
                          "data-aos-delay": 50,
                          "data-aos-duration": 1500,
                          "data-aos-offset": 50,
                          children: [
                            (0, a.jsx)("div", {
                              className: "footer-title",
                              children: (0, a.jsx)("h5", {
                                children: "popular food",
                              }),
                            }),
                            (0, a.jsxs)("ul", {
                              className: "two-column",
                              children: [
                                (0, a.jsx)("li", {
                                  children: (0, a.jsx)(o.default, {
                                    href: "product-details",
                                    children: "Hamburger",
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  children: (0, a.jsx)(o.default, {
                                    href: "product-details",
                                    children: "French fries",
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  children: (0, a.jsx)(o.default, {
                                    href: "product-details",
                                    children: "Chicken pizza",
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  children: (0, a.jsx)(o.default, {
                                    href: "product-details",
                                    children: "Onion rings",
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  children: (0, a.jsx)(o.default, {
                                    href: "product-details",
                                    children: "Vegetable roll",
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  children: (0, a.jsx)(o.default, {
                                    href: "product-details",
                                    children: "Chicken nuggets",
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  children: (0, a.jsx)(o.default, {
                                    href: "product-details",
                                    children: "Sea fish",
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  children: (0, a.jsx)(o.default, {
                                    href: "product-details",
                                    children: "Tacos Pizza",
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  children: (0, a.jsx)(o.default, {
                                    href: "product-details",
                                    children: "Fried chicken",
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  children: (0, a.jsx)(o.default, {
                                    href: "product-details",
                                    children: "Hot Dogs",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "col-xl-5",
                        children: (0, a.jsxs)("div", {
                          className: "row justify-content-between",
                          children: [
                            (0, a.jsx)("div", {
                              className: "col-xl-6 col-lg-5 col-sm-6",
                              children: (0, a.jsxs)("div", {
                                className: "footer-widget footer-contact",
                                "data-aos": "fade-up",
                                "data-aos-delay": 100,
                                "data-aos-duration": 1500,
                                "data-aos-offset": 50,
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "footer-title",
                                    children: (0, a.jsx)("h5", {
                                      children: "contact us",
                                    }),
                                  }),
                                  (0, a.jsxs)("ul", {
                                    children: [
                                      (0, a.jsx)("li", {
                                        children:
                                          "1403 Washington Ave, New Orlea ns, LA 70130, United States",
                                      }),
                                      (0, a.jsx)("li", {
                                        children: (0, a.jsx)("a", {
                                          href: "mailto:wellfood@gmail.com",
                                          children: (0, a.jsx)("u", {
                                            children: "wellfood@gmail.com",
                                          }),
                                        }),
                                      }),
                                      (0, a.jsx)("li", {
                                        children: (0, a.jsx)("a", {
                                          href: "callto:+(1)0987654321",
                                          children: "+(1) 098 765 4321",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "col-xl-6 col-lg-5 col-sm-6",
                              children: (0, a.jsxs)("div", {
                                className: "footer-widget opening-hour",
                                "data-aos": "fade-up",
                                "data-aos-delay": 150,
                                "data-aos-duration": 1500,
                                "data-aos-offset": 50,
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "footer-title",
                                    children: (0, a.jsx)("h5", {
                                      children: "opening hour",
                                    }),
                                  }),
                                  (0, a.jsxs)("ul", {
                                    children: [
                                      (0, a.jsxs)("li", {
                                        children: [
                                          "Monday – Friday: ",
                                          (0, a.jsx)("span", {
                                            children: "8am – 4pm",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("li", {
                                        children: [
                                          "Saturday: ",
                                          (0, a.jsx)("span", {
                                            children: "8am – 12am",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "any-question mt-20",
                                    children: [
                                      (0, a.jsx)("h5", {
                                        children: "Have any questions?",
                                      }),
                                      (0, a.jsxs)("a", {
                                        href: "#",
                                        className: "theme-btn style-two",
                                        children: [
                                          "let’s talk us ",
                                          (0, a.jsx)("i", {
                                            className: "far fa-arrow-alt-right",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, a.jsx)("div", {
                className: "footer-bottom pt-30 pb-15",
                children: (0, a.jsxs)("div", {
                  className: "container",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "row",
                      children: [
                        (0, a.jsx)("div", {
                          className: "col-lg-5",
                          children: (0, a.jsx)("div", {
                            className:
                              "copyright-text text-center text-lg-start",
                            children: (0, a.jsxs)("p", {
                              children: [
                                "Copyright 2024 ",
                                (0, a.jsx)(o.default, {
                                  href: "/",
                                  children: "Wellfood",
                                }),
                                ". All Rights Reserved",
                                " ",
                              ],
                            }),
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className: "col-lg-7 text-center text-lg-end",
                          children: (0, a.jsxs)("ul", {
                            className: "footer-bottom-nav",
                            children: [
                              (0, a.jsx)("li", {
                                children: (0, a.jsx)("a", {
                                  href: "#",
                                  children: "Privacy Policy",
                                }),
                              }),
                              (0, a.jsx)("li", {
                                children: (0, a.jsx)("a", {
                                  href: "#",
                                  children: "Terms & Condition",
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsx)("button", {
                      className: "scroll-top scroll-to-target",
                      "data-target": "html",
                      children: (0, a.jsx)("i", {
                        className: "fas fa-arrow-alt-up",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        f = () =>
          (0, a.jsxs)("footer", {
            className: "main-footer footer-two bgc-black pt-120 rpt-90 rel z-1",
            style: {
              backgroundImage: "url(assets/images/background/footer-bg.png)",
            },
            children: [
              (0, a.jsx)("div", {
                className: "widget-area pb-70",
                children: (0, a.jsx)("div", {
                  className: "container",
                  children: (0, a.jsxs)("div", {
                    className: "row justify-content-between",
                    children: [
                      (0, a.jsx)("div", {
                        className: "col-xl-3 col-lg-4 col-sm-6",
                        "data-aos": "fade-up",
                        "data-aos-duration": 1500,
                        "data-aos-offset": 50,
                        children: (0, a.jsxs)("div", {
                          className: "footer-widget footer-text",
                          children: [
                            (0, a.jsx)("div", {
                              className: "footer-title",
                              children: (0, a.jsx)("h5", {
                                children: "Location",
                              }),
                            }),
                            (0, a.jsx)("p", {
                              children:
                                "1403 Washington Ave, New Orlea ns, LA 70130, United States",
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "col-xl-2 col-lg-3 col-sm-6",
                        "data-aos": "fade-up",
                        "data-aos-delay": 50,
                        "data-aos-duration": 1500,
                        "data-aos-offset": 50,
                        children: (0, a.jsxs)("div", {
                          className: "footer-widget footer-contact",
                          children: [
                            (0, a.jsx)("div", {
                              className: "footer-title",
                              children: (0, a.jsx)("h5", {
                                children: "contact us",
                              }),
                            }),
                            (0, a.jsxs)("ul", {
                              children: [
                                (0, a.jsx)("li", {
                                  children: (0, a.jsx)("a", {
                                    href: "mailto:wellfood@gmail.com",
                                    children: (0, a.jsx)("u", {
                                      children: "wellfood@gmail.com",
                                    }),
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  children: (0, a.jsx)("a", {
                                    href: "callto:+(1)0987654321",
                                    children: "+(1) 098 765 4321",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "col-xl-3 col-lg-4 col-sm-6",
                        "data-aos": "fade-up",
                        "data-aos-delay": 100,
                        "data-aos-duration": 1500,
                        "data-aos-offset": 50,
                        children: (0, a.jsxs)("div", {
                          className: "footer-widget opening-hour",
                          children: [
                            (0, a.jsx)("div", {
                              className: "footer-title",
                              children: (0, a.jsx)("h5", {
                                children: "opening hour",
                              }),
                            }),
                            (0, a.jsxs)("ul", {
                              children: [
                                (0, a.jsxs)("li", {
                                  children: [
                                    "Monday – Friday: ",
                                    (0, a.jsx)("span", {
                                      children: "8am – 4pm",
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("li", {
                                  children: [
                                    "Saturday: ",
                                    (0, a.jsx)("span", {
                                      children: "8am – 12am",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "col-xl-3 col-lg-4 col-sm-6",
                        "data-aos": "fade-up",
                        "data-aos-delay": 150,
                        "data-aos-duration": 1500,
                        "data-aos-offset": 50,
                        children: (0, a.jsxs)("div", {
                          className: "footer-widget footer-text",
                          children: [
                            (0, a.jsx)("div", {
                              className: "footer-title",
                              children: (0, a.jsx)("h5", {
                                children: "Follow Us",
                              }),
                            }),
                            (0, a.jsxs)("div", {
                              className: "social-style-one mt-5",
                              children: [
                                (0, a.jsx)(o.default, {
                                  href: "contact",
                                  children: (0, a.jsx)("i", {
                                    className: "fab fa-facebook-f",
                                  }),
                                }),
                                (0, a.jsx)(o.default, {
                                  href: "contact",
                                  children: (0, a.jsx)("i", {
                                    className: "fab fa-twitter",
                                  }),
                                }),
                                (0, a.jsx)(o.default, {
                                  href: "contact",
                                  children: (0, a.jsx)("i", {
                                    className: "fab fa-linkedin-in",
                                  }),
                                }),
                                (0, a.jsx)(o.default, {
                                  href: "contact",
                                  children: (0, a.jsx)("i", {
                                    className: "fab fa-instagram",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, a.jsxs)("div", {
                className: "footer-bottom pt-30 pb-15",
                children: [
                  (0, a.jsxs)("div", {
                    className: "container rel text-center",
                    children: [
                      (0, a.jsxs)("ul", {
                        className: "footer-bottom-nav",
                        children: [
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)(o.default, {
                              href: "product-details",
                              children: "Hamburger",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)("a", {
                              href: "#",
                              children: "Pizza",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)(o.default, {
                              href: "product-details",
                              children: "Vegetable roll",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)(o.default, {
                              href: "product-details",
                              children: "Sea fish",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)(o.default, {
                              href: "product-details",
                              children: "Fried chicken",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)("a", {
                              href: "#",
                              children: "Burger",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)("a", {
                              href: "#",
                              children: "Saladr",
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsx)("button", {
                        className: "scroll-top scroll-to-target",
                        "data-target": "html",
                        children: (0, a.jsx)("i", {
                          className: "fas fa-arrow-alt-up",
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)("hr", { className: "mt-25 mb-30" }),
                  (0, a.jsx)("div", {
                    className: "container",
                    children: (0, a.jsxs)("div", {
                      className: "row",
                      children: [
                        (0, a.jsx)("div", {
                          className: "col-lg-5",
                          children: (0, a.jsx)("div", {
                            className:
                              "copyright-text text-center text-lg-start",
                            children: (0, a.jsxs)("p", {
                              children: [
                                "Copyright 2024 ",
                                (0, a.jsx)(o.default, {
                                  href: "/",
                                  children: "Wellfood",
                                }),
                                ". All Rights Reserved",
                                " ",
                              ],
                            }),
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className: "col-lg-7 text-center text-lg-end",
                          children: (0, a.jsxs)("ul", {
                            className: "footer-bottom-nav",
                            children: [
                              (0, a.jsx)("li", {
                                children: (0, a.jsx)("a", {
                                  href: "#",
                                  children: "Privacy Policy",
                                }),
                              }),
                              (0, a.jsx)("li", {
                                children: (0, a.jsx)("a", {
                                  href: "#",
                                  children: "Terms & Condition",
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        m = () =>
          (0, a.jsxs)("footer", {
            className:
              "main-footer footer-two bgc-dark-green pt-120 rpt-90 rel z-1",
            children: [
              (0, a.jsx)("div", {
                className: "widget-area pb-70",
                children: (0, a.jsx)("div", {
                  className: "container",
                  children: (0, a.jsxs)("div", {
                    className: "row justify-content-between",
                    children: [
                      (0, a.jsx)("div", {
                        className: "col-xl-3 col-lg-4 col-sm-6",
                        children: (0, a.jsxs)("div", {
                          className: "footer-widget footer-text",
                          "data-aos": "fade-up",
                          "data-aos-duration": 1500,
                          "data-aos-offset": 50,
                          children: [
                            (0, a.jsx)("div", {
                              className: "footer-title",
                              children: (0, a.jsx)("h5", {
                                children: "Location",
                              }),
                            }),
                            (0, a.jsx)("p", {
                              children:
                                "1403 Washington Ave, New Orlea ns, LA 70130, United States",
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "col-xl-2 col-lg-3 col-sm-6",
                        children: (0, a.jsxs)("div", {
                          className: "footer-widget footer-contact",
                          "data-aos": "fade-up",
                          "data-aos-delay": 50,
                          "data-aos-duration": 1500,
                          "data-aos-offset": 50,
                          children: [
                            (0, a.jsx)("div", {
                              className: "footer-title",
                              children: (0, a.jsx)("h5", {
                                children: "contact us",
                              }),
                            }),
                            (0, a.jsxs)("ul", {
                              children: [
                                (0, a.jsx)("li", {
                                  children: (0, a.jsx)("a", {
                                    href: "mailto:wellfood@gmail.com",
                                    children: (0, a.jsx)("u", {
                                      children: "wellfood@gmail.com",
                                    }),
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  children: (0, a.jsx)("a", {
                                    href: "callto:+(1)0987654321",
                                    children: "+(1) 098 765 4321",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "col-xl-3 col-lg-4 col-sm-6",
                        children: (0, a.jsxs)("div", {
                          className: "footer-widget opening-hour",
                          "data-aos": "fade-up",
                          "data-aos-delay": 100,
                          "data-aos-duration": 1500,
                          "data-aos-offset": 50,
                          children: [
                            (0, a.jsx)("div", {
                              className: "footer-title",
                              children: (0, a.jsx)("h5", {
                                children: "opening hour",
                              }),
                            }),
                            (0, a.jsxs)("ul", {
                              children: [
                                (0, a.jsxs)("li", {
                                  children: [
                                    "Monday – Friday: ",
                                    (0, a.jsx)("span", {
                                      children: "8am – 4pm",
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("li", {
                                  children: [
                                    "Saturday: ",
                                    (0, a.jsx)("span", {
                                      children: "8am – 12am",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "col-xl-3 col-lg-4 col-sm-6",
                        children: (0, a.jsxs)("div", {
                          className: "footer-widget footer-text",
                          "data-aos": "fade-up",
                          "data-aos-delay": 150,
                          "data-aos-duration": 1500,
                          "data-aos-offset": 50,
                          children: [
                            (0, a.jsx)("div", {
                              className: "footer-title",
                              children: (0, a.jsx)("h5", {
                                children: "Follow Us",
                              }),
                            }),
                            (0, a.jsxs)("div", {
                              className: "social-style-one mt-5",
                              children: [
                                (0, a.jsx)(o.default, {
                                  href: "contact",
                                  children: (0, a.jsx)("i", {
                                    className: "fab fa-facebook-f",
                                  }),
                                }),
                                (0, a.jsx)(o.default, {
                                  href: "contact",
                                  children: (0, a.jsx)("i", {
                                    className: "fab fa-twitter",
                                  }),
                                }),
                                (0, a.jsx)(o.default, {
                                  href: "contact",
                                  children: (0, a.jsx)("i", {
                                    className: "fab fa-linkedin-in",
                                  }),
                                }),
                                (0, a.jsx)(o.default, {
                                  href: "contact",
                                  children: (0, a.jsx)("i", {
                                    className: "fab fa-instagram",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, a.jsxs)("div", {
                className: "footer-bottom pt-30 pb-15",
                children: [
                  (0, a.jsxs)("div", {
                    className: "container rel text-center",
                    children: [
                      (0, a.jsxs)("ul", {
                        className: "footer-bottom-nav",
                        children: [
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)(o.default, {
                              href: "product-details",
                              children: "Hamburger",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)("a", {
                              href: "#",
                              children: "Pizza",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)(o.default, {
                              href: "product-details",
                              children: "Vegetable roll",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)(o.default, {
                              href: "product-details",
                              children: "Sea fish",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)(o.default, {
                              href: "product-details",
                              children: "Fried chicken",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)("a", {
                              href: "#",
                              children: "Burger",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)("a", {
                              href: "#",
                              children: "Saladr",
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsx)("button", {
                        className: "scroll-top scroll-to-target",
                        "data-target": "html",
                        children: (0, a.jsx)("i", {
                          className: "fas fa-arrow-alt-up",
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)("hr", { className: "mt-25 mb-30" }),
                  (0, a.jsx)("div", {
                    className: "container",
                    children: (0, a.jsxs)("div", {
                      className: "row",
                      children: [
                        (0, a.jsx)("div", {
                          className: "col-lg-5",
                          children: (0, a.jsx)("div", {
                            className:
                              "copyright-text text-center text-lg-start",
                            children: (0, a.jsxs)("p", {
                              children: [
                                "Copyright 2024 ",
                                (0, a.jsx)(o.default, {
                                  href: "/",
                                  children: "Wellfood",
                                }),
                                ". All Rights Reserved",
                                " ",
                              ],
                            }),
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className: "col-lg-7 text-center text-lg-end",
                          children: (0, a.jsxs)("ul", {
                            className: "footer-bottom-nav",
                            children: [
                              (0, a.jsx)("li", {
                                children: (0, a.jsx)("a", {
                                  href: "#",
                                  children: "Privacy Policy",
                                }),
                              }),
                              (0, a.jsx)("li", {
                                children: (0, a.jsx)("a", {
                                  href: "#",
                                  children: "Terms & Condition",
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        u = () =>
          (0, a.jsxs)("footer", {
            className: "main-footer footer-two bgc-black pt-120 rpt-90 rel z-1",
            style: {
              backgroundImage: "url(assets/images/background/footer-bg.png)",
            },
            children: [
              (0, a.jsx)("div", {
                className: "widget-area pb-70",
                children: (0, a.jsx)("div", {
                  className: "container",
                  children: (0, a.jsxs)("div", {
                    className: "row justify-content-between",
                    children: [
                      (0, a.jsx)("div", {
                        className: "col-xl-3 col-lg-4 col-sm-6",
                        children: (0, a.jsxs)("div", {
                          className: "footer-widget footer-text",
                          children: [
                            (0, a.jsx)("div", {
                              className: "footer-title",
                              children: (0, a.jsx)("h5", {
                                children: "Location",
                              }),
                            }),
                            (0, a.jsx)("p", {
                              children:
                                "1403 Washington Ave, New Orlea ns, LA 70130, United States",
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "col-xl-2 col-lg-3 col-sm-6",
                        children: (0, a.jsxs)("div", {
                          className: "footer-widget footer-contact",
                          children: [
                            (0, a.jsx)("div", {
                              className: "footer-title",
                              children: (0, a.jsx)("h5", {
                                children: "contact us",
                              }),
                            }),
                            (0, a.jsxs)("ul", {
                              children: [
                                (0, a.jsx)("li", {
                                  children: (0, a.jsx)("a", {
                                    href: "mailto:wellfood@gmail.com",
                                    children: (0, a.jsx)("u", {
                                      children: "wellfood@gmail.com",
                                    }),
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  children: (0, a.jsx)("a", {
                                    href: "callto:+(1)0987654321",
                                    children: "+(1) 098 765 4321",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "col-xl-3 col-lg-4 col-sm-6",
                        children: (0, a.jsxs)("div", {
                          className: "footer-widget opening-hour",
                          children: [
                            (0, a.jsx)("div", {
                              className: "footer-title",
                              children: (0, a.jsx)("h5", {
                                children: "opening hour",
                              }),
                            }),
                            (0, a.jsxs)("ul", {
                              children: [
                                (0, a.jsxs)("li", {
                                  children: [
                                    "Monday – Friday: ",
                                    (0, a.jsx)("span", {
                                      children: "8am – 4pm",
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("li", {
                                  children: [
                                    "Saturday: ",
                                    (0, a.jsx)("span", {
                                      children: "8am – 12am",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "col-xl-3 col-lg-4 col-sm-6",
                        children: (0, a.jsxs)("div", {
                          className: "footer-widget footer-text",
                          children: [
                            (0, a.jsx)("div", {
                              className: "footer-title",
                              children: (0, a.jsx)("h5", {
                                children: "Follow Us",
                              }),
                            }),
                            (0, a.jsxs)("div", {
                              className: "social-style-one mt-5",
                              children: [
                                (0, a.jsx)(o.default, {
                                  href: "contact",
                                  children: (0, a.jsx)("i", {
                                    className: "fab fa-facebook-f",
                                  }),
                                }),
                                (0, a.jsx)(o.default, {
                                  href: "contact",
                                  children: (0, a.jsx)("i", {
                                    className: "fab fa-twitter",
                                  }),
                                }),
                                (0, a.jsx)(o.default, {
                                  href: "contact",
                                  children: (0, a.jsx)("i", {
                                    className: "fab fa-linkedin-in",
                                  }),
                                }),
                                (0, a.jsx)(o.default, {
                                  href: "contact",
                                  children: (0, a.jsx)("i", {
                                    className: "fab fa-instagram",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, a.jsxs)("div", {
                className: "footer-bottom pt-30 pb-15",
                children: [
                  (0, a.jsxs)("div", {
                    className: "container rel text-center",
                    children: [
                      (0, a.jsxs)("ul", {
                        className: "footer-bottom-nav",
                        children: [
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)(o.default, {
                              href: "product-details",
                              children: "Hamburger",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)("a", {
                              href: "#",
                              children: "Pizza",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)(o.default, {
                              href: "product-details",
                              children: "Vegetable roll",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)(o.default, {
                              href: "product-details",
                              children: "Sea fish",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)(o.default, {
                              href: "product-details",
                              children: "Fried chicken",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)("a", {
                              href: "#",
                              children: "Burger",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)("a", {
                              href: "#",
                              children: "Saladr",
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsx)("button", {
                        className: "scroll-top scroll-to-target",
                        "data-target": "html",
                        children: (0, a.jsx)("i", {
                          className: "fas fa-arrow-alt-up",
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)("hr", { className: "mt-25 mb-30" }),
                  (0, a.jsx)("div", {
                    className: "container",
                    children: (0, a.jsxs)("div", {
                      className: "row",
                      children: [
                        (0, a.jsx)("div", {
                          className: "col-lg-5",
                          children: (0, a.jsx)("div", {
                            className:
                              "copyright-text text-center text-lg-start",
                            children: (0, a.jsxs)("p", {
                              children: [
                                "Copyright 2024 ",
                                (0, a.jsx)(o.default, {
                                  href: "/",
                                  children: "Wellfood",
                                }),
                                ". All Rights Reserved",
                                " ",
                              ],
                            }),
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className: "col-lg-7 text-center text-lg-end",
                          children: (0, a.jsxs)("ul", {
                            className: "footer-bottom-nav",
                            children: [
                              (0, a.jsx)("li", {
                                children: (0, a.jsx)("a", {
                                  href: "#",
                                  children: "Privacy Policy",
                                }),
                              }),
                              (0, a.jsx)("li", {
                                children: (0, a.jsx)("a", {
                                  href: "#",
                                  children: "Terms & Condition",
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
      var g = (e) => {
        let s = (0, d.useRef)();
        return (
          (0, d.useEffect)(() => {
            let l = (l) => {
              s.current.contains(l.target) || e();
            };
            return (
              document.addEventListener("mousedown", l),
              () => {
                document.removeEventListener("mousedown", l);
              }
            );
          }),
          s
        );
      };
      let p = () =>
          (0, a.jsxs)(d.Fragment, {
            children: [
              (0, a.jsx)("div", {
                className: "form-back-drop",
                onClick: () =>
                  document
                    .querySelector("body")
                    .classList.remove("side-content-visible"),
              }),
              (0, a.jsx)("section", {
                className: "hidden-bar",
                children: (0, a.jsxs)("div", {
                  className: "inner-box text-center",
                  children: [
                    (0, a.jsx)("div", {
                      className: "cross-icon",
                      onClick: () =>
                        document
                          .querySelector("body")
                          .classList.remove("side-content-visible"),
                      children: (0, a.jsx)("span", {
                        className: "fa fa-times",
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "title",
                      children: (0, a.jsx)("h4", {
                        children: "Get Appointment",
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "appointment-form",
                      children: (0, a.jsxs)("form", {
                        onSubmit: (e) => {
                          e.preventDefault(),
                            document
                              .querySelector("body")
                              .classList.remove("side-content-visible");
                        },
                        children: [
                          (0, a.jsx)("div", {
                            className: "form-group",
                            children: (0, a.jsx)("input", {
                              type: "text",
                              name: "text",
                              defaultValue: "",
                              placeholder: "Name",
                              required: "",
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "form-group",
                            children: (0, a.jsx)("input", {
                              type: "email",
                              name: "email",
                              defaultValue: "",
                              placeholder: "Email Address",
                              required: "",
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "form-group",
                            children: (0, a.jsx)("textarea", {
                              placeholder: "Message",
                              rows: 5,
                              defaultValue: "",
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "form-group",
                            children: (0, a.jsx)("button", {
                              type: "submit",
                              className: "theme-btn style-two",
                              children: "Submit now",
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: "social-style-one",
                      children: [
                        (0, a.jsx)(o.default, {
                          href: "contact",
                          children: (0, a.jsx)("i", {
                            className: "fab fa-twitter",
                          }),
                        }),
                        (0, a.jsx)(o.default, {
                          href: "contact",
                          children: (0, a.jsx)("i", {
                            className: "fab fa-facebook-f",
                          }),
                        }),
                        (0, a.jsx)(o.default, {
                          href: "contact",
                          children: (0, a.jsx)("i", {
                            className: "fab fa-instagram",
                          }),
                        }),
                        (0, a.jsx)("a", {
                          href: "#",
                          children: (0, a.jsx)("i", {
                            className: "fab fa-pinterest-p",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        N = () => {
          let [e, s] = (0, d.useState)(!1),
            l = g(() => {
              s(!1);
            });
          return (0, a.jsxs)("div", {
            className: "nav-search py-10",
            ref: l,
            children: [
              (0, a.jsx)("button", {
                className: "far fa-search",
                onClick: () => s(!e),
              }),
              (0, a.jsxs)("form", {
                onSubmit: (e) => {
                  e.preventDefault(), s(!1);
                },
                className: e ? "" : "hide",
                children: [
                  (0, a.jsx)("input", {
                    type: "text",
                    placeholder: "Search",
                    className: "searchbox",
                    required: "",
                  }),
                  (0, a.jsx)("button", {
                    type: "submit",
                    className: "searchbutton far fa-search",
                  }),
                ],
              }),
            ],
          });
        },
        v = () => {
          let [e, s] = (0, d.useState)(!1),
            [l, i] = (0, d.useState)(""),
            r = (e) => i(l === e ? "" : e),
            c = (e) => (e === l ? { display: "block" } : { display: "none" });
          return (0, a.jsx)(d.Fragment, {
            children: (0, a.jsx)("header", {
              className:
                "main-header white-menu menu-absolute d-block d-xl-none",
              children: (0, a.jsxs)("div", {
                className: "header-upper",
                children: [
                  (0, a.jsx)("div", {
                    className: "container-fluid clearfix",
                    children: (0, a.jsxs)("div", {
                      className: "header-inner rel d-flex align-items-center",
                      children: [
                        (0, a.jsx)("div", {
                          className: "logo-outer",
                          children: (0, a.jsx)("div", {
                            className: "logo",
                            children: (0, a.jsx)(o.default, {
                              href: "/",
                              children: (0, a.jsx)("img", {
                                src: "assets/images/logos/logo.jpg",
                                alt: "Logo",
                                title: "Logo",
                              }),
                            }),
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className: "nav-outer ms-lg-5 ps-xxl-4 clearfix",
                          children: (0, a.jsxs)("nav", {
                            className: "main-menu navbar-expand-lg",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "navbar-header py-10",
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "mobile-logo",
                                    children: (0, a.jsx)(o.default, {
                                      href: "/",
                                      children: (0, a.jsx)("img", {
                                        src: "assets/images/logos/logo.jpg",
                                        alt: "Logo",
                                        title: "Logo",
                                      }),
                                    }),
                                  }),
                                  (0, a.jsxs)("button", {
                                    type: "button",
                                    className: "navbar-toggle",
                                    "data-bs-toggle": "collapse",
                                    "data-bs-target": ".navbar-collapse",
                                    onClick: () => s(!e),
                                    children: [
                                      (0, a.jsx)("span", {
                                        className: "icon-bar",
                                      }),
                                      (0, a.jsx)("span", {
                                        className: "icon-bar",
                                      }),
                                      (0, a.jsx)("span", {
                                        className: "icon-bar",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "navbar-collapse collapse clearfix ".concat(
                                    e ? "show" : ""
                                  ),
                                children: (0, a.jsxs)("ul", {
                                  className: "navigation clearfix",
                                  children: [
                                    (0, a.jsxs)("li", {
                                      className: "dropdown",
                                      style: c("home"),
                                      children: [
                                        (0, a.jsx)("a", {
                                          href: "#",
                                          children: "Home",
                                        }),
                                        (0, a.jsxs)("ul", {
                                          children: [
                                            (0, a.jsx)("li", {
                                              children: (0, a.jsx)(o.default, {
                                                href: "/",
                                                children: "Home Restauran",
                                              }),
                                            }),
                                            (0, a.jsx)("li", {
                                              children: (0, a.jsx)(o.default, {
                                                href: "index2",
                                                children: "Home Pizza",
                                              }),
                                            }),
                                            (0, a.jsx)("li", {
                                              children: (0, a.jsx)(o.default, {
                                                href: "index3",
                                                children: "Home Burger",
                                              }),
                                            }),
                                            (0, a.jsx)("li", {
                                              children: (0, a.jsx)(o.default, {
                                                href: "index4",
                                                children: "Home Chiken",
                                              }),
                                            }),
                                            (0, a.jsx)("li", {
                                              children: (0, a.jsx)(o.default, {
                                                href: "index5",
                                                children: "Juice & Drinks",
                                              }),
                                            }),
                                            (0, a.jsx)("li", {
                                              children: (0, a.jsx)(o.default, {
                                                href: "index6",
                                                children: "Home Grill",
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "dropdown-btn",
                                          onClick: () => r("home"),
                                          children: (0, a.jsx)("span", {
                                            className: "far fa-angle-down",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("li", {
                                      className: "dropdown",
                                      children: [
                                        (0, a.jsx)("a", {
                                          href: "#",
                                          children: "Menu",
                                        }),
                                        (0, a.jsxs)("ul", {
                                          style: c("Menu"),
                                          children: [
                                            (0, a.jsx)("li", {
                                              children: (0, a.jsx)(o.default, {
                                                href: "menu-restaurant",
                                                children: "Menu Restaurant",
                                              }),
                                            }),
                                            (0, a.jsx)("li", {
                                              children: (0, a.jsx)(o.default, {
                                                href: "menu-pizza",
                                                children: "Menu Pizza",
                                              }),
                                            }),
                                            (0, a.jsx)("li", {
                                              children: (0, a.jsx)(o.default, {
                                                href: "menu-grill",
                                                children: "Menu Gril",
                                              }),
                                            }),
                                            (0, a.jsx)("li", {
                                              children: (0, a.jsx)(o.default, {
                                                href: "menu-burger",
                                                children: "Menu Burger",
                                              }),
                                            }),
                                            (0, a.jsx)("li", {
                                              children: (0, a.jsx)(o.default, {
                                                href: "menu-sea-food",
                                                children: "Menu Sea Food",
                                              }),
                                            }),
                                            (0, a.jsx)("li", {
                                              children: (0, a.jsx)(o.default, {
                                                href: "menu-chicken",
                                                children: "Menu Chicken",
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "dropdown-btn",
                                          onClick: () => r("Menu"),
                                          children: (0, a.jsx)("span", {
                                            className: "far fa-angle-down",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("li", {
                                      className: "dropdown",
                                      children: [
                                        (0, a.jsx)("a", {
                                          href: "#",
                                          children: "pages",
                                        }),
                                        (0, a.jsxs)("ul", {
                                          style: c("pages"),
                                          children: [
                                            (0, a.jsx)("li", {
                                              children: (0, a.jsx)(o.default, {
                                                href: "about",
                                                children: "About Us",
                                              }),
                                            }),
                                            (0, a.jsx)("li", {
                                              children: (0, a.jsx)(o.default, {
                                                href: "history",
                                                children: "Our History",
                                              }),
                                            }),
                                            (0, a.jsx)("li", {
                                              children: (0, a.jsx)(o.default, {
                                                href: "faq",
                                                children: "faqs",
                                              }),
                                            }),
                                            (0, a.jsx)("li", {
                                              children: (0, a.jsx)(o.default, {
                                                href: "chefs",
                                                children: "Our chefs",
                                              }),
                                            }),
                                            (0, a.jsx)("li", {
                                              children: (0, a.jsx)(o.default, {
                                                href: "chef-details",
                                                children: "chef Details",
                                              }),
                                            }),
                                            (0, a.jsx)("li", {
                                              children: (0, a.jsx)(o.default, {
                                                href: "gallery",
                                                children: "Gallery",
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "dropdown-btn",
                                          onClick: () => r("pages"),
                                          children: (0, a.jsx)("span", {
                                            className: "far fa-angle-down",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("li", {
                                      className: "dropdown",
                                      children: [
                                        (0, a.jsx)("a", {
                                          href: "#",
                                          children: "blog",
                                        }),
                                        (0, a.jsxs)("ul", {
                                          style: c("blog"),
                                          children: [
                                            (0, a.jsx)("li", {
                                              children: (0, a.jsx)(o.default, {
                                                href: "blog",
                                                children: "blog standard",
                                              }),
                                            }),
                                            (0, a.jsx)("li", {
                                              children: (0, a.jsx)(o.default, {
                                                href: "blog-details",
                                                children: "blog details",
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "dropdown-btn",
                                          onClick: () => r("blog"),
                                          children: (0, a.jsx)("span", {
                                            className: "far fa-angle-down",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("li", {
                                      className: "dropdown",
                                      children: [
                                        (0, a.jsx)("a", {
                                          href: "#",
                                          children: "shop",
                                        }),
                                        (0, a.jsxs)("ul", {
                                          style: c("shop"),
                                          children: [
                                            (0, a.jsx)("li", {
                                              children: (0, a.jsx)(o.default, {
                                                href: "shop",
                                                children: "Products",
                                              }),
                                            }),
                                            (0, a.jsx)("li", {
                                              children: (0, a.jsx)(o.default, {
                                                href: "product-details",
                                                children: "Product Details",
                                              }),
                                            }),
                                            (0, a.jsx)("li", {
                                              children: (0, a.jsx)(o.default, {
                                                href: "product-details",
                                                children: "Product Details",
                                              }),
                                            }),
                                            (0, a.jsx)("li", {
                                              children: (0, a.jsx)(o.default, {
                                                href: "cart",
                                                children: "Shopping Cart",
                                              }),
                                            }),
                                            (0, a.jsx)("li", {
                                              children: (0, a.jsx)(o.default, {
                                                href: "checkout",
                                                children: "Checkout Page",
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "dropdown-btn",
                                          onClick: () => r("shop"),
                                          children: (0, a.jsx)("span", {
                                            className: "far fa-angle-down",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, a.jsx)("li", {
                                      children: (0, a.jsx)(o.default, {
                                        href: "contact",
                                        children: "Contact",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className: "header-number",
                          children: [
                            (0, a.jsx)("i", { className: "far fa-phone" }),
                            "Call : ",
                            (0, a.jsx)("a", {
                              href: "callto:+88012345688",
                              children: "+880 123 456 88",
                            }),
                          ],
                        }),
                        (0, a.jsx)(N, {}),
                        (0, a.jsxs)("div", {
                          className: "menu-btns",
                          children: [
                            (0, a.jsxs)("button", {
                              children: [
                                (0, a.jsx)("i", {
                                  className: "far fa-shopping-cart",
                                }),
                                " ",
                                (0, a.jsx)("span", { children: "2" }),
                              ],
                            }),
                            (0, a.jsxs)(o.default, {
                              href: "contact",
                              className: "theme-btn",
                              children: [
                                "Book now ",
                                (0, a.jsx)("i", {
                                  className: "far fa-arrow-alt-right",
                                }),
                              ],
                            }),
                            (0, a.jsx)("div", {
                              className: "menu-sidebar",
                              children: (0, a.jsx)("button", {
                                className: "bg-transparent",
                                onClick: () =>
                                  document
                                    .querySelector("body")
                                    .classList.add("side-content-visible"),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "bg-lines",
                    children: [
                      (0, a.jsx)("span", {}),
                      (0, a.jsx)("span", {}),
                      (0, a.jsx)("span", {}),
                      (0, a.jsx)("span", {}),
                    ],
                  }),
                ],
              }),
            }),
          });
        };
      var b = () => (
          (0, d.useEffect)(() => {
            c.fixedHeader();
          }, []),
          (0, a.jsxs)(d.Fragment, {
            children: [
              (0, a.jsx)("header", {
                className:
                  "main-header white-menu menu-absolute d-none d-xl-block",
                children: (0, a.jsxs)("div", {
                  className: "header-upper",
                  children: [
                    (0, a.jsx)("div", {
                      className: "container-fluid clearfix",
                      children: (0, a.jsxs)("div", {
                        className: "header-inner rel d-flex align-items-center",
                        children: [
                          (0, a.jsx)("div", {
                            className: "logo-outer",
                            children: (0, a.jsx)("div", {
                              className: "logo",
                              children: (0, a.jsx)(o.default, {
                                href: "/",
                                children: (0, a.jsx)("img", {
                                  src: "assets/images/logos/logo.jpg",
                                  alt: "Logo",
                                  title: "Logo",
                                }),
                              }),
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "nav-outer ms-lg-5 ps-xxl-4 clearfix",
                            children: (0, a.jsxs)("nav", {
                              className: "main-menu navbar-expand-lg",
                              children: [
                                (0, a.jsxs)("div", {
                                  className: "navbar-header py-10",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className: "mobile-logo",
                                      children: (0, a.jsx)(o.default, {
                                        href: "/",
                                        children: (0, a.jsx)("img", {
                                          src: "assets/images/logos/logo.jpg",
                                          alt: "Logo",
                                          title: "Logo",
                                        }),
                                      }),
                                    }),
                                    (0, a.jsxs)("button", {
                                      type: "button",
                                      className: "navbar-toggle",
                                      "data-bs-toggle": "collapse",
                                      "data-bs-target": ".navbar-collapse",
                                      children: [
                                        (0, a.jsx)("span", {
                                          className: "icon-bar",
                                        }),
                                        (0, a.jsx)("span", {
                                          className: "icon-bar",
                                        }),
                                        (0, a.jsx)("span", {
                                          className: "icon-bar",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("div", {
                                  className:
                                    "navbar-collapse collapse clearfix",
                                  children: (0, a.jsxs)("ul", {
                                    className: "navigation clearfix",
                                    children: [
                                      (0, a.jsxs)("li", {
                                        className: "dropdown",
                                        children: [
                                          (0, a.jsx)("a", {
                                            href: "#",
                                            children: "Home",
                                          }),
                                          (0, a.jsxs)("ul", {
                                            children: [
                                              (0, a.jsx)("li", {
                                                children: (0, a.jsx)(
                                                  o.default,
                                                  {
                                                    href: "/",
                                                    children: "Home Restauran",
                                                  }
                                                ),
                                              }),
                                              (0, a.jsx)("li", {
                                                children: (0, a.jsx)(
                                                  o.default,
                                                  {
                                                    href: "index2",
                                                    children: "Home Pizza",
                                                  }
                                                ),
                                              }),
                                              (0, a.jsx)("li", {
                                                children: (0, a.jsx)(
                                                  o.default,
                                                  {
                                                    href: "index3",
                                                    children: "Home Burger",
                                                  }
                                                ),
                                              }),
                                              (0, a.jsx)("li", {
                                                children: (0, a.jsx)(
                                                  o.default,
                                                  {
                                                    href: "index4",
                                                    children: "Home Chiken",
                                                  }
                                                ),
                                              }),
                                              (0, a.jsx)("li", {
                                                children: (0, a.jsx)(
                                                  o.default,
                                                  {
                                                    href: "index5",
                                                    children: "Juice & Drinks",
                                                  }
                                                ),
                                              }),
                                              (0, a.jsx)("li", {
                                                children: (0, a.jsx)(
                                                  o.default,
                                                  {
                                                    href: "index6",
                                                    children: "Home Grill",
                                                  }
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, a.jsx)("div", {
                                            className: "dropdown-btn",
                                            children: (0, a.jsx)("span", {
                                              className: "far fa-angle-down",
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("li", {
                                        className: "dropdown",
                                        children: [
                                          (0, a.jsx)("a", {
                                            href: "#",
                                            children: "Menu",
                                          }),
                                          (0, a.jsxs)("ul", {
                                            children: [
                                              (0, a.jsx)("li", {
                                                children: (0, a.jsx)(
                                                  o.default,
                                                  {
                                                    href: "menu-restaurant",
                                                    children: "Menu Restaurant",
                                                  }
                                                ),
                                              }),
                                              (0, a.jsx)("li", {
                                                children: (0, a.jsx)(
                                                  o.default,
                                                  {
                                                    href: "menu-pizza",
                                                    children: "Menu Pizza",
                                                  }
                                                ),
                                              }),
                                              (0, a.jsx)("li", {
                                                children: (0, a.jsx)(
                                                  o.default,
                                                  {
                                                    href: "menu-grill",
                                                    children: "Menu Gril",
                                                  }
                                                ),
                                              }),
                                              (0, a.jsx)("li", {
                                                children: (0, a.jsx)(
                                                  o.default,
                                                  {
                                                    href: "menu-burger",
                                                    children: "Menu Burger",
                                                  }
                                                ),
                                              }),
                                              (0, a.jsx)("li", {
                                                children: (0, a.jsx)(
                                                  o.default,
                                                  {
                                                    href: "menu-sea-food",
                                                    children: "Menu Sea Food",
                                                  }
                                                ),
                                              }),
                                              (0, a.jsx)("li", {
                                                children: (0, a.jsx)(
                                                  o.default,
                                                  {
                                                    href: "menu-chicken",
                                                    children: "Menu Chicken",
                                                  }
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, a.jsx)("div", {
                                            className: "dropdown-btn",
                                            children: (0, a.jsx)("span", {
                                              className: "far fa-angle-down",
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("li", {
                                        className: "dropdown",
                                        children: [
                                          (0, a.jsx)("a", {
                                            href: "#",
                                            children: "pages",
                                          }),
                                          (0, a.jsxs)("ul", {
                                            children: [
                                              (0, a.jsx)("li", {
                                                children: (0, a.jsx)(
                                                  o.default,
                                                  {
                                                    href: "about",
                                                    children: "About Us",
                                                  }
                                                ),
                                              }),
                                              (0, a.jsx)("li", {
                                                children: (0, a.jsx)(
                                                  o.default,
                                                  {
                                                    href: "history",
                                                    children: "Our History",
                                                  }
                                                ),
                                              }),
                                              (0, a.jsx)("li", {
                                                children: (0, a.jsx)(
                                                  o.default,
                                                  {
                                                    href: "faq",
                                                    children: "faqs",
                                                  }
                                                ),
                                              }),
                                              (0, a.jsxs)("li", {
                                                className: "dropdown",
                                                children: [
                                                  (0, a.jsx)("a", {
                                                    href: "#",
                                                    children: "chefs",
                                                  }),
                                                  (0, a.jsxs)("ul", {
                                                    children: [
                                                      (0, a.jsx)("li", {
                                                        children: (0, a.jsx)(
                                                          o.default,
                                                          {
                                                            href: "chefs",
                                                            children:
                                                              "Our chefs",
                                                          }
                                                        ),
                                                      }),
                                                      (0, a.jsx)("li", {
                                                        children: (0, a.jsx)(
                                                          o.default,
                                                          {
                                                            href: "chef-details",
                                                            children:
                                                              "chef Details",
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                  (0, a.jsx)("div", {
                                                    className: "dropdown-btn",
                                                    children: (0, a.jsx)(
                                                      "span",
                                                      {
                                                        className:
                                                          "far fa-angle-down",
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                              (0, a.jsx)("li", {
                                                children: (0, a.jsx)(
                                                  o.default,
                                                  {
                                                    href: "gallery",
                                                    children: "Gallery",
                                                  }
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, a.jsx)("div", {
                                            className: "dropdown-btn",
                                            children: (0, a.jsx)("span", {
                                              className: "far fa-angle-down",
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("li", {
                                        className: "dropdown",
                                        children: [
                                          (0, a.jsx)("a", {
                                            href: "#",
                                            children: "blog",
                                          }),
                                          (0, a.jsxs)("ul", {
                                            children: [
                                              (0, a.jsx)("li", {
                                                children: (0, a.jsx)(
                                                  o.default,
                                                  {
                                                    href: "blog",
                                                    children: "blog standard",
                                                  }
                                                ),
                                              }),
                                              (0, a.jsx)("li", {
                                                children: (0, a.jsx)(
                                                  o.default,
                                                  {
                                                    href: "blog-details",
                                                    children: "blog details",
                                                  }
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, a.jsx)("div", {
                                            className: "dropdown-btn",
                                            children: (0, a.jsx)("span", {
                                              className: "far fa-angle-down",
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("li", {
                                        className: "dropdown",
                                        children: [
                                          (0, a.jsx)("a", {
                                            href: "#",
                                            children: "shop",
                                          }),
                                          (0, a.jsxs)("ul", {
                                            children: [
                                              (0, a.jsx)("li", {
                                                children: (0, a.jsx)(
                                                  o.default,
                                                  {
                                                    href: "shop",
                                                    children: "Products",
                                                  }
                                                ),
                                              }),
                                              (0, a.jsx)("li", {
                                                children: (0, a.jsx)(
                                                  o.default,
                                                  {
                                                    href: "product-details",
                                                    children: "Product Details",
                                                  }
                                                ),
                                              }),
                                              (0, a.jsx)("li", {
                                                children: (0, a.jsx)(
                                                  o.default,
                                                  {
                                                    href: "cart",
                                                    children: "Shopping Cart",
                                                  }
                                                ),
                                              }),
                                              (0, a.jsx)("li", {
                                                children: (0, a.jsx)(
                                                  o.default,
                                                  {
                                                    href: "checkout",
                                                    children: "Checkout Page",
                                                  }
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, a.jsx)("div", {
                                            className: "dropdown-btn",
                                            children: (0, a.jsx)("span", {
                                              className: "far fa-angle-down",
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, a.jsx)("li", {
                                        children: (0, a.jsx)(o.default, {
                                          href: "contact",
                                          children: "Contact",
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "header-number",
                            children: [
                              (0, a.jsx)("i", { className: "far fa-phone" }),
                              "Call : ",
                              (0, a.jsx)("a", {
                                href: "callto:+88012345688",
                                children: "+880 123 456 88",
                              }),
                            ],
                          }),
                          (0, a.jsx)(N, {}),
                          (0, a.jsxs)("div", {
                            className: "menu-btns",
                            children: [
                              (0, a.jsxs)("button", {
                                children: [
                                  (0, a.jsx)("i", {
                                    className: "far fa-shopping-cart",
                                  }),
                                  " ",
                                  (0, a.jsx)("span", { children: "2" }),
                                ],
                              }),
                              (0, a.jsxs)(o.default, {
                                href: "contact",
                                className: "theme-btn",
                                children: [
                                  "Book now ",
                                  (0, a.jsx)("i", {
                                    className: "far fa-arrow-alt-right",
                                  }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className: "menu-sidebar",
                                children: (0, a.jsx)("button", {
                                  className: "bg-transparent",
                                  onClick: () =>
                                    document
                                      .querySelector("body")
                                      .classList.add("side-content-visible"),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: "bg-lines",
                      children: [
                        (0, a.jsx)("span", {}),
                        (0, a.jsx)("span", {}),
                        (0, a.jsx)("span", {}),
                        (0, a.jsx)("span", {}),
                      ],
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(v, {}),
              (0, a.jsx)(p, {}),
            ],
          })
        ),
        w = (e) => {
          let { children: s, bgBlack: l, footer: i } = e;
          return (
            (0, d.useEffect)(() => {
              n()(),
                c.animation(),
                console.log(l),
                l
                  ? document
                      .querySelector(".page-wrapper")
                      .classList.add("bg-black")
                  : document
                      .querySelector(".page-wrapper")
                      .classList.contains("bg-black") &&
                    document
                      .querySelector(".page-wrapper")
                      .classList.remove("bg-black");
            }, []),
            (0, a.jsxs)("div", {
              className: "page-wrapper",
              children: [(0, a.jsx)(b, {}), s, (0, a.jsx)(h, { footer: i })],
            })
          );
        };
    },
  },
]);
