import Header from './header/Header'
import Footer from './footer/Footer'
import withStyles from '@mui/styles/withStyles';

// ===== Basic Layout ===== //
const useStyles = () => ({
    root: {
        minHeight: "100vh",
    },
});

const  DefaultLayout = (props) => {
    const {classes} = props
    return (
        
            <div className={classes.root}>

                {/*Header*/}
                <Header/>

                <main>
                    {props.children}
                </main>

                {/*Footer*/}
                <Footer/>
            </div>
    )
}

export default withStyles(useStyles)(DefaultLayout)