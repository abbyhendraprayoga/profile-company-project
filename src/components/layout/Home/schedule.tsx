const Schedule = () => {
    return(
        <div className="flex flex-col p-32 justify-center items-center text-center gap-5">
            <h1 className="text-3xl font-bold">
                “Dynamic Discussions, Visionary Decisions”
            </h1>
            <p className="text-lg lg:w-[35rem] text-gray-400">Choose a committed team or allow us to craft your vision into reality.</p>
            <a
                href="https://wa.me/623614484425?text=Ready%20to%20take%20the%20next%20step%3F%20Let%E2%80%99s%20set%20up%20a%20time%20to%20connect%20and%20discuss%20your%20ideas."
                target="_blank"
                className="inline-flex py-3 px-10 text-base font-medium text-center text-white bg-indigo-800 hover:bg-indigo-900"
            >
                Schedule Here
            </a>
        </div>
    )
}

export default Schedule;