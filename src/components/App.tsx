import css from "./App.module.css"
import CafeInfo from "./CafeInfo/CafeInfo";
import VoteOptions from "./VoteOptions/VoteOptions";
import VoteStats from "./VoteStats/VoteStats";
import Notification from "./Notification/Notification"
import { useState } from "react";

import {Votes, VoteType} from "../types/votes"

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const handleVotes = (type:  keyof VoteType) => {
    setVotes({
      ...votes,
      [type]: votes[type] + 1,
    })
  }
  
  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }


  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        updateVotes={handleVotes}
        votes={votes}
        resetVotes={resetVotes}
      />
      <VoteStats votes={votes} />
      <Notification />
    </div>
  );
}