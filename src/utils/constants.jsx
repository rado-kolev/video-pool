import { BsFillHouseDoorFill } from 'react-icons/bs'
import { AiFillCode } from 'react-icons/ai';
import {BiCodeCurly} from 'react-icons/bi'
import { FaMusic, FaFilm, FaGamepad, FaBitcoin, FaCode } from 'react-icons/fa';
import {
  MdSchool,
  MdOutlinePodcasts,
  MdLiveTv,
  MdSportsSoccer,
  MdFaceRetouchingNatural,
  MdOutlineTheaterComedy,
} from 'react-icons/md';
import { GiClothes } from 'react-icons/gi'
import {CgGym} from 'react-icons/cg'

export const logo = 'https://i.ibb.co/mNvFc0Q/logo-2.png';

export const categories = [
  { name: 'New', icon: <BsFillHouseDoorFill /> },
  { name: 'Coding', icon: <AiFillCode /> },
  { name: 'ReactJS', icon: <FaCode /> },
  { name: 'NextJS', icon: <BiCodeCurly /> },
  { name: 'Music', icon: <FaMusic /> },
  { name: 'Education', icon: <MdSchool /> },
  { name: 'Podcast', icon: <MdOutlinePodcasts /> },
  { name: 'Movie', icon: <FaFilm /> },
  { name: 'Gaming', icon: <FaGamepad /> },
  { name: 'Live', icon: <MdLiveTv /> },
  { name: 'Sport', icon: <MdSportsSoccer /> },
  { name: 'Fashion', icon: <GiClothes /> },
  { name: 'Beauty', icon: <MdFaceRetouchingNatural /> },
  { name: 'Comedy', icon: <MdOutlineTheaterComedy /> },
  { name: 'Gym', icon: <CgGym /> },
  { name: 'Crypto', icon: <FaBitcoin /> },
];
