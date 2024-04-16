import Image from "next/image";
import profilePic from "../../public/profilePic.jpeg"
import "../styles/frontPage.css"
export default function Home() {
  return (
    <>
      <div className="aboutMeCard" >
        <Image 
          className="profilePicture"
          src={profilePic}
          alt="A picture of Juan Arismendi"
        />
        <div className="titleDescriptionPair">
          <p className="title">
            Juan Arismendi Diaz
          </p>
          <p className="description">
            Hi! I'm a Fullstack Developer living in Tucumán, Argentina. 
            I currently specialize in NextJS, ExpressJS and Typescript, but I'm also learning Ruby. 
            Click below to know more about me and my work!
          </p>
        </div>
      </div>
        <div className="infoNavBar">
          <span className="navBarSpan">Projects</span>
          <span className="navBarSpan">Skills</span>
          <span className="navBarSpan">Blog</span>
          <span className="navBarSpan">Hobbies</span>
          <span className="navBarSpan">Contact</span>
        </div>
    </>
  );
}
