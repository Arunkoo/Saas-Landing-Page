"use client";

import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
export default function CallToAction() {
    const [isHover, setIsHover] = useState(false);
    const animation = useRef<AnimationPlaybackControls | null>(null);
    const [scope, animate] = useAnimate();
    useEffect(() => {
        const controls = animate(
            scope.current,
            { x: "-50%" },
            { duration: 30, ease: "linear", repeat: Infinity }
        );
        animation.current = controls;
    }, []);

    useEffect(() => {
        if (animation.current) {
            if (isHover) {
                animation.current.speed = 0.5;
            } else {
                animation.current.speed = 1;
            }
        }
    }, [isHover]);
    return (
        <section className="py-24">
            <div className="overflow-x-clip p-4 flex">
                <motion.div
                    ref={scope}
                    onMouseEnter={() => {
                        setIsHover(true);
                    }}
                    onMouseLeave={() => {
                        setIsHover(false);
                    }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium group cursor-pointer"
                >
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-16">
                            <span className="text-lime-400 text-7xl">
                                &#10038;
                            </span>
                            <span className="group-hover:text-lime-400">
                                Try it for free
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
