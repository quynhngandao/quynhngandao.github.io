import React from "react";
import "../../App.css";
import "../../components/Experience.css";
import PDF from "../PDF";
import { Box } from "@mui/material";

export default function Experience() {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* INTEREST */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          fontFamily: "roboto slab",
          border: "2px solid #ccc",
          borderRadius: "10px",
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#f9f9f9",
          textAlign: "center",
          width: "40%",
        marginLeft:"15px"
        }}
      >
        <section
          class="resume-section"
          id="interests"
          style={{ textAlign: "center",  minWidth:"100%", }}
        >
          <div class="resume-section-content"  style={{ textAlign: "center",  minWidth:"100%", }}>
            <h2 class="mb-5">About Me</h2>
            <p>
              I have contributed to projects, both independently and as part of
              a collaborative team, focusing on web application development. In
              addition to my tech background, I bring a diverse background that
              encompasses experience in the healthcare industry, customer
              service sector, a passion for animal care, and an interest in the
              evolving Web3 technology. My commitment to continuous learning and
              problem-solving drives me to seek opportunities where I can apply
              my skills and experience to make a positive impact.{" "}
            </p>
            <p>
              Apart from full-stack development, I enjoy bouldering and playing
              pickleball in the summer. During the winter, I enjoy snowboarding.
              I love anything horror and mystery/detective genres and anime. I
              am a big foodie so I spend a large amount of my free time
              exploring local restaurants.
            </p>

            <br />
            <p>I have a bunny, his name is Sr. Fluff</p>
            <img
              style={{ width: "300px", height: "200px", margin: "0" }}
              alt="fluff"
              src="https://scontent.ffcm1-2.fna.fbcdn.net/v/t1.6435-9/65309185_2545513058813810_2896765178395754496_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=Qr6aUewnaJsAX8Oo_mz&_nc_ht=scontent.ffcm1-2.fna&oh=00_AfCqZ_QUoCdj-qGiVDwmrta-Z8kWDfrvowRMkyczI6Kd2w&oe=650A6E81"
            />
          </div>
        </section>
      </Box>

      <PDF />
    </div>
  );
}
