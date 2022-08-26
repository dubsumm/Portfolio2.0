import React from 'react';
import img2 from '../images/sports-car.png';
import gameImg from '../images/project2.png';
import wellnessImg from '../images/project1.png';
import wipImg from '../images/wip.jpg';


// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Body.css';


function Body()  {
    return (
<body className='bg'>
    <div className='nightroad'></div>
    <div className='car'><img className='sportscar' src={img2} alt='car'/></div>

    <div className="body">
        <div className='first-box'>
            <p className='font-link'>Hiya! I'm Will Summerlin</p>
            <p className='font-link'>Thanks for checking out my site</p>
            <p className='font-link '>
            I am a Developer and lifetime learner leveraging an accounting, sales, and project management background to deliver concise and efficacious software solutions.
            </p>
        </div>
    </div>
    <div className="body">
        <div className='vice-box'>
            <h2 className="font-link " id='skills'>Tech Proficiencies</h2>
            <div className='skill-box container'>
                <div className="card" class="icon" alt='Bable'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg" />
                </div>
                <div className="card" class="icon" alt='Bootstrap'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" />
                </div>
                <div className="card" class="icon" alt='CSS3'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                </div>
                <div className="card" class="icon" alt='Devicon'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg" />
                </div>
                <div className="card" class="icon" alt='ESLint'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original-wordmark.svg" />
                </div>
                <div className="card" class="icon" alt='git'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />
                </div>
                <div className="card" class="icon" alt='GitHub'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
                </div>
                <div className="card" class="icon" alt='GitLab'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original-wordmark.svg" />
                </div>
                <div className="card" class="icon" alt='handlbars'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original-wordmark.svg" />
                </div>
                <div className="card" class="icon" alt='GraphQL'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg" />
                </div>
                <div className="card" class="icon" alt='heroku'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg" />
                </div>
                <div className="card" class="icon" alt='HTML5'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
                </div>
            
                
                <div className="card" class="icon" alt='JavaScript'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                </div>
                <div className="card" class="icon" alt='Jest'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
                </div>
                <div className="card" class="icon" alt='jQuery'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg" />
                </div>
                <div className="card" class="icon" alt='mongoDB'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
                </div>
                <div className="card" class="icon" alt='MySQL'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
                </div>
                <div className="card" class="icon" alt='Node.js'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                </div>
                <div className="card" class="icon" alt='npm'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
                </div>
                <div className="card" class="icon" alt='React'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                </div>
                <div className="card" class="icon" alt='Sequelize'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg" />
                </div>
                <div className="card" class="icon" alt='slack'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original-wordmark.svg" />
                </div>
                <div className="card" class="icon" alt='Visual Studio Code'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" />
                </div>
                <div className="card" class="icon" alt='webpack'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original-wordmark.svg" />
                </div>
          </div>
        </div>
    </div>
    <div id="port" className="body">
      <section class="portBox">
        <div className="container">
          <article className="body m-3 p-3">
            <a
              className="workImgLink"
              href="https://lit-crag-19257.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="portimgs" src={gameImg} alt="game project" />
            </a>
            <div className="">
              <h1 className="">
                <a
                  href="https://lit-crag-19257.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cthulhu Invades!
                </a>
              </h1>

              <div className="">
                A modern spin on the 8-bit turn-based retro video games of the
                80s. Choose your figher and face off against Lord Cthulhu in
                this light-hearted save the world style game.
              </div>
            </div>
          </article>
          <article className="body m-3 p-3">
            <a
              className=""
              href="https://dubsumm.github.io/wellness-project/"
              target="_blank"
              rel="noreferrer"
            >
              <img class="portimgs" src={wellnessImg} alt="wellness center" />
            </a>
            <div className="">
              <h1 className="">
                <a
                  href="https://dubsumm.github.io/wellness-project/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sunshine Wellness Center
                </a>
              </h1>

              <div className="">
                A website where you can track your mental health, check in on wellness 
                and health resources through a Third Party Api and a fun 'pick me up' pup 
                photo generator
              </div>
            </div>
          </article> 
          <article className="body m-3 p-3">
            <a className="" href="#" target="_blank" rel="noreferrer">
              <img class="portimgs" src={wipImg} alt="exmaple project" />
            </a>
            <div className="">
              <h1 className="">
                <a href="#" target="_blank" rel="noreferrer">
                  Project 3 Coming Soon
                </a>
              </h1>

              <div className="">
                WOOOOOAH look at this amazing project its the coolest one I have
                ever seen. OMG!
              </div>
            </div>
          </article>
        </div> 
      </section>
     </div>
    
</body>
    );
}

export default Body;