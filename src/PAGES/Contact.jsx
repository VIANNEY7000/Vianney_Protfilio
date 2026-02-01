import { motion } from 'framer-motion'
import { useState } from 'react';



const Contanct = () => {

   const [loading, setLoading] = useState(false);

      const handleSubmit = async (e) => {
  setLoading(true);
};
  return (
    
    <>
    
    <div className='contact'>
      
      <h1>CONTACT</h1>
      <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
      
        
       <motion.form
        className='contact-box'
         action="https://formspree.io/f/maqbqddn"
          method="POST"
          onSubmit={handleSubmit}
        initial={{ Opacity: 0, y: 20}}
        whileInView={{ Opacity: 1, y: 0 }}
        viewport={{ once: true }}
        // animate={{  Opacity: 0.5, y: 0 }}
        transition={{ duration: 1}}
       >
     
    <label htmlFor="">
      <input type="text" name='name' placeholder='Enter name' />
    </label>

  <label>
    <input type="email" name="email" placeholder='Enter email'/>
  </label>

  <label>
    <textarea name="message" placeholder='Message' style={{resize:"none"}}></textarea>
  </label>
  
  <div>
  <button type="submit">{loading ? <span className="spinner"></span> : "Send"}</button>
  </div>


       </motion.form>
     
    </div>
    
    </>
  )
}

export default Contanct