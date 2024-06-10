import { LuCloudy } from "react-icons/lu";
import { MdSunny } from "react-icons/md";
import { IoRainySharp } from "react-icons/io5";
import { MdThunderstorm } from "react-icons/md";
import { RiDrizzleFill, RiHazeFill, RiMistFill  } from "react-icons/ri";
import { BsCloudSnow } from "react-icons/bs";
import { GiFog } from "react-icons/gi";
import { WiDayCloudyWindy } from "react-icons/wi";

export const getWeatherIconName = (weatherCondition) => {
    const iconMap = {
      Clear: <MdSunny />,
      Clouds:<LuCloudy />,
      Rain: <IoRainySharp />,
      Thunderstorm: <MdThunderstorm />,
      Drizzle: <RiDrizzleFill />,
      Snow: <BsCloudSnow />,
      Mist: <RiMistFill />,
      Smoke: <WiDayCloudyWindy />,
      Haze: <RiHazeFill />,
      Fog: <GiFog />

    };
  
    return iconMap[weatherCondition] || "help";
  };
  