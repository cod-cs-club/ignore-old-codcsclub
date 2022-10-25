// Import any custom components we need.
import Navbar from '/components/Navbar'
import Banner from '/components/Banner'
import Footer from '/components/Footer'

// Home page
function Home() {
  return (
    <>
      <Navbar selectedPage="Home" />
      <Banner
        image="/codBackground2.jpg"
        title="Computer Science Club"
        subtitle="The best club on the Planet!"
      />
      
      <div id="home">
        { /* Showcase */ }
        <div class="showcase grid">
          <div class="showcase-text">
            { /* Header below */ }
            <h1>Welcome to the Computer Science Club!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Mollis nunc sed id semper risus. Elementum tempus egestas sed sed risus. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit.</p>
            { /* Button below */ }
            <a href="" class="button">See Our Projects</a>
          </div>
          <iframe id="intro-vid" width="560" height="315" src="https://www.youtube.com/embed/LZ-f2hMaJKs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;picture-in-picture" allowfullscreen />
        </div>

        { /* Info cards */ }

        <div class="info">
          <div class="info-text">
            <h2>About Our Club</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Mollis nunc sed id semper risus. Elementum tempus egestas sed sed risus. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque.</p>
          </div>
          <div class="info-stats">
            <div>
              <img src="/computer-solid.svg" />
              <h3>10+</h3>
              <p class="text-secondary">Projects</p>
            </div>
            <div>
              <img src="/users-solid.svg" />
              <h3>350+</h3>
              <p class="text-secondary">Members</p>
            </div>
            <div>
              <img src="/server-solid.svg" />
              <h3>$5,020,893</h3>
              <p class="text-secondary">in bank account</p>
            </div>
          </div>
        </div>

        {/* Languages Used */}

        <div class="languages">
          <h2>Languages Used</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div class="lang-container">
            <div class="card">
              <h4>Next.js</h4>
              <img src="/nextjs.png" />
            </div>
            <div class="card">
              <h4>HTML</h4>
              <img src="/html.png" />
            </div>
            <div class="card">
              <h4>CSS</h4>
              <img src="css.png" />
            </div>
            <div class="card">
              <h4>TensorFlow</h4>
              <img src="/tensorflow.png" />
            </div>
            <div class="card">
              <h4>Node.js</h4>
              <img src="/node.png" />
            </div>
            <div class="card">
              <h4>Python</h4>
              <img src="/python.png" />
            </div>
          </div>
        </div>

        {/* FAQ */}

        <div className="faq">
          <h2>Frequently Asked Questions</h2>
          <div className="question">
            <h5>Question 1</h5>
          </div>
          <div className="answer">
            <p>Answer 1</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

// Export the page.
export default Home