
import Keith from "../assets/keithWeb.png";
import { Grid, Chip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Nav from "./Nav";
import { Instagram } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Home = () => {
  return (
    <div className="mainOuter">
      <Nav />
      <div className="container">
        <Grid container>
          {/* <Grid Item xs={12} md={1} >
            <div className="left-ribbon">hello</div>
          </Grid> */}
          <Grid Item xs={12} md={6}>
            <div className="left-side">
              <div className="left-ribbon">
                <div className="mIcons">
                  <a href="https://github.com/KeithPrakash" target="_blank">
                    <GitHubIcon fontSize="large" />
                  </a>
                </div>
                <div className="mIcons">
                  <a
                    href="https://www.linkedin.com/in/keith-prakash-929369194/"
                    target="_blank"
                  >
                    <LinkedInIcon fontSize="large" />
                  </a>
                </div>
                <div className="mIcons">
                  <a
                    href="https://www.instagram.com/_keith_22__/"
                    target="_blank"
                  >
                    <InstagramIcon fontSize="large" />
                  </a>
                </div>
                <div className="mIcons">
                  <a
                    href="https://web.facebook.com/profile.php?id=100008778092396"
                    target="_blank"
                  >
                    <FacebookIcon fontSize="large" />
                  </a>
                </div>
              </div>
              <div className="separate">
                <div className="textOuter">
                  <div className="bigName">
                    {/* <h1>Keith&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </h1>
                    <h1>&nbsp; &nbsp; Prakash</h1> */}
                    <h1>Hello, I'm Keith Prakash</h1>
                  </div>
                  <h3 style={{ paddingBottom: 30 }}>Javascript Developer</h3>

                  {
                    <p>
                      I am a React and Node.js developer with experience in
                      building scalable web applications. My portfolio showcases
                      my expertise in developing robust front-end and back-end
                      solutions that deliver exceptional user experiences. As a
                      digital designer, I combine my technical skills with my
                      creativity to produce visually stunning designs that meet
                      clients' business objectives.
                    </p>
                  }
                </div>
                <div className="letsTalkOuter">
                  <div className="smallBall">
                    <p>Lets Talk</p>
                  </div>
                  <div className="bigBall"></div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid Item xs={12} md={6}>
            <div className="right-side">
              <div className="imageOuter">
                <div className="image-border">
                  <img src={Keith} />
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
