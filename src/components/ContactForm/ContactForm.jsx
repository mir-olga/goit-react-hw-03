import css from './ContactForm.module.css';

export const ContactForm = () => {

    return (
        <form className={css.formAll}>
          <div className={css.form}>
            <label>Name</label>
            <input className={css.input}
              type="text"
              /*id={}
              value={}
              onChange={}*/
            />
          </div>
    
          <div className={css.form}>
            <label >Number</label>
                <input className={css.input}
                type="text"
                /*id={}
                value={}
                onChange={}*/
                />
          </div>
    
          <button className={css.button} type="submit">Add contact</button>
        </form>
      );
}