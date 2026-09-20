import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="px-6 pt-8 md:px-16 lg:px-36 w-full text-black bg-linear-to-t to-amber-400/75" id="contact">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-black pb-10">
                <div className="md:max-w-96">
                    <img alt="" class="h-11 cursor-text" src="logo.svg" />
                    <p className="mt-6 text-sm ">
                        Create professional, modern resumes effortlessly with our easy-to-use resume builder. 
                        <br/>
                        <br/>
                        Choose from customizable templates, showcase your skills and experience, and build a resume that helps you present your career with confidence
                    </p>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
                    <div>
                        <h2 className="font-semibold mb-5">ResumeBuilt</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="#">Home</a></li>
                            <li><a href="#about">About us</a></li>
                            <li><a href="#contact">Contact us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p>+91-234-567-890</p>
                            <p>sample.123@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-sm pb-5">
                Copyright {new Date().getFullYear()} © <a href="https://github.com/MithranMurugavel" target="_blank">PrebuiltUI</a>. All Right Reserved.
            </p>
        </footer>
    </>
  )
}

export default Footer
