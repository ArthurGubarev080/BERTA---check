import React, { Component, useState, useEffect } from "react";
import "../pages/Cars.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { imgImport } from "../utils/imgImport";

const Cars = () => {
    const Point = (
        <React.Fragment>
            <CardContent>
                <div className="header-aboutes-second">
                    <img src={imgImport("Vector (6).png")}></img>
                    <Typography component="div" className="">
                        История клиента
                    </Typography>
                    <Typography component="div" className="">
                        (5)
                    </Typography>
                </div>
                <img
                    className="vector-card"
                    src={imgImport("Vector 13.png")}
                ></img>
                <CardActions>
                    <Button size="small" className="">
                        Активные заявки (2)
                    </Button>
                </CardActions>
                <Typography component="div" className="">
                    Toyota City Almaty (2)
                </Typography>
                <Typography component="div" className="">
                    Porsche Center Almaty
                </Typography>
                <CardActions>
                    <Button size="small" className="">
                        Подробнее
                    </Button>
                </CardActions>
            </CardContent>
        </React.Fragment>
    );
    return (
        <Box sx={{ maxWidth: 251, maxHeight: 211 }}>
            <Card variant="outlined">{Point}</Card>
        </Box>
    );
};

export default Cars;
