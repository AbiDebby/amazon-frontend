import React from "react";
import classes from "./category.module.css";
import CategoryCard from "./CategoryCard";
import {CategoryFullinfos } from "./CategoryFullinfos";
function Category() {
  return (
    <div className={classes.category__container}>
      {CategoryFullinfos?.map((infos, i) => {
        return <CategoryCard data={infos} key={i} />;
      })}
    </div>
  );
}

export default Category;
