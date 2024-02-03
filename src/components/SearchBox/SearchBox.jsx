import css from './SearchBox.module.css';

export const SearchBox = () => {

return (
    <form className={css.formSearch}>
        <div className={css.searchBox}>
            <label>Name</label>
            <input className={css.input}
              type="text" name="username"
              /*id={}
              value={}
              onChange={}*/
            />
        </div>
    </form >
);
}


  