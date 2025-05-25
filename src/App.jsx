import React from "react";
import { motion, useScroll } from "motion/react";

function App() {
  const scrollYProgress = useScroll().scrollYProgress;
  return (
    <div className="p-20 text-center text-white font-mono">
      <motion.div
        style={{
          scaleX: scrollYProgress,
        }}
        className="bg-red-500 origin-left w-full h-3 fixed top-0 left-0"
      ></motion.div>

      <h2 className="text-4xl font-bold mb-8">Nikunj Usadadiya</h2>
      <p>
        Television: A Window to the World Television, often simply called TV, is
        one of the most influential inventions of the 20th century. From its
        humble beginnings as a black-and-white broadcast box to today’s
        ultra-high-definition smart displays, television has become a central
        part of modern life. It informs, entertains, educates, and even
        influences societal behavior. This essay explores the origin and
        evolution of television, its positive and negative impacts, and its role
        in the digital era. The Origins of Television The concept of television
        dates back to the late 19th and early <br />
        <br /> 20th centuries. The word “television” combines the Greek word
        tele (meaning "far") and the Latin word visio (meaning "sight"). Early
        efforts in mechanical television were pioneered by inventors like Paul
        Nipkow, who developed the Nipkow disk in 1884, a spinning disk used to
        scan images line by line. In the 1920s and 1930s, significant
        advancements were made in electronic television. American inventor Philo
        Farnsworth and Russian-born Vladimir Zworykin both developed key
        technologies that led to the modern electronic TV system. The first
        television broadcasts occurred in the late 1930s, but World War II
        slowed its growth. After the war, TV rapidly gained popularity,
        especially in the United States and Europe. The Golden Age of Television
        The 1950s and 1960s are often referred to as the "Golden Age of
        Television." During this period, TV sets became common household items.
        Programming expanded to include dramas, sitcoms, variety shows, and news
        broadcasts. Shows like I Love Lucy, The Twilight Zone, and The Ed
        Sullivan Show became cultural phenomena. Television united families in
        living rooms, offering shared experiences and a new form of
        storytelling. This era also saw the rise of national and international
        broadcasting corporations. In the U.S., networks such as NBC, CBS, and
        ABC dominated the airwaves. In the UK, the BBC played a similar role.
        These broadcasters shaped nati
        <br />
        <br />
        onal culture and values, and television began to influence politics,
        especially with the televised 1960 Kennedy-Nixon debates. Television as
        an Educational Tool Television is more than just entertainment. It has
        been a powerful educational medium. Shows like Sesame Street, launched
        in 1969, revolutionized children’s programming by combining fun
        characters with early childhood education. Documentaries and nature
        programs, like those produced by National Geographic and the BBC,
        brought science, history, and global cultures into living rooms.
        Educational television is particularly important in developing
        countries. In areas with limited access to schools or resources,
        educational programming has helped teach literacy, health practices, and
        vocational skills. Television as an Educational Tool Television is more
        than just entertainment. It has been a powerful educational medium.
        Shows like Sesame Street, launched in 1969, revolutionized children’s
        programming by combining fun characters with early childhood education.
        Documentaries and nature programs, like those produced by National
        Geographic and the BBC, brought science, history, and global cultures
        into living rooms. Educational television is particular
      </p>

      <br />
      <br />
      <br />
      <address>
        GLS Univercity Road <br />
        Sec-6,Ahmedabad,Gujarat
      </address>
      <div className="res">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.529394466927!2d72.5566202744477!3d23.026555716181186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f07cf71307%3A0x804503470ffe80ea!2sGLS%20University!5e1!3m2!1sen!2sin!4v1747979357961!5m2!1sen!2sin"
          width="600"
          height="450"
          allowfullscreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div>
//       <motion.div
//        className='box'
//       //  initial={{
//       //   x:0
//       //  }}

//       //  animate={{
//       //  x:[0,1000,1000,0,0],
//       //  y:[0,0,500,500,0],
//       //  rotate:[0,360,0,-360,0]
//       //  }}

//       //  transition={{
//       //   duration:4,
//       //   delay:1,
//       // repeat:Infinity,
//       // ease:"anticipate" }}

//       whileHover={{
//        backgroundColor:"red"
//       }}
//       whileTap={{scale:0.5}}
//       drag
//       dragConstraints={{
//         left:0,
//         right:1000,
//         top:0,
//         bottom:500
//       }}
//       dragDirectionLock='true'
//       >

//       </motion.div>

//     </div>
//   )
// }
