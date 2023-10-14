import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'

export const SocialMediaIconsDark = () => {
  return (
    <div className="flex font-playfair justify-center md:justify-start gap-7">
      <a
        className="hover:opacity-50 transition duration-500 text-xl"
        href="mailto:info@bbuddy.ai"
        target="_blank"
        rel="noreferrer"
        style={{}}
      >
        <FontAwesomeIcon icon={faPaperPlane} size="0.5xl" style={{}} /> info@bbuddy.ai
      </a>
    </div>
  );
};

export default SocialMediaIconsDark;
