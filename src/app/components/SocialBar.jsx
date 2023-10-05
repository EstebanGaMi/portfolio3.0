import Link from "next/link";
import {
  AiOutlineWhatsApp,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

function SocialNetworks() {
  return (
    <div className="fixed lg:top-[400px] md:top-[300px] ms:hidden md:block right-0 transform -translate-y-1/2 rounded-3xl bg-green p-4 shadow-md bg-slate-50 bg-opacity-10 mx-3">
      <div className="flex flex-col gap-6">
        <Link
          className="text-6xl hover:text-slate-200 text-[#ca60c8]"
          href={"https://wa.me/911197526"}
          target="_blank"
        >
          <AiOutlineWhatsApp />
        </Link>
        <Link
          className="text-6xl hover:text-slate-200 text-[#ca60c8]"
          href={"https://github.com/EstebanGaMi"}
          target="_blank"
        >
          <AiOutlineGithub />
        </Link>
        <Link
          className="text-6xl hover:text-slate-200 text-[#ca60c8]"
          href={"https://www.instagram.com/_estebang23_/"}
          target="_blank"
        >
          <AiOutlineInstagram />
        </Link>
        <Link
          className="text-6xl hover:text-slate-200  text-[#ca60c8]"
          href={"https://www.linkedin.com/in/esteban-garay-4baa94202/"}
          target="_blank"
        >
          <AiOutlineLinkedin />
        </Link>
      </div>
    </div>
  );
}

export default SocialNetworks;
