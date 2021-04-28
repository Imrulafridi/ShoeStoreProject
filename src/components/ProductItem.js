import React from "react";
import { Button, Container, Typography } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import Sneakers from "../sneakers.json";

const ProductItem = () => {
  const { slug } = useParams();
  const { sneakers } = Sneakers;
  const shoe = sneakers[slug];

  return (
    <div>
      <Link to="/product" className="back">
        <Button variant="contained" color="primary">
          BACK
        </Button>
      </Link>
      <br />
      <div>
        <Container maxWidth="sm" className="cardcontianer">
          <Typography variant="h6" gutterBottom>
            FULL NAME : {shoe.name}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            CATEGORY : {shoe.category} <br />
            FOR : {shoe.gender} <br />
            STATUS : <b> {shoe.status} </b>
          </Typography>
          <img src={shoe.grid_picture_url} alt={shoe.name} />
          <Typography variant="overline" display="block" gutterBottom>
            Designer : <b> {shoe.designer} </b> <br />
            COLOR : <b> {shoe.details} </b>
          </Typography>
          <Typography variant="body2" gutterBottom>
            MADE UP OF :{" "}
            <b>
              {" "}
              {shoe.upper_material === "" || "null"
                ? "NO DETAIL"
                : shoe.upper_material}
            </b>
          </Typography>
        </Container>
      </div>
    </div>
  );
};

export default ProductItem;
