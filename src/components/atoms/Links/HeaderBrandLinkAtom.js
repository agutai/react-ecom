
import { Link } from 'react-router-dom';

const HeaderBrandLinkAtom = (props) => {
  const { classNameString, toString, linkTextString } = props;
    return (
      <div>
        <Link className={classNameString} to={toString}>
            {linkTextString}
        </Link>
      </div>
    )
  };
export default HeaderBrandLinkAtom;