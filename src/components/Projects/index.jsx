import { useState, useEffect } from "react"
import "./style.css"
import BackgroundLines from "../BackgroundLines"
import WorkCard from "../WorkCard"
import ScrambleText from "../ScrambleText"
import ParaWriting from "../ParaWriting"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import work1 from "../../assets/Images/work1.png"
import work2 from "../../assets/Images/work2.png"
import work3 from "../../assets/Images/work3.png"

export default function Projects() {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const [hasAnimated, setHasAnimated] = useState(false)

  const handleComplete = () => {
    setHasAnimated(true)
  }

  useEffect(() => {
    // Start animation when the component is in view
    if (inView && !hasAnimated) {
      controls.start("visible")
    }
  }, [inView, controls])

  const works = [
    {
      client: "OnLine Library Platform",
      year: "2024",
      img: work1,
      title: "A digital library platform for book lovers.",
      detail: "OnLine Library Platform is a web application that allows users to search, purchase, and manage books online. It features a user-friendly interface, advanced search capabilities, and secure purchasing system.",
    },
    {
      client: "NFT Marketplace",
      year: "2024",
      img: work2,
      title: "An NFT marketplace for digital art.",
      detail: "Transformed a completely static website into a dynamic, interactive platform using React.js and Next.js. Implemented responsive design principles to ensure optimal user experience across all devices.",
    },
    {
      client: "Summarist",
      year: "2024",
      img: work3,
      title: "A place to read or listen to bestsellers books.",
      detail: "Summarist, an Advanced Intership Project is  the development of a bootk library app using Next.js, Typescript and Firebase with a responsive UI."
    },
  ]

  const opacityVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <section ref={ref} className="projects" id="projects">
      <BackgroundLines />
      <div className="background--glow"></div>

      <div className="projects--grid">
        <motion.div initial="hidden" animate={controls} variants={opacityVariant} transition={{ duration: 1, delay: 0.5 }} className="projects--grid--title">
          <h3 className="theme--text">
            <ScrambleText shuffle delay={0.5}>
              03
            </ScrambleText>{" "}
            <span className="hash">{"//"}</span>{" "}
            <ScrambleText shuffle delay={0.5}>
              Expertise
            </ScrambleText>
          </h3>
        </motion.div>

        <div className="projects--grid--content">
          <div className="projects--grid--content--heading">
            <h2>
              <ParaWriting stagger={0.08} text={"My "} sec={"Works"} />
            </h2>
          </div>
          <div className="projects--grid--content--works">
            {works.map((item, index) => {
              return (
                <WorkCard
                  item={item}
                  key={index}
                  // delay={0.1 * index + 1}
                  // controls={controls}
                />
              )
            })}
          </div>
        </div>

        <motion.div initial="hidden" animate={controls} variants={opacityVariant} transition={{ duration: 1, delay: 1 }} onAnimationComplete={() => handleComplete()} className="projects--grid--detail">
          <p className="theme--detail">
            <ScrambleText delay={1}>Explore a dynamic portfolio of projects where modern frontend development practices come to life, showcasing creativity, innovative problem-solving, and technical expertise in every line of code.</ScrambleText>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
