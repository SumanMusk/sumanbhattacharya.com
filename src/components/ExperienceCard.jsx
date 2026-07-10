import TagCard from "./TagCard"

const ExperienceCard = ({ experience }) => {
    return (
        <div className="w-80 sm:w-full rounded-2xl md:w-full lg:w-150 h-auto p-0.5 bg-gradient-to-b from-[#00cec9] to-[#e27d60] select-none">
            <div className="p-3 bg-[#231b25] rounded-2xl shadow-xl">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-2 items-center">
                        <div className="flex flex-col gap-2">
                            <span className="text-xl font-bold">{experience.ExpName}</span>
                            <span className="mt-0.5 text-[9px] lg:text-[13px] md:text-[11px]">{experience.ExpDate}</span>
                        </div>
                        <img src={`${experience.ExpImage}.png`} alt="" className="ml-auto self-center w-50 md:w-90 sm:w-70 sm:object-fit sm:shrink-0 rounded-xl pointer-events-none" />
                    </div>
                    <div className="flex gap-2">
                        <span className="ml-1 -mt-2 font-bold">&#46;</span>
                        <span className="text-xs font-bold underline">{experience.ExpDesg}</span>
                    </div>
                    <p className="ml-1 text-[13.5px] sm:text-[14.5px]">{experience.ExpDescription}</p>
                    <div className="ml-1 mt-2 flex flex-wrap gap-2 items-center">
                        {experience.ExpTechs.map((tech, i) => (
                            <TagCard key={i} Name={tech} BGColor="#2061db" isHover={false} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard
