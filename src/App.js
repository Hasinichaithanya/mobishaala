import "./App.css";

function App() {
  return (
    <div className="App">
      {/*top container*/}
      <div className="top-container">
        {/*header container*/}
        <div className="header-of-banner">
          <h1 className="main-heading-banner">Mobishaala</h1>
          <p className="intro-line">
            Create your{" "}
            <span>
              <b>Digital Classroom</b>
            </span>{" "}
            in 5 mins for
            <span>
              {" "}
              <b>FREE</b>
            </span>{" "}
            & connect to 1+ million Students.
          </p>
          <ul className="list-container">
            <li>No technical knowledge required.</li>
            <li>Quickly setup live class, tests, notes, ebooks, and more.</li>
            <li>Reach out to millions of students anywhere, anytime.</li>
          </ul>{" "}
        </div>

        {/*youtube video container for mobile-view*/}
        <div className="youtube-video-container-mobile">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jg5d59ligW4?si=iOKfRBiiPbX7dI2V"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <button className="buy-btn">Buy</button>
        </div>

        {/*bottom container*/}
        <div className="buttons-container">
          <p>Institute/Teacher</p>
          <button>Get Started</button>
          <p>Student</p>
          <button>Download App</button>
          <br />
          <button className="talk-to-us-btn">
            <img
              src="https://th.bing.com/th/id/OIP.dD3KjCmsUWT72iB1LQmgfAHaHa?w=179&h=180&c=7&r=0&o=5&cb=11&dpr=1.5&pid=1.7"
              alt="whatsapp-icon"
              className="wtsp-icon"
            />
            Talk to Us
          </button>
        </div>
      </div>

      {/*youtube video container for desktop-view*/}
      <div className="youtube-video-container-desktop">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/jg5d59ligW4?si=iOKfRBiiPbX7dI2V"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <button className="buy-btn">Buy</button>
      </div>
      {/* footer for mobile view*/}
      <div className="footer">
        <h1 className="main-heading-footer">Mobishaala</h1>
        <h2>Vision</h2>
        <p>
          Empower Institutions & Teachers with state of the art digital
          classroom technology.
        </p>
        <h2>Address</h2>
        <p>
          <b>Registered Office</b>: 804,5th Cross, 9th main, 4th Block
          Koramangala, Banglore, Karnataka 560034
        </p>
        <p>
          <b>Corporate Office</b>: 293, Westend Marg, near Saket, Saidulajab,
          Saket, New Delhi, 110030.
        </p>
        <h2>Quick Links</h2>
        <p>Blog</p>
        <p>Andriod App</p>
        <p>IOS App</p>
      </div>
    </div>
  );
}

export default App;
