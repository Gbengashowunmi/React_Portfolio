import React from "react";
import {
  IoBriefcaseSharp,
  IoHome,
  IoMailOpenSharp,
  IoPerson,
} from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";

export default function Navigation() {
  return (
    <ul>
      <li>
        <IoHome />
      </li>
      <li>
        <ImNewspaper />
      </li>
      <li>
        <IoMailOpenSharp />
      </li>
      <li>
        <IoBriefcaseSharp />
      </li>
      <li>
        <IoPerson />
      </li>
    </ul>
  );
}
