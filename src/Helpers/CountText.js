import React,{ useEffect, useState } from "react";

export default function CountText({ speed, stop }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = stop;
        const duration = speed;
        const range = end - start;
        let currentCount = start;
        const increment = Math.ceil((end - start) / (duration / 100));
        const stepTime = Math.abs(Math.floor(duration / range));

        const timer = setInterval(() => {
            currentCount += increment;
            setCount(currentCount);
            if (currentCount >= end) {
                clearInterval(timer);
                setCount(end);
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [speed, stop]);

    return <span className="count-text">{count}+</span>;
}

