import { FaUserAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from './Contact.module.css';

export const Contact = ({item:{name, number}}) => {
    return (
        <div className={css.contact}>
            <div className={css.info}>
                <p className={css.name}><FaUserAlt />  {name}</p>
                <p className={css.name}> <BsFillTelephoneFill/>  {number}</p>
            </div>
            <div>
                <button className={css.button}>Delete</button>
             </div>
        </div>
    )
}