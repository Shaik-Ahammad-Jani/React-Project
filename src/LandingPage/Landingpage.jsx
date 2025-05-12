import { useState } from "react";
// import "./CodeCampusLanding.css"; // Make sure to create this CSS file
import { Link } from "react-router-dom";
import './Landingpage.css'
// import ''

const LandingPage = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      id: "syntax",
      title: "Learn with Syntax",
      icon: "📝",
      description:
        "Master programming languages through interactive code snippets with syntax highlighting and real-time validation.",
    },
    {
        id: "videos",
        title: "Learn with Videos",
        icon: "🎬",
        description:
        "Watch comprehensive video tutorials categorized by difficulty level with subtitles and transcripts.",
    },
    {
      id: "puzzles",
      title: "Learn with Puzzles",
      icon: "🧩",
      description:
        "Challenge yourself with coding puzzles of increasing difficulty and earn rewards for your achievements.",
    },
    {
      id: "ai",
      title: "Learn with AI",
      icon: "🤖",
      description:
        "Get personalized assistance from our AI chatbot that adapts to your learning style and progress.",
    },
    {
      id: "compiler",
      title: "Online Compiler",
      icon: "💻",
      description:
        "Practice coding in real-time with our multi-language compiler featuring error detection and code sharing.",
    },
  ];

  const languages = ["JavaScript", "Python", "Java", "C++", "Ruby", "Go"];

  return (
    <div className="landing-container">
      {/* Header Section */}
      <header className="header">
        <div className="container1 header-content">
          {/* Logo */}
          <div className="logo-container">
            <div className="logo">CC</div>
            <span className="logo-text">CodeCampus</span>
          </div>

          {/* Navigation */}
          <nav className="navigation">
            <Link to="/features" className="nav-link">
              Features
            </Link>
            <Link to="/languages" className="nav-link">
              Languages
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <Link to="/LogIn">
              <button className="btn btn-outline">Log In</button>
            </Link>
            <Link to="/SignUp">
              <button className="btn btn-primary">Sign Up Free</button>
            </Link>
            <Link to="/Home">
              <button className="btn btn-primary">Guest Login</button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container1 hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Master Programming with AI-Powered Learning
            </h1>
            <p className="hero-description">
              Interactive tutorials, videos, puzzles, and AI assistance to help
              you become a confident programmer.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-white">Start Learning Now</button>
              <button className="btn btn-outline-white">Watch Demo</button>
            </div>
          </div>
          <div className="code-preview">
            <div className="code-editor">
              <div className="editor-controls">
                <div className="control red"></div>
                <div className="control yellow"></div>
                <div className="control green"></div>
              </div>
              <div className="editor-content">
                <pre>
                  <code>
                    <span className="keyword">function</span>{" "}
                    <span className="function">learnToCode</span>() {"{"}
                    <br />{" "}
                    <span className="comment">{/* Start your journey */}</span>
                    <br /> <span className="keyword">const</span> skills = [];
                    <br /> <span className="keyword">while</span> (passion){" "}
                    {"{"}
                    <br /> skills.<span className="function">push</span>(
                    <span className="string">&apos;new knowledge&apos;</span>);
                    <br /> <span className="keyword">if</span> (skills.
                    <span className="property">length</span> {">"} 100) {"{"}
                    <br /> <span className="keyword">return</span>{" "}
                    <span className="string">
                      &apos;Professional Developer&apos;
                    </span>
                    ;
                    <br /> {"}"}
                    <br /> {"}"}
                    <br />
                    {"}"}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container1">
          <h2 className="section-title">How You&apos;ll Learn on CodeCampus</h2>

          <div className="features-grid">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`feature-card ${
                  activeFeature === feature.id ? "active" : ""
                }`}
                onClick={() =>
                  setActiveFeature(
                    feature.id === activeFeature ? null : feature.id
                  )
                }
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                {activeFeature === feature.id && (
                  <p className="feature-description">{feature.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section id="languages" className="languages-section">
        <div className="container1">
          <h2 className="section-title">Programming Languages We Offer</h2>

          <div className="languages-grid">
            {languages.map((language) => (
              <div key={language} className="language-card">
                <h3 className="language-name">{language}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="ai-section">
        <div className="container1 ai-content">
          <div className="ai-info">
            <h2 className="section-title">
              Your Personal AI Learning Assistant
            </h2>
            <p className="ai-description">
              Our AI assistant helps you overcome challenges, explains complex
              concepts, and suggests personalized learning paths based on your
              progress.
            </p>
            <button className="btn btn-primary">Try AI Assistant</button>
          </div>
          <div className="ai-demo">
            <div className="chat-container">
              <div className="chat-header">
                <div className="ai-avatar">AI</div>
                <div className="ai-details">
                  <h4 className="ai-name">CodeCampus Assistant</h4>
                  <p className="ai-status">Always ready to help</p>
                </div>
              </div>
              <div className="user-message">
                <p>How do I use recursion in Python?</p>
              </div>
              <div className="ai-message">
                <p>
                  Recursion in Python is when a function calls itself.
                  Here&apos;s a simple example:
                </p>
                <pre className="code-snippet">
                  <code>
                    def factorial(n):
                    <br /> if n == 1:
                    <br /> return 1
                    <br /> else:
                    <br /> return n * factorial(n-1)
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container1">
          <h2 className="section-title">What Our Students Say</h2>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar blue">JS</div>
                <div className="testimonial-person">
                  <h4 className="person-name">John Smith</h4>
                  <p className="person-role">Web Developer</p>
                </div>
              </div>
              <p className="testimonial-text">
                &quot;The AI assistant helped me debug my code when I was stuck.
                It&apos;s like having a mentor available 24/7!&quot;
              </p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar green">AP</div>
                <div className="testimonial-person">
                  <h4 className="person-name">Anna Park</h4>
                  <p className="person-role">CS Student</p>
                </div>
              </div>
              <p className="testimonial-text">
                &quot;The puzzles make learning fun and challenging. I went from
                knowing nothing to building my own projects in just 3
                months!&quot;
              </p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar purple">RJ</div>
                <div className="testimonial-person">
                  <h4 className="person-name">Robert Johnson</h4>
                  <p className="person-role">Career Switcher</p>
                </div>
              </div>
              <p className="testimonial-text">
                &quot;The combination of videos and interactive code examples
                helped me understand complex concepts that I struggled with
                before.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container1 cta-content">
          <h2 className="cta-title">Ready to Start Your Coding Journey?</h2>
          <p className="cta-description">
            Join thousands of students who have transformed their careers
            through CodeCampus.
          </p>
          <button className="btn btn-white btn-large">
            Get Started For Free
          </button>
          <p className="cta-note">No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container1">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo-container">
                <div className="footer-logo">CC</div>
                <span className="footer-logo-text">CodeCampus</span>
              </div>
              <p className="footer-description">
                An AI-powered educational platform for mastering programming
                skills.
              </p>
            </div>

            <div className="footer-links">
              <h4 className="footer-heading">Learn</h4>
              <ul className="footer-list">
                <li>
                  <a href="#" className="footer-link">
                    Syntax
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Videos
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Puzzles
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    AI Assistant
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-links">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-list">
                <li>
                  <a href="#" className="footer-link">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-links">
              <h4 className="footer-heading">Legal</h4>
              <ul className="footer-list">
                <li>
                  <a href="#" className="footer-link">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">© 2025 CodeCampus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
