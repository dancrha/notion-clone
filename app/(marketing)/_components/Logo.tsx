import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Logo = () => {
  return (
    <div className='hidden md:flex items-center'>
      <Image
        src='/Logo.png'
        alt='Logo'
        height={80}
        width={80}
        className='dark:hidden'
      />
      <Image
        src='/Logo-dark.png'
        alt='Logo'
        height={80}
        width={80}
        className='hidden dark:block'
      />
    </div>
  );
};

export default Logo;
