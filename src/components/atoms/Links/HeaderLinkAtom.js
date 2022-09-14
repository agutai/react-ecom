import { Link } from 'react-router-dom';

const HeaderLinkAtom = (props) => {
  const {classNameString, ariaCurrentString, toString, iconClassNameString, ariaHiddenString, linkTextString} = props; 
    return (
        <Link className={classNameString} aria-current={ariaCurrentString} to={toString}>
          <i className={iconClassNameString} aria-hidden={ariaHiddenString}></i>
          {linkTextString}
        </Link>
    )
}
export default HeaderLinkAtom;