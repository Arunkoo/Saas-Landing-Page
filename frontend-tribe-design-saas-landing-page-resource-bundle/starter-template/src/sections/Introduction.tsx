"use client";
import { useScroll, useTransform } from "framer-motion";

import Tag from "@/components/Tag";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words = text.split(" ");
export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ["start end", "end end"],
    });
    const [currentWord, setCurrentWord] = useState(0);
    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);
    useEffect(() => {
        wordIndex.on("change", (latest) => {
            setCurrentWord(latest);
        });
    }, [wordIndex]);
    return (
        <section className="py-28 lg:py-20">
            <div className="container">
                <div className="sticky top-28">
                    <div className="flex justify-center">
                        <Tag>Introducing Layer</Tag>
                    </div>

                    <div className="text-4xl md:6xl text-center font-medium mt-10 ">
                        <span>Your creative process deserves better</span>{" "}
                        <span className="">
                            {words.map((word, index) => (
                                <span
                                    key={index}
                                    className={twMerge(
                                        "transition duration-500 text-white/15",
                                        index < currentWord && "text-white"
                                    )}
                                >{`${word} `}</span>
                            ))}
                        </span>
                        <span className="text-lime-400 block">
                            That&apos;s why we built Layers.
                        </span>
                    </div>
                </div>
                <div className="h-[150vh]" ref={scrollTarget}></div>
            </div>
        </section>
    );
}
