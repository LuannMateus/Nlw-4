import Head from 'next/head';
import { GetServerSideProps } from 'next';

import styles from '../styles/pages/Home.module.css';

import ExperienceBar from '../components/ExperienceBar';
import { Profile } from '../components/Profile'
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../context/CountdownContext';
import { ChallengesProvider } from '../context/ChallengeContext';


interface HomeProps {
  level: number;
  currentExperience: number;
  challengensCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <div className={styles.container}>
      <ChallengesProvider 
        level={props.level} 
        currentExperience={props.currentExperience} 
        challengensCompleted={props.challengensCompleted}>
        <Head>
          <title>Início | Move.it</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div className={styles.challengeBox}>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>

      </ChallengesProvider>

    </div>

  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengensCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengensCompleted: Number(challengensCompleted),
    }
  }
}
