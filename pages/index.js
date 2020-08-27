import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "../src/Link";

// import ProTip from "../src/ProTip";
// import Copyright from "../src/Copyright";

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          BSO Employees Support Fund
        </Typography>
        {/* <Link href="/about" color="secondary">
          Go to the about page
        </Link> */}
        <Typography>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdCd6-8eYlY7ttFttusSifrA3FPhUAWOmZhnqlBUzln2M9U8A/viewform">
            Volunteer to help with administration
          </a>
          <br />
          {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLSdZAe0ZrenSkjk8HiAMiYLY-ptRUpQUUpmVlJpzspKHLyWaOQ/viewform">
            Request or decline support from the fund
          </a> */}
        </Typography>
        {/* <Copyright /> */}
      </Box>
    </Container>
  );
}
