import { HiOutlineHome } from "react-icons/hi";
import { BsSoundwave, BsFolder2Open, BsPerson } from "react-icons/bs";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { TiChartLineOutline } from "react-icons/ti";

export const menuItems = [
  {
    Icon: HiOutlineHome,
    title: "Explore",
  },
  {
    Icon: BsSoundwave,
    title: "Genres",
  },
  {
    Icon: BsFolder2Open,
    title: "Albums",
  },
  {
    Icon: BsPerson,
    title: "Artist",
  },
];

export const libraryItems = [
  {
    Icon: MdOutlineFavoriteBorder,
    title: "Favourites",
  },
  {
    Icon: TiChartLineOutline,
    title: "Popular",
  },
  {
    Icon: BsFolder2Open,
    title: "My Music",
  },
];
