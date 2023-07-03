import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

export function MenuBars() {
  return <FontAwesomeIcon icon={faBars} />;
}
export function Bell() {
  return <FontAwesomeIcon icon={faBell} />;
}
export function Check() {
  return <FontAwesomeIcon icon={faCheck} />;
}
export function Heart() {
  return <FontAwesomeIcon icon={faHeart} />;
}
export function Message() {
  return <FontAwesomeIcon icon={faMessage} />;
}
export function Flag() {
  return <FontAwesomeIcon icon={faFlag} />;
}
export function Left() {
  return <FontAwesomeIcon icon={faChevronLeft} />;
}
export function MagnifyingGlass() {
  return <FontAwesomeIcon icon={faMagnifyingGlass} />;
}
export function Download() {
  return <FontAwesomeIcon icon={faArrowUpFromBracket} />;
}

export function Camera() {
  return <FontAwesomeIcon icon={faCamera} />;
}
