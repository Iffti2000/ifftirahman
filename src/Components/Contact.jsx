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
    <div className='text-center p-6 lg:px-32 w-full overflow-hidden bg-black' id='contact'>
      <h1 className='text-white text-2xl sm:text-4xl font-bold mb-2 text-center py-4'>Contact <span className='text-[#ff0000]'>Me</span></h1>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto pt-10 bg-[#1a1a1a] px-10'>
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

// import React from 'react'
// import my_img from '../assets/iffti.jpg';
// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <div className='bg-black h-full pt-20 px-4'>
//       <div className='w-full flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-10'>

//         {/* Text Section */}
//         <div className='text-center md:text-left'>
//           <h1 className='text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold'>
//             Hi, <span className='text-[#ff0000]'><br className='hidden md:block' />I'm </span>Iffti
//           </h1>
//           <p className='text-white mt-5 text-base sm:text-lg md:text-xl'>
//             A Front-End Developer based in Dhaka
//           </p>

//           {/* Social Icons */}
//           <div className='flex justify-center md:justify-start pt-10 gap-6'>
//             <a href='https://www.linkedin.com/in/sadbinrahmaniffti/' target='_blank'><FaLinkedin className='text-[#ff0000] text-4xl sm:text-5xl' /></a>
//             <a href='https://github.com/Iffti2000' target='_blank'><FaGithub className='text-[#ff0000] text-4xl sm:text-5xl' /></a>
//             <a href='https://x.com/iftirahman335' target='_blank'><FaXTwitter className='text-[#ff0000] text-4xl sm:text-5xl' /></a>
//           </div>
//         </div>

//         {/* Image */}
//         <img
//           className='w-60 sm:w-72 md:w-80 drop-shadow-[0_0_30px_rgba(255,0,0,0.8)] rounded-2xl'
//           src={my_img}
//           alt="Iffti"
//         />
//       </div>
//     </div>
//   )
// }

// export default Header


