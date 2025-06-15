import Placeholder1 from "@/assets/placeholders/Doodle Yggdrasil 01.jpg";
import Placeholder2 from "@/assets/placeholders/Doodle Yggdrasil 02.jpg";
import Placeholder3 from "@/assets/placeholders/Doodle Yggdrasil 03.jpg";
import Placeholder4 from "@/assets/placeholders/Doodle Yggdrasil 04.jpg";
import Placeholder5 from "@/assets/placeholders/Doodle Yggdrasil 05.jpg";
import Placeholder6 from "@/assets/placeholders/Doodle Yggdrasil 06.jpg";
import Placeholder7 from "@/assets/placeholders/Doodle Yggdrasil 07.jpg";
import Placeholder8 from "@/assets/placeholders/Doodle Yggdrasil 08.jpg";
import Placeholder9 from "@/assets/placeholders/Doodle Yggdrasil 09.jpg";
import Placeholder10 from "@/assets/placeholders/Doodle Yggdrasil 10.jpg";
import Placeholder11 from "@/assets/placeholders/Doodle Yggdrasil 11.jpg";
import Placeholder12 from "@/assets/placeholders/Doodle Yggdrasil 12.jpg";
import Placeholder13 from "@/assets/placeholders/Doodle Yggdrasil 13.jpg";
import Placeholder14 from "@/assets/placeholders/Doodle Yggdrasil 14.jpg";
import Placeholder15 from "@/assets/placeholders/Doodle Yggdrasil 15.jpg";
import Placeholder16 from "@/assets/placeholders/Doodle Yggdrasil 16.jpg";
import Placeholder17 from "@/assets/placeholders/Doodle Yggdrasil 17.jpg";
import Placeholder18 from "@/assets/placeholders/Doodle Yggdrasil 18.jpg";
import Placeholder19 from "@/assets/placeholders/Doodle Yggdrasil 19.jpg";
import Placeholder20 from "@/assets/placeholders/Doodle Yggdrasil 20.jpg";


import { COLLECTION_ADDRESS } from "./constants";

export const config: Config = {
  collection_id: COLLECTION_ADDRESS,

  // Removing one or all of these socials will remove them from the page
  socials: {
    twitter: "https://twitter.com",
    discord: "https://discord.com",
    homepage: "#",
  },

  defaultCollection: {
    name: "Doodle Yggdrasil",
    description: "Unleash your imagination and bring Yggdrasil to life with a doodle that combines elements of mythology and modern art in a truly original way.",
    image: Placeholder1,
  },

  ourStory: {
    title: "Doodle Yggdrasil",
    subTitle: "Proin lorem",
    description:
      "Unleash your imagination and bring Yggdrasil to life with a doodle that combines elements of mythology and modern art in a truly original way.",
    discordLink: "https://discord.com",
    images: [Placeholder1, Placeholder2, Placeholder3, Placeholder4, Placeholder5, Placeholder6, Placeholder7, Placeholder8, Placeholder9, Placeholder10, Placeholder11, Placeholder12, Placeholder13, Placeholder14, Placeholder15, Placeholder16, Placeholder17, Placeholder18, Placeholder19, Placeholder20],
  },

  ourTeam: {
    title: "Our Team",
    members: [
      {
        name: "Mepoti",
        role: "Aliquip Esse",
        img: Placeholder1,
        socials: {
          twitter: "https://twitter.com",
        },
      },


      
    ],
  },

  faqs: {
    title: "F.A.Q.",

    questions: [
      {
        title: "Doodle Yggdrasil",
        description:
          "#Airdrop Yggdrasil Unleash your imagination and bring Yggdrasil to life with a doodle that combines elements of mythology and modern art in a truly original way.",
      },
    
    ],
  },

  nftBanner: [Placeholder1, Placeholder2, Placeholder3, Placeholder4, Placeholder5, Placeholder6, Placeholder7, Placeholder8, Placeholder9, Placeholder10, Placeholder11, Placeholder12, Placeholder13, Placeholder14, Placeholder15, Placeholder16, Placeholder17, Placeholder18, Placeholder19, Placeholder20],
};

export interface Config {
  collection_id: string;

  socials?: {
    twitter?: string;
    discord?: string;
    homepage?: string;
  };

  defaultCollection?: {
    name: string;
    description: string;
    image: string;
  };

  ourTeam?: {
    title: string;
    members: Array<ConfigTeamMember>;
  };

  ourStory?: {
    title: string;
    subTitle: string;
    description: string;
    discordLink: string;
    images?: Array<string>;
  };

  faqs?: {
    title: string;
    questions: Array<{
      title: string;
      description: string;
    }>;
  };

  nftBanner?: Array<string>;
}

export interface ConfigTeamMember {
  name: string;
  role: string;
  img: string;
  socials?: {
    twitter?: string;
    discord?: string;
  };
}
