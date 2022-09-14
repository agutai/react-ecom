import { Link } from 'react-router-dom';

const ProductLinkAtom = (props) => {
  const {classNameString, ariaCurrentString, toString, linkTextString, altString, imgSrc} = props; 
    return (
        <Link className={classNameString} aria-current={ariaCurrentString} to={toString}>
          <img src={imgSrc} alt={altString} />
          {linkTextString}
        </Link>
    )
}
export default ProductLinkAtom;