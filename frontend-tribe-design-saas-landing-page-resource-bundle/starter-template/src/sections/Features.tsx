import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg";
import Keys from "@/components/Keys";
import Image from "next/image";
import Avatar from "@/components/Avatar";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Feature</Tag>
                </div>

                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
                    Where power meets{" "}
                    <span className="text-lime-400">simplicity</span>
                </h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3  gap-8">
                    <FeatureCard
                        title="Real-time Collaboration"
                        description="Work together seamlessly with conflict-freee
                                team editing"
                        className="md:col-span-2  lg:col-span-1 group"
                    >
                        <div className=" aspect-video flex items-center justify-center">
                            <Avatar className="z-40">
                                <Image
                                    src={avatar1}
                                    alt="avatar1"
                                    className="rounded-full "
                                />
                            </Avatar>
                            <Avatar className="-ml-6 z-30 border-indigo-500">
                                <Image
                                    src={avatar2}
                                    alt="avatar2"
                                    className="rounded-full "
                                />
                            </Avatar>
                            <Avatar className="-ml-6 z-20 border-amber-500">
                                <Image
                                    src={avatar3}
                                    alt="avatar3"
                                    className="rounded-full "
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-transparent group-hover:border-green-500 transition">
                                <div className=" relative size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1">
                                    <Image
                                        src={avatar4}
                                        alt="avatar-4"
                                        className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition"
                                    />
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <span
                                            className="size-1.5 rounded-full bg-white inline-flex"
                                            key={i}
                                        ></span>
                                    ))}
                                </div>
                            </Avatar>
                        </div>
                    </FeatureCard>
                    <FeatureCard
                        title="Interactive Prototyping"
                        description=" Engage your clients with prototypes that react
                                to user actions"
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video flex item-center justfy-center">
                            <p className="text-4xl font-extrabold text-white/20 text-center group-hover:text-white/10 transition duration-500">
                                We&apos;ve achieved{" "}
                                <span className="relative bg-gradient-to-r from bg-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    <span>incredible</span>
                                    <video
                                        src="/gif-incredible.mp4"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="  absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500"
                                    />
                                </span>{" "}
                                growth this year
                            </p>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Keyboard Quick Actions"
                        description="Powerful commands to help you create designs more
                                quickly"
                        className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto group"
                    >
                        <div className="aspect-video flex items-center justify-center gap-4">
                            <Keys className="w-28 outline  outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 transition group-hover:translate-y-1 duration-500">
                                shift
                            </Keys>
                            <Keys className=" outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 group-hover:translate-y-1 duration-500 delay-150">
                                alt
                            </Keys>
                            <Keys className="outline  outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 group-hover:translate-y-1 duration-500 delay-300">
                                C
                            </Keys>
                        </div>
                    </FeatureCard>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    {features.map((feature) => (
                        <div
                            key={feature}
                            className="bg-neutral-900 border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group"
                        >
                            <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">
                                &#10038;
                            </span>
                            <span className="font-medium md:text-lg">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
