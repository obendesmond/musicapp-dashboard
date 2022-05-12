import { IoHome, IoTrendingUpOutline, IoAlbums } from "react-icons/io5";
import { BsSoundwave, BsPerson } from "react-icons/bs";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Home from "../pages/Home";
import Genres from "../pages/Genres";
import Albums from "../pages/Albums";
import Artist from "../pages/Artist";
import Favourites from "../pages/Favourites";
import Popular from "../pages/Popular";
import MyMusic from "../pages/MyMusic";

export const menuItems = [
  {
    Icon: IoHome,
    title: "Explore",
    route: "home",
    component: <Home />,
  },
  {
    Icon: BsSoundwave,
    title: "Genres",
    route: "genres",
    component: <Genres />,
  },
  {
    Icon: IoAlbums,
    title: "Albums",
    route: "albums",
    component: <Albums />,
  },
  {
    Icon: BsPerson,
    title: "Artist",
    route: "artist",
    component: <Artist />,
  },
];

export const libraryItems = [
  {
    Icon: MdOutlineFavoriteBorder,
    title: "Favourites",
    route: "favourites",
    component: <Favourites />,
  },
  {
    Icon: IoTrendingUpOutline,
    title: "Popular",
    route: "popular",
    component: <Popular />,
  },
  {
    Icon: IoAlbums,
    title: "My Music",
    route: "my-music",
    component: <MyMusic />,
  },
];
