import Nav from "./components/nav/nav"
import Header from "./components/header/header"
import CardCollapse from "./components/card-collapse/card-collapse"
import "./App.scss";

function App() {
  return (
    <div className="site-wrapper">
      <Nav />
      <Header />
      <main className="site-main">
        <section id="About">
          <h2>About</h2>
          <p>As a self-taught developer my background includes a multitude of experiences. I have worked in tech since 2013, in roles that spanned community management, user retention and data analytics, UI and game design, QA and QA management, marketing, and project management.</p>
          
          {/* <p> I am self-taught, and as such my background includes a multitude of experiences that have shaped me as a professional developer. I have worked in tech since 2013, starting out in the video game industry where I went from community management, to user retention and analytics, to UI and systems design for games like Bejeweled and Plants vs. Zombies.</p>
          <p>From there, my career took me into the sporting events management industry supporting an event management SaaS product through working in tech support, QA, QA management, project management, UI design and development.</p>
          <p>As a self-taught developer I worked with clients on eCommerce and web products. I have signifcant experience in the Shopify ecosystem which includes re-architecting an eCommerce apparel site.</p>  */}
          <p>Currently my career has taken me into the military and space industry where I work as a front-end developer supporting Astro UXDS, the UX design system that is being integrated into space applications for the US Space Force. I support the web-components, documentation site, as well as perform audits and re-skinning of space applications for Astro compliance.</p>

          <div id="Ethos">
            <h3>Ethos</h3>
            <strong>Clean, maintanable code.</strong>
            <p>I write code that is easy for my co-workers to understand, work in, and extend.</p>
            <strong>Good faith design execution.</strong>
            <p>I turn professional designs into code that matches the designers intent.</p>
            <strong>Clear, up-front communication</strong>
            <p>If I encounter an execution problem I am practiced at collaborating with stakeholders to come up with a solution that works for everyone.</p>
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
                <li>TypeScript</li>
                <li>Web Components</li>
                <li>React</li>
              </ul>
              <ul>
                <li>Stencil.js</li>
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
        
        
        {/* <CardCollapse cardTitle={'About'} dataActive={true}>
          <p>As a self-taught developer my background includes a multitude of experiences. I have worked in tech since 2013, in roles that spanned community management, user retention and data analytics, UI and game design, QA and QA management, marketing, and project management.</p>
          <p>Currently my career has taken me into the military and space industry where I work as a front-end developer supporting Astro UXDS, the UX design system that is being integrated into space applications for the US Space Force. I support the web-components, documentation site, as well as perform audits and re-skinning of space applications for Astro compliance.</p>
        </CardCollapse> */}
        {/* <CardCollapse cardTitle={'Ethos'} dataActive={false}>
          <strong>Clean, maintanable code.</strong>
          <p>I write code that is easy for my co-workers to understand, work in, and extend.</p>
          <strong>Good faith design execution.</strong>
          <p>I turn professional designs into code that matches the designers intent.</p>
          <strong>Clear, up-front communication</strong>
          <p>If I encounter an execution problem I am practiced at collaborating with stakeholders to come up with a solution that works for everyone.</p>
        </CardCollapse> */}
        {/* <CardCollapse cardTitle={'Technologies'} dataActive={false}>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>SCSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Web Components</li>
            <li>React</li>
            <li>Stencil</li>
            <li>Astro.js</li>
          </ul>
        </CardCollapse> */}
        <section id="Portfolio">
          <h2>Portfolio</h2>
          <CardCollapse cardTitle={'Simos Produce'} chipArray={['Shopify / Liquid','HTML','Sass','jQuery','JavaScript']} cardDescription={'E-Commerce grocery box home delivery website for the Shopify platform.'} dataActive={false}>
            <div>
              <strong>Feature Highlights</strong>
              <ul>
                <li>Mobile and desktop designs created in Adobe XD</li>
                <li>Custom built zipcode restriction</li>
                <li>Delivery date-picker</li>
                <li>Custom zone tagging for admin</li>
              </ul>
              <a href="https://simosproduce.com" target="_blank" rel="noreferrer">Simos Produce</a>
            </div>
          </CardCollapse>
          <CardCollapse cardTitle={'Velocio Apparel'} chipArray={['Shopify / Liquid','HTML','SCSS','JavaScript','Tailwind']} cardDescription={'Full rebuild of E-Commerce cycling apparel website on the Shopify platform.'} dataActive={false}>
            <div>
              <strong>Feature Highlights</strong>
              <ul>
                <li>Improved developer experience with build system and compiler use (Webpack / Babel)</li>
                <li>Execution of given design for product pages, creation of design based on stylesheet for the rest of the site.</li>
                <li>Migration from jQuery to ES6</li>
                <li>Redesigned homepage with video hero option and product highlight sections.</li>
                <li>Redone collection page with custom swatch pickers.</li>
                <li>Custom CMS improvements for Velocio employees working on the website.</li>
                <li>Speed audits using Lighthouse for mobile / desktop.</li>
              </ul>
              <a href="https://velocio.cc" target="_blank" rel="noreferrer">Velocio Apparel</a>
            </div>
          </CardCollapse>
          <CardCollapse cardTitle={'Astro UXDS'} chipArray={['Web Components','Stencil.js','React','Astro.js','Javascript ES6']} cardDescription={'Part of the team that creates and maintains web components for Astro UX Design System, used in US Space Force Satellite Applications.'} dataActive={false}>
            <div>
              <strong>Highlights</strong>
              <ul>
                <li>Creation of web components using Stencil.js</li>
                <li>Close collaboration with design team to execute official Figma designs.</li>
                <li>Web components adhere to and support the compliance tiers for military applications.</li>
                <li>Maintenance of documentation site using Astro.js and vanilla web components.</li>
              </ul>
              <a href="https://astrouxds.com" target="_blank" rel="noreferrer">Astro UXDS</a>
            </div>
          </CardCollapse>
          <CardCollapse cardTitle={'Supracoders Space Electronic Warfare Training Application - Astro Redo'} chipArray={['React','Astro Web Components','Astro Design Tokens','JavaScript ES6','Material UI Kit']} cardDescription={'An exercise to bring an existing application into compliance with Astro 7 using a variety of methods.'} dataActive={false}>
            <div>
              <strong>Highlights</strong>
              <ul>
                <li>Exercise was undertaken a number of times. First the app was reskinned using Astro design tokens, then web components, then both. Then the application internals were re-worked to improve user experience and Astro compliance.</li>
                <li>Undertaken with Astro co-worker Kiley Mitti.</li>
                <li>Core application was in React with a custom Astro theme using MUI, all of which needed to be pieced apart and re-assembled using Astro.</li>
                <li>Original application create by Theodore Kruczek</li>
              </ul>
              <div className="card_link-wrapper">
                <a href="https://deploy-preview-8--quiet-kheer-2945e7.netlify.app/" target="_blank" rel="noreferrer">Supracoders Training Application - Final Version</a>
                <a href="https://github.com/RocketCommunicationsInc/supracoders-app/pulls" target="_blank" rel="noreferrer">Full List of Versions - Github</a>
              </div>
            </div>
          </CardCollapse>
        </section>
      </main>
    </div>
  );
}

export default App;
