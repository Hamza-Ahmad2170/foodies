import { Suspense } from "react";
import Link from "next/link";

import classes from "./page.module.css";
import MealsGrid from "@/components/MealsGrid";
import { getMeals } from "@/lib/meals";

export const metadata = {
  title: "All Meals",
  description: "Browse all the delicious recipes shared by the community.",
};

async function Meals() {
  const meals = await getMeals();
  console.log(meals);

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipes and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipes</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching meals </p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
