import axios from "axios";
import { useState } from "react";
import abstract from "../assets/abstract.jpg";
import Whatsapp from "../assets/WhatsApp.jpeg";
import damon from "../assets/damon.jpg";
import HTML5 from "../assets/skills/HTML5.svg";
import CSS3 from "../assets/skills/CSS3.svg";
import JavaScript from "../assets/skills/JavaScript.svg";
import Bootstrap from "../assets/skills/Bootstrap.svg";
import Tailwind from "../assets/skills/Tailwindcss.svg";
import React from "../assets/skills/React.svg";
import Nodejs from "../assets/skills/Nodejs.svg";
import MongoDB from "../assets/skills/MongoDB.svg";
import Express from "../assets/skills/Express.svg";
import Git from "../assets/skills/Git.svg";
import GitHub from "../assets/skills/GitHub.svg";
import CodePen from "../assets/skills/CodePen.svg";
import Vercel from "../assets/skills/Vercel.svg";
import page from "../assets/page.png"
import me from "../assets/me.png"
import photo from "../assets/imge.png"
import "./Style.css";

function Home() {
  const [form, setForm] = useState({
    fname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:1100/new/user", // backend URL
        form,
      );

      console.log(res.data);
      alert("Message Sent ✅");

      // reset form
      setForm({
        fname: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.log(err);
      alert("Error ❌");
    }
  };

  return (
    <div className="h-full w-full scroll-smooth select-none">
      <div className="navi flex justify-between sticky p-[7px]  pr-2 pb-3.5 pt-3.5 w-full top-0 bg-white">
        <h3 className=" font-bold text-[20px]">Portfolio</h3>
        <ul className="flex gap-20 font-serif">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
        </ul>
        <div className="flex border-2 rounded-2xl h-[28px] w-[130px] border-blue-500 gap-3 pr-[2px] pl-[20px] pb-1 ">
          <div>
            <button className="font-sans cursor-pointer">
              <a href="#contact">Contact</a>
            </button>
          </div>
          <div className="cursor-pointer">
            <a href="#contact">
              <i className="ri-arrow-right-circle-line"></i>
            </a>
          </div>
        </div>
      </div>




      

      <div id="home" className="h-[638px] w-full scroll-mt-20 overflow-hidden">
        <div
          className="bg-cover bg-center h-[638px] w-full bg-red-50"
        
        >
          <div className=" h-[630px] w-[1500px]">
            <div className="flex gap-2 m-0 justify-between items-center h-[500px] px-8">
              <div className="border-0 flex flex-col gap-5 mb-0 pt-20 ">
                <h4 className="text-[25px] font-medium text-black ">
                  Hey, i'm a
                </h4>
                <h1 className="text-[100px] font-bold leading-20 text-black pt-4 ">
                  Web
                </h1>
                <h1 className="text-[100px] font-bold leading-20 text-black  ">
                  {" "}
                  Developer
                </h1>
              </div>

                <img className="center mt-70 mr-20" src={photo} alt="" />

              <div className="border-0 pt-45 flex flex-col gap-4">
                <h2 className="text-[20px] leading-7 font-medium text-black">
                  The best design is invisible — simple, <br /> clean, and
                  user-focused.
                </h2>
                <h4 className="text-[14px] leading-7 text-black">
                  From first click to final conversion, I develop web solutions{" "}
                  <br /> that connect and perform.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>





      <div
        id="about"
        className=" h-[100vh] w-[1521px] scroll-mt-10 bg-red-50 text-black"
      >
        <h1 className="text-[40px] font-sans font-semibold pl-6 pt-3 text-center">
          About Me
        </h1>
        <div className="flex gap-2 m-3 justify-between h-[500px]">
          <div className=" border-2 ml-6 mt-2 h-[550px] w-[1000px]">
            <img
              src={Whatsapp}
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="border-0 p-9 leading-10">
            I am a dedicated and passionate web developer who has completed a
            Bachelor of Computer Applications (BCA) degree and a Full Stack Web
            Development course. I enjoy building modern, responsive, and
            user-friendly websites using both front-end and back-end
            technologies. My education and training have helped me develop
            strong problem-solving skills and a solid understanding of web
            development. I am always eager to learn new technologies and improve
            my skills to create efficient and innovative web solutions. My goal
            is to grow as a developer and contribute to building impactful
            digital experiences. <br />
            I’m a motivated web developer with a strong foundation in both
            front-end and back-end technologies. I enjoy building responsive and
            user-friendly websites that deliver real value. With a BCA degree
            and hands-on experience in full stack development, I continuously
            work on improving my skills and staying updated with modern
            technologies. <br />I believe in writing clean, efficient code and
            creating seamless digital experiences. I’m always open to learning,
            collaborating, and taking on new challenges that help me grow as a
            developer.
          </div>
        </div>
      </div>




      <div
        id="skills"
        className="  h-[100vh] w-full  bg-red-50 text-black pt-4 "
      >
        <h1 className="font-semibold font-sans pl-2 text-[40px] ml-5  pb-2 pt-9 text-center">
          Skills
        </h1>

        <div className=" flex flex-wrap justify-center gap-5 pt-3">
          <div className=" h-[120px] w-[120px] rounded-3xl ml-5">
            <img src={HTML5} alt="HTML5" className="h-full w-full p-6" />
          </div>
          <div className=" h-[120px] w-[120px] rounded-3xl ml-5">
            <img src={CSS3} alt="CSS3" className="h-full w-full p-6" />
          </div>
          <div className=" h-[120px] w-[120px] rounded-3xl ml-5">
            <img
              src={JavaScript}
              alt="JavaScript"
              className="h-full w-full p-6"
            />
          </div>
          <div className=" h-[120px] w-[120px] rounded-3xl ml-5">
            <img
              src={Bootstrap}
              alt="Bootstrap"
              className="h-full w-full p-6"
            />
          </div>
          <div className=" h-[120px] w-[120px] rounded-3xl ml-5">
            <img src={Tailwind} alt="Tailwind" className="h-full w-full p-6" />
          </div>
          <div className=" h-[120px] w-[120px] rounded-3xl ml-5">
            <img src={React} alt="React" className="h-full w-full p-6" />
          </div>
          <div className=" h-[120px] w-[120px] rounded-3xl ml-5">
            <img src={Nodejs} alt="Nodejs" className="h-full w-full p-6" />
          </div>
          <div className=" h-[120px] w-[120px] rounded-3xl ml-5">
            <img src={MongoDB} alt="MongoDB" className="h-full w-full p-6" />
          </div>
          <div className=" h-[120px] w-[120px] rounded-3xl ml-5">
            <img src={Express} alt="Express" className="h-full w-full p-6" />
          </div>
          <div className=" h-[120px] w-[120px] rounded-3xl ml-5">
            <img src={Git} alt="Git" className="h-full w-full p-6" />
          </div>

          <div className=" h-[120px] w-[120px] rounded-3xl ml-5">
            <img src={GitHub} alt="GitHub" className="h-full w-full p-6" />
          </div>

          <div className=" h-[120px] w-[120px] rounded-3xl ml-5">
            <img src={CodePen} alt="CodePen" className="h-full w-full p-6" />
          </div>

          <div className=" h-[120px] w-[120px] rounded-3xl ml-5">
            <img src={Vercel} alt="Vercel" className="h-full w-full p-6" />
          </div>
        </div>
      </div>






      <div
        id="project"
        className=" h-[100vh] w-full border-0 bg-red-50 text-black "
      >
        <h1 className="font-medium font-sans pl-2 text-[40px] pt-12 text-center">
          Project
        </h1>
        <div className=" flex flex-wrap justify-center gap-15 pt-15">



          <div className="border-2 h-[400px] w-[500px] rounded-3xl ml-5">
            <div className="h-[220px] w-[480px]">
              <img src={page} alt="page" className="h-full w-full rounded-2xl p-2 ml-2 mt-2 " />
              <p className="p-3 Bold font-[Italic] font-[600]">This Quiz App helps students practice HTML, CSS, and JavaScript MCQs with instant scores, making learning interactive, engaging, and more effective.
              </p>
              <button className=" h-[30px] w-[120px] rounded-[10px] ml-85 mt-2 bg-blue-900 text-white "><a href="https://chaudharykeshu007.github.io/quizApp/" target="_blank">Live Project</a></button>

            </div>

          </div>



          <div className="border-2 h-[400px] w-[500px] rounded-3xl ml-5">

          </div>

        
        </div>
      </div>



      

      <div id="contact" className="  bg-red-50 h-[100vh]">
        <div className=" mx-8 rounded-[60px]  bg-red-50 py-16">
          <h2 className="text-5xl text-black text-center font-serif mb-8 text-center">
            Contact
          </h2>

          <div className="flex">
            <div className="w-1/2 p-10">
              <h2 className="text-[28px] text-black font-serif">
                I’m always open to exciting projects and new ideas.
              </h2>
            </div>

            <div className="w-1/2 px-6">
              <form onSubmit={handleSubmit}>
                <label className="text-black text-xl">Name</label>
                <br />
                <input
                  type="text"
                  name="fname"
                  placeholder="Enter Your Name"
                  value={form.fname}
                  onChange={handleChange}
                  required
                  className="mt-2 mb-6 w-[550px] h-[50px] px-3 text-sm bg-transparent border-2 cursor-pointer border-cyan-600 rounded-lg outline-none text-black"
                />
                <br />

                <label className="text-black text-xl">Email</label>
                <br />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                  required
                  className="mt-2 mb-6 w-[550px] h-[50px] px-3 text-sm bg-transparent border-2 cursor-pointer border-cyan-600 rounded-lg outline-none text-black"
                />
                <br />

                <label className="text-black text-xl">Message</label>
                <br />
                <textarea
                  rows="5"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Enter Message"
                  className="mt-2 mb-6 w-[550px] h-[140px] px-3 py-2 text-sm bg-transparent border-2 cursor-pointer border-cyan-600 rounded-lg outline-none text-black"
                ></textarea>

                <button className="text-black px-6 py-3 text-base border-2 border-cyan-600 cursor-pointer rounded-md">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;












            <div>
            I am a dedicated and passionate web developer who has completed a Bachelor of Computer Applications (BCA) degree and a Full Stack Web
            Development course. I enjoy building modern, responsive, and
            user-friendly websites using both front-end and back-end
            technologies. My education and training have helped me develop
            strong problem-solving skills and a solid understanding of web
            development. I am always eager to learn new technologies and improve
            my skills to create efficient and innovative web solutions. My goal
            is to grow as a developer and contribute to building impactful
            digital experiences.I’m a motivated web developer with a strong foundation in both
            front-end and back-end technologies. I enjoy building responsive and
            user-friendly websites that deliver real value. With a BCA degree
            and hands-on experience in full stack development, I continuously
            work on improving my skills and staying updated with modern
            technologies. I believe in writing clean, efficient code and
            creating seamless digital experiences. I’m always open to learning,
            collaborating, and taking on new challenges that help me grow as a
            developer.

            </div>











