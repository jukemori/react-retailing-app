import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

export function MenuBars() {
  return <FontAwesomeIcon icon={faBars} />;
}
export function Bell() {
  <FontAwesomeIcon icon={faBell} />;
}
export function Check() {
  <FontAwesomeIcon icon={faCheck} />;
}
export function Heart() {
  <FontAwesomeIcon icon={faHeart} />;
}
export function Message() {
  <FontAwesomeIcon icon={faMessage} />;
}
export function Flag() {
  <FontAwesomeIcon icon={faFlag} />;
}
export function Left() {
  <FontAwesomeIcon icon={faChevronLeft} />;
}
export function MagnifyingGlass() {
  <FontAwesomeIcon icon={faMagnifyingGlass} />;
}
export function Download() {
  <FontAwesomeIcon icon={faArrowUpFromBracket} />;
}
