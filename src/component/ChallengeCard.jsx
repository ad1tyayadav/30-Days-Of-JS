import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const ChallengeCard = ({ challenge }) => {
    return (
        <Link to={`/challenge-details/${challenge.id}`}>
            <div className="challenge-card p-4 border bg-black rounded-lg shadow-md overflow-hidden mx-auto max-w-sm md:max-w-md lg:max-w-full">
                {/* Ensure image is displayed correctly */}
                <img
                    src={challenge?.image}
                    alt={challenge?.topic}
                    className="w-full h-48 object-cover"
                    style={{ borderRadius: '0.5rem' }} // Inline style to ensure image is rounded
                />
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-white">{challenge?.topic}</h3>
                    <p className="text-sm text-gray-100 mb-2">Day - {challenge?.day}</p>
                </div>
                <Button children={"Solve it!"} />
            </div>
        </Link>
    );
};

export default ChallengeCard;
