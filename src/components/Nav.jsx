import {Grid , Avatar} from "@mui/material"
import EmailIcon from "@mui/icons-material/Email";
import { red } from "@mui/material/colors";
import { color } from "@mui/system";
import { Link } from "react-router-dom";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const Nav = () => {
    return (
      <div className="navOuter">
        <Grid container>
          <Grid item xs={12} sm={6}>
            <div className="leftNav">
              <h1><span style={{color:""}}>D</span>attebayoo!</h1>
            </div>
          </Grid>
           <Grid item xs={12} sm={6}>
            <div className="rightNav">
              <div className="topContact">
                <div className="phoneOuter">
                  <div className="phoneIcon">
                    <LocalPhoneIcon fontSize="small"/>
                  </div>
                  <div className="number">
                    <p>(+94)726770767</p>
                  </div>
                </div>
                <div className="emailOuter">
                  <div className="mailIcon">
                    <EmailIcon fontSize="small" />
                  </div>
                  <div className="email">
                    <p>keith.prakash99@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
}



 
export default Nav;