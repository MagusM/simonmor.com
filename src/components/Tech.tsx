// import { BallCanvas } from "./canvas";
import { SectionWrapper } from "@/hoc";
import { technologies } from "@/constants";
import React from "react";

type TechnologyProps = {
  name: string,
  icon: string
}

const BallCanvas = React.lazy(() => import('./canvas/Ball'));

const Tech = () => {
  return (
    <div
      className="flex flex-row flex-wrap justify-center gap-10"
    >
      {technologies.map((technology: TechnologyProps, index: number) => (
        <div
          key={technology.name}
          className='w-28 h-28'
        >
          <BallCanvas icon={technology.icon} />
          {}
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, '')