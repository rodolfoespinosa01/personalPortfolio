import React from 'react';
import resume from '../assets/resume.pdf'
import smileEmoji from '../assets/img/smileEmoji.png'

const Resume = () => {
  const downloadPDF = () => {


    // Create a link element
    const link = document.createElement('a');

    // Set the link's href attribute to the PDF file URL
    link.href = resume;

    // Set the download attribute with the desired file name
    link.download = 'Rodolfo_resume.pdf';

    // Append the link to the document body
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="w-full h-screen bg-[#051923] flex flex-col justify-center items-center p-4 text-white">
        <div className="mb-8 text-center">
          <p className="lg:text-4xl text-2xl font-bold">Rodolfo Espinosa-Nunez</p>
          <p className="lg:text-3xl text-xl text-[#006494]">Full Stack Developer</p>
        </div>

        <div className="mb-8 text-center">
          <p className="max-w-xl p-15 text-xl">
            Long story short... I once ran a lucrative business that provided online coaching fitness services for fitness influencers who provided custom diet/training plans to their clients.
            I have found a new way to automate the process I used to do before when it came to generating custom diets for people. I plan to use my new Full Stack Web Development skills to not only build my very own app but also join the workforce to gain experience in real-life web development roles.
          </p>
        </div>

        <div>
          <button
            onClick={downloadPDF}
            className="bg-white text-5xl text-[#00a6fb] py-2 px-4 rounded-md hover:bg-[#006494] transition duration-300"
          >
            Download Resume
          </button>
        </div>

        <div>
          <img className="lg:w-64 w-32 m-10" src={smileEmoji} alt="" />
        </div>

      </div>
    </>
  );
};


export default Resume;
