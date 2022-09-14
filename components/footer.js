import Link from "next/link";
import NewsLetter from "./_child/newsLetter";
import { ImFacebook, ImLinkedin, ImYoutube } from "react-icons/im";
const Footer = () => {
  const bg = {
    backgroundImage: "url('/images/ball.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom left",
  };
  return (
    <footer className="bg-gray-100" style={bg}>
      <NewsLetter />
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Link href="https:www.facebook.com">
              <a>
                <ImFacebook color="#888888" />
              </a>
            </Link>
            <Link href="about">
              <a>
                <ImLinkedin color="#888888" />
              </a>
            </Link>
            <Link href="youtube">
              <a>
                <ImYoutube color="#888888" />
              </a>
            </Link>
          </div>
          <p className="py-5 text-gray-400">
            Copyrights @2022 All right is reserved|This template is made with by
            Habtamu Firew
          </p>
          <p className="text-gray-400  text-center">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
