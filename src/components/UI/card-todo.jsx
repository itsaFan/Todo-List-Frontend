import classes from "./css/card.module.css";

export default function CardTodoUI() {
  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <div className={classes.imgBox}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"
              fill="rgba(66,193,110,1)"
            ></path>
          </svg>
        </div>
        <span className={classes.title}>Features</span>
      </div>

      <div className={classes.content}>
        <p>Lorem ipsum dolor sit tali amet, consectus uy adipiscing it amet it...</p>

        <a className={classes.btnLink}>Read More...</a>
      </div>
    </div>
  );
}
