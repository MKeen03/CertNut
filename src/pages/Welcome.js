import * as React from "react";
import { borderLeft, Box } from "@mui/system";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Typography } from "@mui/material";
import DoNotDisturb from "@mui/icons-material/DoNotDisturb";
import techthree from "../assets/tech3.png";
import techtwo from "../assets/tech2.png";

export default function Welcome() {
  return (
    <>
      <div style={{}}>
        <Box
          sx={
            {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: 500,
              width: 1400,
              border: 2,
              borderRadius: 2,
              borderColor: "#6c8ff9",

              backgroundImage: `url(${techtwo})`,
            }
            // backgroundColor: '#335c67',
          }
        >
          <h1
            style={{
              color: "white",
              fontSize: "6rem",
            }}
          >
            Welcome to CertNut
          </h1>
          <br />
          <h4
            style={{
              color: "white",
            }}
          >
            CertNut is here to help you study! We are in the process of adding
            multiple options to help prepare you for specific Certifications!
          </h4>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 200,
            width: 1400,
            backgroundColor: "white",
          }}
        >
          <DoNotDisturb sx={{ color: "#c08096", fontSize: 40 }} />
          <h3
            style={{
              color: "#15013f",
            }}
          >
            CertNut is AD driven website. We'd greatly appreciate you turning
            off ad-blocker.
          </h3>
          <DoNotDisturb sx={{ color: "#c08096", fontSize: 40 }} />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 300,
            width: 1400,
            backgroundImage: `url(${techthree})`,
            border: 2,
            borderRadius: 2,
            borderColor: "#6c8ff9",
          }}
        >
          <ArrowBackIcon sx={{ fontSize: 200, color: "#ffffff" }} />{" "}
          <h2 style={{ color: "#ffffff" }}>
            {" "}
            Click on the Certifications on the left side of the page to get
            started!
          </h2>
        </Box>
      </div>
    </>
  );
}
