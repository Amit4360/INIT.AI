import React from 'react'
import styles from '../styles/aboutus.css'

const AboutUs = () => {
  return (
    <>
      <div id='AboutUs'>
        <div id="elem1" className='elem'>
          <div id="info">
            <h3>Who are we?</h3>
            <p>In a sentence, init.ai is the one-stop shop for all your hurdles of perplexity and alienation in understanding Artificial Intelligence. When we sat down to delve into the world of AI, we were confounded when our Google searches yielded an avalanche of resources which was staggering and startling. Do I refer a book? Do I watch a video? Should I listen to this podcast? It left us in a state of bother. The sole purpose of forming this club was that others don’t fall into this pit of uncertainty. Well, guess what. No more random and wayward searches needed, we got you all covered. We have eliminated the hassle of finding the right material by presenting all the information in a tailored manner to guide you in the right direction. We aim at providing a self-tested, streamlined path full of curated resources to unlock the AI scientist in you.</p>
          </div>
          <img src="./Init.png"/>
        </div>

        <div id="elem2" className='elem'>
        <img src="./AI.png"/>
          <div id="info">
            <h3>Why AI?</h3>
            <p>‘Big Data is the new natural resource’ – IBM.</p>
            <p>‘AI is the new electricity’ - Andrew Ng, Chief Scientist of Baidu, Co-Founder of Coursera, Professor at Stanford University.</p>
            <p>It’s pretty evident from the two quotes that Data and AI are going to shape the future of the world. We believe that with the increasing advances in making machines smarter and amount of data growing day by day, the AI era has begun and it is going to revolutionize all spheres of life be it commuting to your office in a driverless car or getting interviewed by a chatbot. Sounds fun? This is exactly what attracted and pulled us towards AI. No wonder the job profile “Data Scientist” has been quoted as the sexiest job of 21st century. Because AI is making heads turn; and it most certainly has our undivided attention.</p>
          </div>
        </div>

        <div id="elem3" className='elem'>
          <div id="info">
            <h3>Our mission</h3>
            <p>To present an extensive resource collection of AI and its sub-domains, to empower individuals with a fundamental understanding of the essential AI skills and to provide a platform to achieve proficiency and confidence for building AI-driven solutions.</p>
          </div>
          <img src="./Mission.jpg"/>
        </div>

        <div id="elem4" className='elem'>
        <img src="./Team.jpg"/> 
          <div id="info">
            <h3>The Team</h3>
            <p>Essentially, we are just like you. We check all the boxes for a typical CS engineer stereotype. Not happy with the curriculum, check. Feel like our potential is being squandered, check. But, there is a teensy bit more to us than just the aforementioned stereotypes. Individually, all of us have been through the exact same journey wherein we first toyed with Web development, then we moved onto Android app-dev because it was “the rage” and if you did not know app-dev then you’d be considered a dummy. We couldn’t really find our footing in these domains and they just did not have that X-factor for us. But, we are a pack of inquisitive, intrusive, impatient minds. Our stubbornness made us look further and after flirting with a few other domains, we finally found our sweet spot. Artificial Intelligence is where it’s at for us. We were fascinated by the AI dream and that is what brought us together as we attempt to transform it into a reality. Don’t get me wrong, we ourselves are no Andrew Ng’s yet but having said that, we are constantly striving to get there. This initiative is to ensure that you guys do not have to struggle or toil the way we have had to, to really grasp the fundamentals of AI and its sub-domains. For us, heaven is that point where we will have reached a peak understanding of AI and for everyone out there who wishes to be a part of this journey, our motive is to create a stairway to that heaven.</p>
          </div>
        </div>

        <div id="elem5" className='elem'>
          <div id="info">
            <h3>Our vision</h3>
            <p>To build an AI-ready community and to contribute towards building an AI-driven world.</p>
          </div>
          <img src="./Vision.png"/>
        </div>
      </div>
    </>
  )
}

export default AboutUs