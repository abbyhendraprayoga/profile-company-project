// import Image from 'next/image';

export default function Project() {
  return (
    <div>
      <div className="project">
        <h1>PROJECTS</h1>
      </div>
      <div className="transforming">
        Transforming ideas into impactful solutions for <br></br> our clients
      </div>
      <div className="explore">
        Explore our impressive portfolio of projects that have been successfully
        delivered to our clients.
      </div>
      <div className="navbar">
        <div className="all">
          <a href="All">All</a>
        </div>
        <div className="web">
          <a href="Web">Web</a>
        </div>
        <div className="mobile">
          <a href="Mobile">Mobile</a>
        </div>
        <div className="desktop">
          <a href="Desktop">Desktop</a>
        </div>
        <div className="iot">
          <a href="IoT">IoT</a>
        </div>
        <div className="ai">
          <a href="AI">AI</a>
        </div>
      </div>
      <img src="/Image/projects/aiso.jpg" width={750} height={700} />
      <div className="aiso">
        <h1>Aiso</h1>
        <h2>
          We have supported development of <br></br>Love Bali Sistem for Bali
          Government.
        </h2>
      </div>
      <div className="bridgewater">
        <img src="/Image/projects/bridgewater.jpg" width={787} height={700} />
      </div>
      <div className="bridgewatertext">
        <h1>
          Bridgewater Joy <br></br>Residence
        </h1>
        <h2>
          Co-designed by the world-renowned <br></br>architect James Smith, our
          <br></br>
          Bridgewater Joy residences offer top <br></br>views of the nearby lake
          Michigan. <br></br>Perfect for a small family, a <br></br>professional
          couple, or anyone looking <br></br>to set up a home office.
        </h2>
      </div>
      <div className="pleasantview">
        <img src="/Image/projects/pleasantview.jpg" width={750} height={700} />
      </div>
      <div className="pleasantviewtext">
        <h1>Pleasantview Gem Inn</h1>
        <h2>
          Not just pleasant on the outside, our <br></br>Pleasantview Gem Inn
          properties are<br></br> especially popular among families. <br></br>
          With underground parking and floor-<br></br>to-ceiling windows, there
          s no shortage <br></br>of natural light or space.
        </h2>
      </div>
      <div className="dynamic">
        <h1>“Dynamic Discussions, Visionary Decisions”</h1>
        <h2>
          Choose a committed team or allow us to craft your vision into{" "}
          <br></br>reality.
        </h2>
      </div>
      <div className="schedule">
        <a href="Schedule Here">Schedule Here</a>
      </div>
      <div className="bottom">
        <h1>DIMATA</h1>
        <h2>
          Jl. Danau Tempe No.21A, Sidakarya, <br></br>Denpasar Selatan, Kota
          Denpasar, Bali <br></br>80224
        </h2>
        <div className="contact">
          <div className="contactb">
            <h2>Contact Us</h2>
          </div>
          <h2>
            marketing@dimata.com <br></br>+62 361 448-4425
          </h2>
        </div>
        <br></br>
        <div className="contactus"></div>
        <div className="follow">
          <h2>Follow Us</h2>
          <div className="logo">
            <div className="fb">
              <img src="Image/projects/fb.png" width={34} height={34} />
            </div>
            <div className="ig">
              <img src="Image/projects/ig.png" width={34.5} height={34.5} />
            </div>
            <div className="in">
              <img src="Image/projects/in.png" width={39.5} height={39.5} />
            </div>
          </div>
        </div>
        <div className="company">
          <h1>Company</h1>
          <h2>
            About <br></br>Our Services <br></br>Our Products <br></br>Our
            Projects <br></br>Contact
          </h2>
        </div>
        <div className="resource">
          <h1>Resource</h1>
          <h2>
            Help <br></br>Community <br></br>Forum <br></br>Training
          </h2>
        </div>
        <div className="legal">
          <h1>Legal</h1>
          <h2>
            Terms & Conditions <br></br>Privacy <br></br>Licenses
          </h2>
        </div>
        <div className="dimatab">
          <p>© 2024 Dimata. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
