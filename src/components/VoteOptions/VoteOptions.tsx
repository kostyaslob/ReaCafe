import css from "./VoteOptions.module.css";

export default function VoteOptions({ updateVotes, votes, resetVotes }) {
  return (
    <div className={css.container}>
      <button onClick={(votes) => updateVotes("good")} className={css.button}>
        Good
      </button>
      <button
        onClick={(votes) => updateVotes("neutral")}
        className={css.button}
      >
        Neutral
      </button>
      <button onClick={(votes) => updateVotes("bad")} className={css.button}>
        Bad
      </button>
      <button
        onClick={resetVotes}
        className={`${css.button} ${css.reset}`}
      >
        Reset
      </button>
    </div>
  );
}
