import css from "./VoteOptions.module.css";

export default function VoteOptions({ onVotes, votes, onReset }) {
  return (
    <div className={css.container}>
      <button onClick={(votes) => onVotes("good")} className={css.button}>
        Good
      </button>
      <button onClick={(votes) => onVotes("neutral")} className={css.button}>
        Neutral
      </button>
      <button onClick={(votes) => onVotes("bad")} className={css.button}>
        Bad
      </button>
      <button onClick={onReset} className={`${css.button} ${css.reset}`}>
        Reset
      </button>
    </div>
  );
}
