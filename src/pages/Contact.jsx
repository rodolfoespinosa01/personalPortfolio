import React, { useState } from 'react'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [message, setMessage] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleNameChange = (e) => {
    const enteredName = e.target.value;
    setName(enteredName);

    // name validation by checking for atleast 2 characters
    if (enteredName.trim().length < 2) {
      setNameError('Name must be at least 2 characters');
    } else {
      setNameError('');
    }
  };

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);

    // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(enteredEmail)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const handleMessageChange = (e) => {
    const enteredMessage = e.target.value;
    setMessage(enteredMessage);

    // checking for atleast 3 words to pass validation
    const words = enteredMessage.trim().split(/\s+/);
    if (words.length < 3) {
      setMessageError('Message must contain at least 3 words');
    } else {
      setMessageError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //  allow submission once there are valid fields
    if (name && !nameError && email && !email && message && !messageError) {
      // Perform form submission or any other action
      console.log('Form submitted successfully');
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <div name='contact' className="w-full h-screen bg-[#051923] flex justify-center items-center p-4">
      <form onSubmit={handleSubmit} action="" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#00a6fb] text-gray-300">Contact</p>
          <p className="text-gray-300 py-4">Submit the form below or shoot me an email - rodolfoespinosa01@gmail.com</p>
        </div>

        <input
          className={`bg-[#cc6f6] p-2 ${nameError ? "border-red-500" : " "}`}
          type="text"
          placeholder='Name'
          name='name'
          value={name}
          onChange={handleNameChange}
          required />
        {nameError && <p className="text-red-500 text-sm">{nameError}</p>}

        <input
          className="my-4 p-2"
          type="email"
          placeholder='Email'
          name='email'
          value={email}
          onChange={handleEmailChange}
          required />
        {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

        <textarea
          className="bg-[#cc6f6] p-2"
          name="message" rows="10"
          placeholder='Message'
          value={message}
          onChange={handleMessageChange}
          required
        ></textarea>
        {messageError && <p className="text-red-500 text-sm">{messageError}</p>}

        <button className="text-white border -2 hover:bg-[#00a6fb] hover:border-[#006494] px-4 py-3 my-8 mx-auto flex items-center">Let's Colaborate!</button>

      </form>

    </div>
  )
}

export default ContactForm