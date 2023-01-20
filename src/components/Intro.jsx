import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Ashhar Shaikh</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Software Engineer & Web Developer</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
            I'm a full-stack software engineer with two years of development experience.
             I enjoy problem-solving through code. My continuous improvement mindset enables 
             me to learn new technologies quickly and to write optimized code for large-scale apps.
            <br />
            Technical Skills - Python, HTML, CSS, JavaScript, Java, Spring Boot, Flask, Git, Github, VSCode, MySQL
Workbench, Microsoft SSMS, Jupyter, React.js, Next.js 
{' '} <br />
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