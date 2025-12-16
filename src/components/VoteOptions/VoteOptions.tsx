import type { VoteType } from "../../types/votes";
import css from "./VoteOptions.module.css";


interface VoteOptionsProps {
  onVotes: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

export default function VoteOptions({ onVotes, onReset, canReset }: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button onClick={() => onVotes("good")} className={css.button}>
        Good
      </button>
      <button onClick={() => onVotes("neutral")} className={css.button}>
        Neutral
      </button>
      <button onClick={() => onVotes("bad")} className={css.button}>
        Bad
      </button>
      {canReset  && (
        <button onClick={onReset} className={`${css.button} ${css.reset}`}>
          Reset
        </button>
      )}
    </div>
  );
}
