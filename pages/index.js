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
            Are you able to help with administration? <br />
            <Button
              variant="contained"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdCd6-8eYlY7ttFttusSifrA3FPhUAWOmZhnqlBUzln2M9U8A/viewform"
            >
              Volunteer Here
            </Button>
            <br />
            <br />
            {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLSdZAe0ZrenSkjk8HiAMiYLY-ptRUpQUUpmVlJpzspKHLyWaOQ/viewform">
            Request or decline support from the fund
          </a> */}
            Questions or Comments? Email{" "}
            <a href="mailto:info@bsoemployeesupport.org">
              info@bsoemployeesupport.org
            </a>
          </Typography>
          {/* <Copyright /> */}
        </Box>
      </Container>
    </>
  );
}
