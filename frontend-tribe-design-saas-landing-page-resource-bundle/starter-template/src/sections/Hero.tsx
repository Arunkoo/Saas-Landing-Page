"use client";
import Button from "@/components/Button";
import designExampleImage1 from "@/assets/images/design-example-1.png";
import designExampleImage2 from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
// import cursorYou from "@/assets/images/cursor-you.svg";

export default function Hero() {
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();
    const [rightDesignScope, rightDesignAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();

    useEffect(() => {
        // left animation.....
        leftDesignAnimate([
            [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);
        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [
                leftPointerScope.current,
                { x: 0, y: [0, 16, 0] },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);
        // right animation...
        rightDesignAnimate([
            [
                rightDesignScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
        ]);
        rightPointerAnimate([
            [
                rightPointerScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightPointerScope.current, { x: 100, y: 0 }, { duration: 0.5 }],
            [
                rightPointerScope.current,
                { x: 0, y: [0, 16, 0] },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);
    }, []);
    return (
        <section className="py-20 overflow-x-clip hero-section">
            <div className="container relative">
                <motion.div
                    ref={leftDesignScope}
                    drag
                    initial={{ opacity: 0, y: 100, x: -100 }}
                    className="hidden lg:block absolute -left-6 top-20 z-30"
                >
                    <Image
                        src={designExampleImage1}
                        draggable="false"
                        alt="Design example 1 image"
                        className="size-{240}"
                    />
                </motion.div>

                {/* Pointer Component */}
                <motion.div
                    ref={leftPointerScope}
                    initial={{ opacity: 0, y: 100, x: -300 }}
                    className="hidden lg:block absolute left-[450px] top-[400px]"
                >
                    <Pointer name="andrea" className="bg-red-500" />
                </motion.div>
                <motion.div
                    ref={rightPointerScope}
                    initial={{ opacity: 0, y: 275, x: 300 }}
                    className="hidden lg:block absolute right-[450px] top-[100px] z-40"
                >
                    <Pointer name="Alex" className=" bg-blue-500" />
                </motion.div>

                <motion.div
                    ref={rightDesignScope}
                    drag
                    initial={{ opacity: 0, x: 100, y: 100 }}
                    className="hidden lg:block absolute -right-[100px] top-10 z-30"
                >
                    <Image
                        src={designExampleImage2}
                        draggable="false"
                        alt="Design example 2 image"
                    />
                </motion.div>

                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                        ✨$7.5M seed round raised
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-center text-6xl md:7xl font-medium mt-6 max-w-2xl">
                        Impactful design, created effortlessly
                    </h1>
                    <p className="text-center text-xl text-white/50 mt-8 max-w-2xl">
                        From idea to execution, we bring your vision to life.
                        Our team of experts crafts scalable, high-performance
                        solutions tailored to your needs. Let&apos;s create
                        something extraordinary—together.
                    </p>
                </div>

                <div className="mt-8 max-w-lg md:ml-auto md:mr-auto">
                    <form className="flex justify-between border py-3 px-2  border-white/15 rounded-full  ">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-transparent px-6 outline-none md:flex-1 w-full"
                        />
                        <Button
                            type="submit"
                            variant="primary"
                            className="whitespace-nowrap px-2"
                        >
                            Sign Up
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
