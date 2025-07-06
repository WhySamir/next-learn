import boat from "./images/boat.jpg";
import bollywood from "./images/bollywood.jpg";
import game from "./images/game.jpg";
import mountain from "./images/mountain.jpg";
import skyline from "./images/skyline.jpg";
import surfer from "./images/surfer.jpg";
interface imgProps {
  [key: string]: objImg;
}
export interface objImg {
  id: number;
  img: any;
  name: string;
  description: string;
  country: string;
}
export const imgObj: imgProps = {
    boat: {
      id: 1,
      img: boat,
      name: "boat",
      description: "Boating",
      country: "japan",
    },
    bollywood: {
      id: 2,
      img: bollywood,
      name: "bollywood",
      description: "Bollywood Hill",
      country: "India",
    },
    game: {
      id: 3,
      img: game,
      name: "game",
      description: "Child playing game",
      country: "United States",
    },
    mountain: {
      id: 4,
      img: mountain,
      name: "mountain",
      description: "Mountain",
      country: "Nepal",
    },
    skyline: {
      id: 5,
      img: skyline,
      name: "skyline",
      description: "Picture by lu xheng",
      country: "China",
    },
    surfer: {
      id: 6,
      img: surfer,
      name: "surfer",
      description: "Picture by hero",
      country: "Thailand",
    },
  };