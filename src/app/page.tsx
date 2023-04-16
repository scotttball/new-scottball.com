import Image from "next/image";
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import profilePic from "./scottpic.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-evenly items-center p-24">
      <div className="profile-img">
        <Image src={profilePic} alt="Scott's Profile Picture" />
      </div>
      <h1 className="text-5xl font-semibold">Scott Ball</h1>
      <p className="-mt-10 text-3xl font-semibold">Software Developer</p>
      <div className="space-x-10 flex flex-row">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:scotttball@gmail.com"
          className="flex items-center text-white hover:text-gray-300"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2x"
            className="w-10 h-10 fill-current"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/ballscott/"
          className="flex items-center text-white hover:text-gray-300"
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            size="2x"
            className="w-10 h-10 fill-current"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/scotttball"
          className="flex items-center text-white hover:text-gray-300"
        >
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            className="w-10 h-10 fill-current"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/scotttball"
          className="flex items-center text-white hover:text-gray-300"
        >
          <FontAwesomeIcon
            icon={faFacebookF}
            size="2x"
            className="w-10 h-10 fill-current"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/scotttball"
          className="flex items-center text-white hover:text-gray-300"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            size="2x"
            className="w-10 h-10 fill-current"
          />
        </a>
      </div>
    </main>
  );
}
