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
          <p className="max-w-xl p-15">
            In brief, I previously managed a profitable business providing online coaching fitness services to fitness influencers who offered tailor-made diet and training plans for their clients. Now, I've innovated a method to automate the customization of diets. My goal is to utilize my recently acquired Full Stack Web Development skills not only to construct my personal app but also to actively seek employment in web development. Simultaneously, I aim to develop my app as a side project to stay engaged, enhance my skills, and apply the acquired knowledge to my prospective job in web development.
          </p>
        </div>

        <div>
          <button
            onClick={downloadPDF}
            className="bg-white text-2xl text-[#00a6fb] py-2 px-4 rounded-md hover:bg-[#006494] transition duration-300"
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
