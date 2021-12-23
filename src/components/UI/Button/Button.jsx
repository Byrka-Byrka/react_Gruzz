import classes from './Button.module.scss'


export function Button({children, ...props}) {

    return (
        <button {...props} className={classes.button}>
            {children}
        </button>
    )
}