import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faCheck,
  faFlag,
  faChevronLeft,
  faMagnifyingGlass,
  faArrowUpFromBracket,
  faCamera,
  faXmark
} from '@fortawesome/free-solid-svg-icons'
import {
  faBell,
  faHeart,
  faMessage
} from '@fortawesome/free-regular-svg-icons'

export function MenuBars (): JSX.Element {
  return <FontAwesomeIcon icon={faBars} />
}

export function Bell (): JSX.Element {
  return <FontAwesomeIcon icon={faBell} />
}

export function Check (): JSX.Element {
  return <FontAwesomeIcon icon={faCheck} />
}

export function Heart (): JSX.Element {
  return <FontAwesomeIcon icon={faHeart} />
}

export function Message (): JSX.Element {
  return <FontAwesomeIcon icon={faMessage} />
}

export function Flag (): JSX.Element {
  return <FontAwesomeIcon icon={faFlag} />
}

export function Left (): JSX.Element {
  return <FontAwesomeIcon icon={faChevronLeft} />
}

export function MagnifyingGlass (): JSX.Element {
  return <FontAwesomeIcon icon={faMagnifyingGlass} />
}

export function Download (): JSX.Element {
  return <FontAwesomeIcon icon={faArrowUpFromBracket} />
}

export function Camera (): JSX.Element {
  return <FontAwesomeIcon icon={faCamera} />
}

export function Xmark (): JSX.Element {
  return <FontAwesomeIcon icon={faXmark} />
}
