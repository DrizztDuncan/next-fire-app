// loading spinner
// 1 prop => show
// show will be Boolean
export default function Loader({ show }) {
  return show ? <div className="loader"></div> : null;
}
