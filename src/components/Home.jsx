
import Keith from "../assets/keithWeb.png";
import { Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Nav from "./Nav";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { WhatsApp } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  bgcolor: "background.paper",
  border: "none",
  borderTopRightRadius:25,
  borderBottomRightRadius:25,
  borderTopLeftRadius:25,
  boxShadow: 24,
  p:3
};
  
const Home = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
                    <Button onClick={handleOpen}>
                      <p className="buttonText">Lets Talk</p>
                    </Button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          Contact me
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                          <div className="modalInf">
                            <div className="modalIcon">
                              <WhatsApp fontSize="large" />
                            </div>
                            <div className="modalNum">
                            
                              <span>0726770767</span>
                            </div>
                          </div>
                        </Typography>
                      </Box>
                    </Modal>
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
