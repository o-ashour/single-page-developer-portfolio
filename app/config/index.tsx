import { StaticImageData } from "next/image"
// import designPortfolioThumbnailSmall from '../../public/assets/images/thumbnail-project-1-small.webp';
// import designPortfolioThumbnailLarge from '../../public/assets/images/thumbnail-project-1-large.webp';
// import eLearningLandingThumbnailSmall from '../../public/assets/images/thumbnail-project-2-small.webp';
// import eLearningLandingThumbnailLarge from '../../public/assets/images/thumbnail-project-2-large.webp';
// import todoAppThumbnailSmall from '../../public/assets/images/thumbnail-project-3-small.webp';
// import todoAppThumbnailLarge from '../../public/assets/images/thumbnail-project-3-large.webp';
// import entertainmentWebAppThumbnailSmall from '../../public/assets/images/thumbnail-project-4-small.webp';
// import entertainmentWebAppThumbnailLarge from '../../public/assets/images/thumbnail-project-4-large.webp';
// import memoryGameThumbnailSmall from '../../public/assets/images/thumbnail-project-5-small.webp';
// import memoryGameThumbnailLarge from '../../public/assets/images/thumbnail-project-5-large.webp';
// import artGalleryShowcaseThumbnailSmall from '../../public/assets/images/thumbnail-project-6-small.webp';
// import artGalleryShowcaseThumbnailLarge from '../../public/assets/images/thumbnail-project-6-large.webp';
import microPaymentsBlogThumbnailSmall from '../../public/assets/images/thumbnail-ttj-small.png';
import microPaymentsBlogThumbnailLarge from '../../public/assets/images/thumbnail-ttj-large.png';
import linksharingAppThumbnailSmall from '../../public/assets/images/thumbnail-link-sharing-app-small.jpg';
import linksharingAppThumbnailLarge from '../../public/assets/images/thumbnail-link-sharing-app-large.jpg';
import catWikiThumbnailSmall from '../../public/assets/images/thumbnail-catwiki-small.png';
import catWikiThumbnailLarge from '../../public/assets/images/thumbnail-catwiki-large.png';
import socialAppThumbnailSmall from '../../public/assets/images/thumbnail-social-app-small.png';
import socialAppThumbnailLarge from '../../public/assets/images/thumbnail-social-app-large.png';
import personalBlogThumbnailSmall from '../../public/assets/images/thumbnail-personal-blog-page-small.png';
import personalBlogThumbnailLarge from '../../public/assets/images/thumbnail-personal-blog-page-large.png';
import marketingSiteThumbnailSmall from '../../public/assets/images/thumbnail-marketing-site-small.png';
import marketingSiteThumbnailLarge from '../../public/assets/images/thumbnail-marketing-site-large.png';
import TwitterSmallIcon from "@/components/icons/twitterSmallIcon";
import TwitterIcon from "@/components/icons/twitterIcon";
// import GitHubIcon from "@/components/icons/gitHubIcon";
import FrontendMentorSmallIcon from "@/components/icons/frontendMentorSmallIcon";
import FrontendMentorIcon from "@/components/icons/frontendMentorIcon";
import LinkedInSmallIcon from "@/components/icons/linkedInSmallIcon";
import LinkedInIcon from "@/components/icons/linkedInIcon";
// import GitHubSmallIcon from "@/components/icons/gitHubSmallIcon";

type Skills = {
  id: number,
  name: string,
  experienceInYears: number,
}[]

type Projects = {
  id: number,
  title: string,
  skills: string[],
  images: {
    small: StaticImageData,
    large: StaticImageData,
  },
  urls?: {
    repo?: string,
    productionSite?: string,
  },
  contributions?: string[],
}[]

type NavItems = {
  id: number,
  name: string,
  url: string,
  icons: {
    small: JSX.Element,
    large: JSX.Element
  }
}

export const Skills: Skills = [
  { id: 0, name: 'HTML', experienceInYears: 3 },
  { id: 1, name: 'CSS', experienceInYears: 3 },
  { id: 2, name: 'Javascript', experienceInYears: 2 },
  { id: 3, name: 'TailwindCSS', experienceInYears: 2 },
  { id: 4, name: 'ChakraUI', experienceInYears: 2 },
  { id: 5, name: 'React', experienceInYears: 2 },
  { id: 6, name: 'Next', experienceInYears: 2 },
  { id: 7, name: 'Firebase', experienceInYears: 2 },
]

export const Projects: Projects = [
  { 
    id: 0,
    title: 'Micropayments Web App',
    skills: ['next', 'chakraUI', 'firebase'],
    images: {
      small: microPaymentsBlogThumbnailSmall,
      large: microPaymentsBlogThumbnailLarge,
    },
    urls: {
      productionSite: 'https://www.tiptopjar.com',
    },
    contributions: ['admin panel', 'blog', 'maintenance']
  },
  { 
    id: 1,
    title: 'Link Sharing App',
    skills: ['next', 'tailwind', 'postgreSQL'],
    images: {
      small: linksharingAppThumbnailSmall,
      large: linksharingAppThumbnailLarge,
    },
    urls: {
      repo: 'https://github.com/o-ashour/link-sharing-app',
      productionSite: 'https://link-sharing-app-eight-black.vercel.app/',
    }
  },
  { 
    id: 2,
    title: 'Cat Wiki',
    skills: ['react', 'express', 'mongodb', 'nodejs'],
    images: {
      small: catWikiThumbnailSmall,
      large: catWikiThumbnailLarge,
    },
    urls: {
      repo: 'https://github.com/o-ashour/cat-wiki',
      productionSite: 'https://cat-wiki-yqvb.onrender.com/',
    }
  },
  { 
    id: 3,
    title: 'Social Networking App (Hackathon Entry)',
    skills: ['next', 'tailwind', 'firebase'],
    images: {
      small: socialAppThumbnailSmall,
      large: socialAppThumbnailLarge,
    },
    urls: {
      repo: 'https://github.com/o-ashour/migrant-mingle',
      productionSite: 'https://migrant-mingle.vercel.app/',
    },
    contributions: ['backend', 'auth'],
  },
  { 
    id: 4,
    title: 'Personal Blog Page',
    skills: ['html', 'php', 'wordpress'],
    images: {
      small: personalBlogThumbnailSmall,
      large: personalBlogThumbnailLarge,
    },
    urls: {
      productionSite: 'https://www.ashrafashour.com/',
    },
    contributions: ['wordpress to static site migration'],
  },
  { 
    id: 5,
    title: 'Marketing Site for Reforestation API',
    skills: ['html', 'css', 'javascript'],
    images: {
      small: marketingSiteThumbnailSmall,
      large: marketingSiteThumbnailLarge,
    },
    urls: {
      productionSite: 'https://www.digitalhumani.com/',
    },
    contributions: ['timed newsletter signup'],
  },
] 

export const NavItems = [
  // {
  //   idx: 0,
  //   name: 'GitHub',
  //   url: 'https://x.com/weirdlilguys',
  //   icons: {
  //     small: <GitHubSmallIcon />,
  //     large: <GitHubIcon />
  //   }
  // },
  {
    idx: 1,
    name: 'Frontend Mentor',
    url: 'https://x.com/weirdlilguys',
    icons: {
      small: <FrontendMentorSmallIcon />,
      large: <FrontendMentorIcon />
    }
  },
  {
    idx: 2,
    name: 'LinkedIn',
    url: 'https://x.com/weirdlilguys',
    icons: {
      small: <LinkedInSmallIcon />,
      large: <LinkedInIcon />
    }
  },
  {
    idx: 3,
    name: 'Twitter',
    url: 'https://x.com/weirdlilguys',
    icons: {
      small: <TwitterSmallIcon />,
      large: <TwitterIcon />
    }
  },
]