
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.success.main,
        color: theme.palette.primary.contrastText,
        padding: theme.spacing(4, 0),
    },
    links: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.root}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h3" gutterBottom>
                            Serenity
                        </Typography>
                        <Typography className='font-bold' variant="subtitle1" color="textDisabled">
                            Serenity care is a platform to help people who are struggling with mental health issues by providing
                            expert opinions.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <div className={classes.links}>
                            <Link color="inherit" href="#">

                            </Link>
                            <Link color="inherit" href="#">
                                About
                            </Link>
                            <Link color="inherit" href="/expert-signup">
                                Join as an expert
                            </Link>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
}

export default Footer;

