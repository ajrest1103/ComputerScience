import React from "react";

export default function Suggestion({ username, image }) {
    return (
        <div className="mt-4">

            <section className="flex justify-between items-center mb-4 gap-2">
                <img src={image} height="30" weight="30" className="rounded-full" />
                <div className="w-[180px]">
                    <p className="font-bold text-sm">{username}</p>
                    <p className="text-gray-500 text-xs">suggested for you</p>
                </div>
                <button className="text-blue-500 text-sm py-2">follow</button>
            </section>
        </div>
    );
}
 