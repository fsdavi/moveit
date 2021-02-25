import { useContext } from 'react';
import styles from '../styles/components/CompletedChallenges.module.css';
import { ChallengesContext } from '../contexts/ChallengesContext';

export const CompletedChallenges = () => {
  return (
    <div className={styles.completedChallengesContainer}>
      <span>
        Desafios completos
      </span>
      <span>5</span>
    </div>
  )
}