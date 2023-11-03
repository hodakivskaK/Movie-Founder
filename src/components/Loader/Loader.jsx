import SquareLoader from "react-spinners/SquareLoader";
import s from './Loader.module.css'

export default function Loader () {
    return <SquareLoader
  color="#e73131"
  cssOverride={{}}
  loading
  size={60}
  speedMultiplier={1}
  className={s.loader}
/>

}