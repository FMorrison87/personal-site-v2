import React, { useState } from "react";
import Nav from "./components/nav/nav";
import Header from "./components/header/header";
import CardCollapse from "./components/card-collapse/card-collapse";
import "./App.scss";

function App() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="site-wrapper">
      <Nav
        navOpen={navOpen}
        onClickOutside={() => {
          setNavOpen(false);
        }}
      />
      <Header />
      <main className="site-main">
        <section id="About">
          <h2>About</h2>
          <p>
            I am a professional software developer who specializes in
            large-scale applications with intricate state management and complex
            data manipulation.
          </p>
          <p>
            I currently work in the aerospace and defense industry with a
            primary focus on satellite applications.
          </p>

          <div id="Ethos">
            <h3>Ethos</h3>
            <strong>Clean, maintanable code.</strong>
            <p>
              I write code that is easy for my co-workers to understand, work
              in, and extend.
            </p>
            <strong>Good faith design execution.</strong>
            <p>
              I turn professional designs into code that matches the designers
              intent.
            </p>
            <strong>Clear, up-front communication</strong>
            <p>
              If I encounter an execution problem I am practiced at
              collaborating with stakeholders to come up with a solution that
              works for everyone.
            </p>
          </div>
          <div id="Technologies">
            <h3>Technologies</h3>
            <p>I am well-versed in the following technologies.</p>
            <div className="technologies_list">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>SCSS / Sass</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>TypeScript</li>
                <li>Web Components</li>
                <li>React</li>
                <li>Angular</li>
                <li>RxJs & NgRx</li>
                <li>REST APIs</li>
              </ul>
              <ul>
                <li>Stencil.js</li>
                <li>Lit</li>
                <li>Astro.js</li>
                <li>Adobe XD</li>
                <li>Adobe Photoshop</li>
                <li>Figma</li>
                <li>Tailwind</li>
                <li>Material UI</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="Portfolio">
          <h2>Portfolio</h2>
          <CardCollapse
            cardTitle={"Astro UXDS"}
            chipArray={[
              "Web Components",
              "Stencil.js",
              "React",
              "Astro.js",
              "Javascript ES6",
            ]}
            cardDescription={
              "Part of the team that creates and maintains web components for Astro UX Design System, used in US Space Force Satellite Applications."
            }
            dataActive={false}
          >
            <div>
              <strong>Highlights</strong>
              <ul>
                <li>Creation of web components using Stencil.js</li>
                <li>
                  Close collaboration with design team to execute official Figma
                  designs.
                </li>
                <li>
                  Web components adhere to and support the compliance tiers for
                  military applications.
                </li>
                <li>
                  Maintenance of documentation site using Astro.js and vanilla
                  web components.
                </li>
              </ul>
              <a href="https://astrouxds.com" target="_blank" rel="noreferrer">
                Astro UXDS
              </a>
            </div>
          </CardCollapse>
          <CardCollapse
            cardTitle={
              "Supracoders Space Electronic Warfare Training Application - Astro Redo"
            }
            chipArray={[
              "React",
              "Astro Web Components",
              "Astro Design Tokens",
              "JavaScript ES6",
              "Material UI Kit",
            ]}
            cardDescription={
              "An exercise to bring an existing application into compliance with Astro 7 using a variety of methods."
            }
            dataActive={false}
          >
            <div>
              <strong>Highlights</strong>
              <ul>
                <li>
                  Exercise was undertaken a number of times. First the app was
                  reskinned using Astro design tokens, then web components, then
                  both. Then the application internals were re-worked to improve
                  user experience and Astro compliance.
                </li>
                <li>Undertaken with Astro co-worker Kiley Mitti.</li>
                <li>
                  Core application was in React with a custom Astro theme using
                  MUI, all of which needed to be pieced apart and re-assembled
                  using Astro.
                </li>
                <li>Original application create by Theodore Kruczek</li>
              </ul>
              <div className="card_link-wrapper">
                <a
                  href="https://deploy-preview-8--quiet-kheer-2945e7.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Supracoders Training Application - Final Version
                </a>
                <a
                  href="https://github.com/RocketCommunicationsInc/supracoders-app/pulls"
                  target="_blank"
                  rel="noreferrer"
                >
                  Full List of Versions - Github
                </a>
              </div>
            </div>
          </CardCollapse>
          <CardCollapse
            cardTitle={"Simos Produce"}
            chipArray={[
              "Shopify / Liquid",
              "HTML",
              "Sass",
              "jQuery",
              "JavaScript",
            ]}
            cardDescription={
              "E-Commerce grocery box home delivery website for the Shopify platform."
            }
            dataActive={false}
          >
            <div>
              <strong>Feature Highlights</strong>
              <ul>
                <li>Mobile and desktop designs created in Adobe XD</li>
                <li>Custom built zipcode restriction</li>
                <li>Delivery date-picker</li>
                <li>Custom zone tagging for admin</li>
              </ul>
              <a
                href="https://simosproduce.com"
                target="_blank"
                rel="noreferrer"
              >
                Simos Produce
              </a>
            </div>
          </CardCollapse>
          <CardCollapse
            cardTitle={"Velocio Apparel"}
            chipArray={[
              "Shopify / Liquid",
              "HTML",
              "SCSS",
              "JavaScript",
              "Tailwind",
            ]}
            cardDescription={
              "Full rebuild of E-Commerce cycling apparel website on the Shopify platform."
            }
            dataActive={false}
          >
            <div>
              <strong>Feature Highlights</strong>
              <ul>
                <li>
                  Improved developer experience with build system and compiler
                  use (Webpack / Babel)
                </li>
                <li>
                  Execution of given design for product pages, creation of
                  design based on stylesheet for the rest of the site.
                </li>
                <li>Migration from jQuery to ES6</li>
                <li>
                  Redesigned homepage with video hero option and product
                  highlight sections.
                </li>
                <li>Redone collection page with custom swatch pickers.</li>
                <li>
                  Custom CMS improvements for Velocio employees working on the
                  website.
                </li>
                <li>Speed audits using Lighthouse for mobile / desktop.</li>
              </ul>
              <a href="https://velocio.cc" target="_blank" rel="noreferrer">
                Velocio Apparel
              </a>
            </div>
          </CardCollapse>
        </section>
      </main>
    </div>
  );
}

export default App;
