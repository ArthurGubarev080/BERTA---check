import React, { Component, useState, useEffect } from "react";
import "../pages/Cars.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { imgImport } from "../utils/imgImport";

const Cars = ({ user }) => {
    const card = (
        <React.Fragment>
            <div className="black-sim-card">
                <CardContent className="aboutes-card">
                    <div className="header-aboutes">
                        <img
                            className="white-elem"
                            src={imgImport("Vector (5).png")}
                        ></img>
                        <Typography
                            component="div"
                            className="aboutes-word-first"
                        >
                            Клиент
                        </Typography>
                    </div>
                    <img
                        className="vector-card"
                        src={imgImport("Vector 13.png")}
                    ></img>
                    <Typography component="div" className="aboutes-word-second">
                        {user.name}
                    </Typography>
                    <Typography component="div" className="aboutes-word-third">
                        {user.phoneNumber}
                    </Typography>
                    <CardActions>
                        <Button size="small" className="aboutes-element">
                            Подробнее
                        </Button>
                    </CardActions>
                </CardContent>
            </div>
        </React.Fragment>
    );
    return (
        <Box sx={{ maxWidth: 251, maxHeight: 211 }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    );
};

export default Cars;
