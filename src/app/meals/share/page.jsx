"use client";

import { useFormState } from "react-dom";
import classes from "./page.module.css";
import ImagePicker from "@/components/ImagePicker";
import MealsFormSubmit from "@/components/MealsFormSubmit";
import { shareMeal } from "@/lib/actions";

export default function ShareMealPage() {
  const [state, formAction] = useFormState(shareMeal, { message: "" });
  console.log(state);

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </p>
          <p>
            <label htmlFor="summary">Short Summery</label>
            <input type="text" id="summery" name="summery" />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
            ></textarea>
          </p>
          <ImagePicker name="image" label="Image" />
          {state.message && <p>{state.message}</p>}
          <p className={classes.actions}>
            <MealsFormSubmit>Share Meal</MealsFormSubmit>
          </p>
        </form>
      </main>
    </>
  );
}
