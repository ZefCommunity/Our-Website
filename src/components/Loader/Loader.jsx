import { ZEF_SHORT } from '../../config/branding';

function Loader() {
  return (
    <div className="loader">
      <div className="circle"></div>
      <span className="text">{ZEF_SHORT}</span>
    </div>
  );
}

export default Loader;

