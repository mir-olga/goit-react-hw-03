import css from './SearchBox.module.css';

export const SearchBox = () => {

return (
    <form >
        <div className={css.searchBox}>
            <label>Name</label>
            <input 
              type="text"
              /*id={}
              value={}
              onChange={}*/
            />
        </div>
    </form >
          );
}