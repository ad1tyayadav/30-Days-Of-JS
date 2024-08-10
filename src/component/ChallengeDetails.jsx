import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from './Button';
import { challengeData } from '../../public/Daily Challenges/dailyChallengesData';

const ChallengeDetails = () => {
    const { id } = useParams();
    const challenge = challengeData.find(ch => ch.id === parseInt(id));

    if (!challenge) return <p>Challenge not found</p>;

    return (
        <div className="container mx-auto px-8 flex flex-col w-[100%] items-center py-8">
            <p className="text-xl font-bold">Day - {challenge.day}</p>
            <h1 className="text-3xl font-bold mb-8">Topic : {challenge.topic}</h1>
            <img src={challenge.image} alt={challenge.topic} className="w-full object-cover mb-4 mt-3" />
            <Link to={challenge.gitrepo}>
                <Button>Check Solution</Button>
            </Link>

        </div>
    );
};

export default ChallengeDetails;
