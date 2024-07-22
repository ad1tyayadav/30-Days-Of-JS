import React from "react";
import { challengeData } from "../../public/Daily Challenges/dailyChallengesData";
import ChallengeCard from "./ChallengeCard";

const Challenge = () => {
    return (
        <div className="container bg-black color-white mx-auto px-4 py-8">
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {challengeData.map((challenge) => (
                    <div key={challenge.id}>
                        <ChallengeCard challenge={challenge} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Challenge;
