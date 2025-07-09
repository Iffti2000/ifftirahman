import React from 'react'
import { toast } from 'react-toastify';

const Contact = () => { 
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fe44da5f-a91d-4061-9126-4cb94e7a75a2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult('');
    }
  };

  return (
    <div className='text-center p-6 py-5 lg:px-32 w-full overflow-hidden bg-black' id='contact'>
      <h1 className='text-white text-2xl sm:text-4xl font-bold mb-2 text-center py-4'>Contact <span className='text-[#ff0000]'>Me</span></h1>

      <form onSubmit={onSubmit} className=' max-w-2xl mx-auto pt-10 bg-[#1a1a1a] px-10'>
        <div className='flex flex-wrap'>
          <div className=' w-full md:w-1/2 text-left'>
          <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' name='Name' type="text" placeholder='Your Name' required/>
          </div>
          <div className='w-full md:w-1/2 text-left md:pl-4'>
          <input className=' w-full border border-gray-300 rounded py-3 px-4 mt-2' name='Email' type="email" placeholder='Your Email' required/>
          </div>
        </div>
        <div className=' my-6 text-left'>
          <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'
           name="Message" placeholder='Message' required></textarea>
        </div>
        <button className='text-white bg-[#ff0000] py-2 px-12 mb-10 rounded'>{result ? result : "Send Message"}</button>
      </form>
    </div>
  )
}

export default Contact
