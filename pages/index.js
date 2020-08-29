import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Link from "../src/Link";

// import ProTip from "../src/ProTip";
// import Copyright from "../src/Copyright";

export default function Index() {
  return (
    <>
      <AppBar postion="static">
        <Toolbar>
          <Typography variant="h6" component="h1" gutterBottom>
            BSO Employees Support Fund
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Box my={12}>
          {/* <Link href="/about" color="secondary">
          Go to the about page
        </Link> */}
          <Typography>
            <Box my={3}>
              <div>
                Were you impacted by the BSO's COVID-related shutdown? Please
                provide your contact information and let us know if you would
                like to request or decline support. Disbursements will begin
                immediately to full-time laid off employees, followed by
                part-time employees and others affected.
              </div>
              <Button
                variant="contained"
                href="https://forms.gle/u71aGtD8vQFPLBeP6"
                style={{ marginTop: 8, marginBottom: 12 }}
              >
                Request or Decline Support
              </Button>
              <div>
                Please note: If you do not wish to receive support, we ask you
                to fill out the form and select "No, I decline to request
                support." Knowing you have explicitly declined will help us
                direct those funds toward others in need and maintain our
                financial accounting appropriately.
              </div>
            </Box>

            <Box my={3}>
              <div>Are you able to help with administration?</div>
              <Button
                variant="contained"
                style={{ marginTop: 8 }}
                href="https://forms.gle/Hh9rybtrfbnDMdAB7"
              >
                Volunteer Here
              </Button>
            </Box>
            <div>
              Questions or Comments? Email{" "}
              <a href="mailto:info@bsoemployeesupport.org">
                info@bsoemployeesupport.org
              </a>
            </div>
          </Typography>
          {/* <Copyright /> */}
        </Box>
      </Container>
    </>
  );
}
