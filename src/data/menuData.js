import { IoHome, IoTrendingUpOutline, IoAlbums } from "react-icons/io5";
import { BsSoundwave, BsPerson } from "react-icons/bs";
import { MdOutlineFavoriteBorder } from "react-icons/md";

export const menuItems = [
  {
    Icon: IoHome,
    title: "Explore",
  },
  {
    Icon: BsSoundwave,
    title: "Genres",
  },
  {
    Icon: IoAlbums,
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
    Icon: IoTrendingUpOutline,
    title: "Popular",
  },
  {
    Icon: IoAlbums,
    title: "My Music",
  },
];
