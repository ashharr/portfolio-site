import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Ashhar Shaikh</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Senior Software Engineer</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
            I'm a Senior Software Engineer with 2.5+ years of experience in building scalable backend microservices.
            Currently working at Ascendion, I specialize in Java, Spring Boot, and cloud technologies.
            I'm passionate about writing clean, efficient code and driving innovation through AI transformation initiatives.
            <br />
            Technical Skills - Java, Spring Boot, Microservices, Docker, AWS, Python, React, TypeScript, MySQL, 
            Git, CI/CD, Test-Driven Development, RESTful APIs
            <br />
            <a
               href="https://leetcode.com/ashharr/"
               target="_blank"
               className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
               rel="noreferrer noopener"
            >
               LeetCode
            </a>{' '} | 
            <a
               href="https://github.com/ashharr/"
               target="_blank"
               className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
               rel="noreferrer noopener"
            >
               GitHub
            </a>{' '} | 
            <a
               href="mailto:shaikh.ashhar6@gmail.com?subject=Hi Ashhar :)"
               target="_blank"
               className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
               rel="noreferrer noopener"
            >
               Email
            </a>{' '}
         </p>
      </div>
   )
}

export default Intro;