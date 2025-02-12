import React from "react";
import classes from "./css/loading.module.css";

export default function MealsLoadingPage() {
  return <p className={classes.loading}>Fetching meals in loading</p>;
}
