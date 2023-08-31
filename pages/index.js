import { useState, useEffect } from "react";

export default function Main() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    setIsMobileMenuOpen(false);
  };

  const MobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    // You can add additional logic here if needed
  }, [isMobileMenuOpen]);

  return (
    <div id="page">
      <button className="mobile-menu-button" onClick={MobileMenu}>
        ☰
      </button>

      {isMobileMenuOpen && (
        <div id="mobile-menu">
          <ul>
            <li onClick={() => handleTopicClick("Home")}>Home</li>
            <li onClick={() => handleTopicClick("About")}>About</li>
            <li onClick={() => handleTopicClick("Setting")}>Setting</li>
            <li onClick={() => handleTopicClick("Help")}>Help</li>
          </ul>
        </div>
      )}

      <div id="topic">
        <li id="Home" onClick={() => handleTopicClick("Home")}>
          Home 😂
        </li>
        <li id="About" onClick={() => handleTopicClick("About")}>
          About ❓
        </li>
        <li id="Setting" onClick={() => handleTopicClick("Setting")}>
          Setting 🎇
        </li>
        <li id="Help" onClick={() => handleTopicClick("Help")}>
          Help ❗❗
        </li>
      </div>
      <div id="content">
        <div id="inner">
          {selectedTopic === "Home" && (
            <div className="home">
              <h1>Welcome to the Home page 😂</h1>
              <p>
                Welcome to our corner of the internet! At Henro Web Page, we're
                passionate about Coding wit VS Code. Whether you're here to
                explore our latest Web Page, dive into informative to learn
                coding with html, or simply learn more about who we are, you're
                in the right place.
              </p>
            </div>
          )}
          {selectedTopic === "About" && (
            <div className="about">
              <h1>Welcome to the About page 😂</h1>
              <p>
                About Henro Web Page <br />
                Welcome to Henro Web Page, your gateway to the exciting world of
                web development and coding with VS Code. <br /> <br />
                Our Mission: <br />
                At Henro Web Page, we're on a mission to empower individuals
                like you to master the art of web development. Whether you're a
                beginner taking your first steps into the world of coding or an
                experienced developer looking to enhance your skills, we're here
                to guide you every step of the way. <br /> <br />
                What We Offer:
                <br />
                Informative Resources: Explore our collection of informative
                articles and tutorials that cover everything from HTML basics to
                advanced web development techniques. We believe in making coding
                accessible to everyone, so our resources are designed to be easy
                to understand yet comprehensive. <br />
                VS Code Insights: Discover the power of Visual Studio Code (VS
                Code) as your coding companion. We provide tips, tricks, and
                in-depth guides to help you harness the full potential of this
                versatile code editor. <br />
                Community Support: Join our vibrant community of learners,
                enthusiasts, and experts. Connect with fellow coders, ask
                questions, and share your knowledge. We believe in the strength
                of community-driven learning. <br /> <br />
                Who We Are:
                <br />
                We are a team of passionate web developers and coding
                enthusiasts who have a deep love for technology and a desire to
                share our knowledge with the world. Our aim is to demystify
                coding and make it an enjoyable and fulfilling journey for all.{" "}
                <br /> <br />
                Join Us on Your Coding Adventure: <br />
                Whether you're here to explore our latest web page designs, dive
                into the world of HTML, or simply learn more about who we are,
                you're in the right place. Henro Web Page is here to be your
                trusted companion on your coding adventure. Let's code, create,
                and innovate together. <br /> <br />
                Thank you for being a part of our community. Happy coding!
              </p>
            </div>
          )}
          {selectedTopic === "Setting" && (
            <div className="setting">
              <h1>Welcome to the Setting page 🎇</h1>
              <p>
                There are not setting the setting page is just here to trick you
                to think here is settings 😂😂😂
              </p>
            </div>
          )}
          {selectedTopic === "Help" && (
            <div className="help">
              <h1>Welcome to the Help page ❗❗</h1>
              <p>
                If you need help you can contact us but there is nothing to help
                here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
