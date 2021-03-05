import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ChallengesContext } from './ChallengeContext';

interface CountDownContextData {
    time: number;
    isActive: boolean;
    hasFinished: boolean;
    minutes: number;
    seconds: number;
    startCountdown: () => void;
    resetCountdown: () => void;
}

interface CountdownProviderProps {
    children: ReactNode
}

export const CountdownContext = createContext({} as CountDownContextData)

export function CountdownProvider({ children }: CountdownProviderProps) {

    let countdownTimeout: NodeJS.Timeout;

    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.2 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;


    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setHasFinished(false)
        setTime(25 * 60)
    }

    useEffect(() => {

        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge()
        }

    }, [isActive, time])

    return (
        <CountdownContext.Provider value={{
            time,
            isActive,
            hasFinished,
            minutes,
            seconds,
            startCountdown,
            resetCountdown

        }}>
            {children}
        </CountdownContext.Provider>

    )

}