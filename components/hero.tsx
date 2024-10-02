import Image from "next/image"
import circlePattern from '../public/assets/images/pattern-circle.svg';

export default function Hero() {
  return (
    <section className="text-center relative md:mt-16 md:text-left md:max-w-md xl:max-w-3xl xl:mt-32 xl:relative">
      <Image className='absolute hidden xl:block top-80 right-0' src={circlePattern} alt='circle pattern' />
      <blockquote className="text-4xl md:text-7xl font-bold md:leading-[5rem] xl:text-[88px]">
        Nice to meet you! I&apos;m <span className="border-b-4 border-green">Adam Keyes</span>.
      </blockquote>
      <p className="mt-8 xl:text-balance xl:mt-16">
        Based in the UK, I&apos;m a front-end developer passionate about
        building accessible web apps that users love.
      </p>
      <a href='#contact-section'>
        <button className="mt-7 font-bold tracking-widest border-b-2 border-green pb-2 xl:mt-20 hover:text-green">
          CONTACT ME
        </button>
      </a>

      <hr className="mt-16 md:hidden" />
      <div id='spacer' className="hidden md:block h-16 lg:h-44"></div>
    </section>
  )
}