import Link from "next/link";
import Image from "next/image";

import classes from "./css/MealItem.module.css";

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1700px) 427px, (min-width: 1260px) calc(24.29vw + 19px), (min-width: 800px) calc(45vw - 40px), (min-width: 400px) 90vw, calc(27.5vw + 238px)"
            priority={true}
          />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
