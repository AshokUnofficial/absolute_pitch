import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Divider, makeStyles } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import Link from 'next/link';

const useStyles = makeStyles(theme => ({
    root: {
        borderRadius: 12,
        minWidth: 256,
        textAlign: 'center',
    },
    header: {
        textAlign: 'center',
        spacing: 10,
    },
    list: {
        padding: '20px',
    },
    button: {
        margin: theme.spacing(1),
    },
    action: {
        display: 'flex',
        justifyContent: 'space-around',
    },
}));

export const PricingCardDemo = React.memo(function PricingCard () {
    const classes = useStyles();
    return (
        <div style={{ display: "flex", justifyContent: "center", height: "100%", gap: "20px", padding: "50px", alignItems: "center" }}>
            <Card className={classes.root} style={{ height: "fit-content" }}>
                <CardHeader title="Basic Plan" className={classes.header} />
                <Divider variant="middle" />
                <CardContent>
                    <Typography variant="h4" align="center">
                        $ 10 / Month
                    </Typography>
                    {/* <div className={classes.list}>
                        <Typography align="center">Manage tasks</Typography>
                        <Typography align="center">Sync notes</Typography>
                        <Typography align="center">Set deadline</Typography>
                    </div> */}
                </CardContent>
                <Divider variant="middle" />
                <CardActions className={classes.action}>
                    <Link href={{
                        pathname: '/stripe-register', query: {
                            plan_id: "plan_OjPilk7VQ4nQNE"
                        }
                    }}>
                        <Button variant="contained" color="primary" className={classes.button}>
                            Buy
                        </Button>
                    </Link>
                </CardActions>
            </Card>
            <Card className={classes.root} style={{ height: "fit-content" }}>
                <CardHeader title="Basic Plan" className={classes.header} />
                <Divider variant="middle" />
                <CardContent>
                    <Typography variant="h4" align="center">
                        $ 100 / Month
                    </Typography>
                    {/* <div className={classes.list}>
                        <Typography align="center">Manage tasks</Typography>
                        <Typography align="center">Sync notes</Typography>
                        <Typography align="center">Set deadline</Typography>
                    </div> */}
                </CardContent>
                <Divider variant="middle" />
                <CardActions className={classes.action}>
                    <Link href={{
                        pathname: '/stripe-register', query: {
                            plan_id: "plan_OjQE6mGcmvlJBX"
                        }
                    }}>
                        <Button variant="contained" color="primary" className={classes.button}>
                            Buy
                        </Button>
                    </Link>
                </CardActions>
            </Card>
            <Card className={classes.root} style={{ height: "fit-content" }}>
                <CardHeader title="Basic Plan" className={classes.header} />
                <Divider variant="middle" />
                <CardContent>
                    <Typography variant="h4" align="center">
                        $ 100 / Month
                    </Typography>
                    {/* <div className={classes.list}>
                        <Typography align="center">Manage tasks</Typography>
                        <Typography align="center">Sync notes</Typography>
                        <Typography align="center">Set deadline</Typography>
                    </div> */}
                </CardContent>
                <Divider variant="middle" />
                <CardActions className={classes.action}>
                    <Link href={{
                        pathname: '/stripe-register', query: {
                            plan_id: "plan_OjRIcI3exh9mrV"
                        }
                    }}>
                        <Button variant="contained" color="primary" className={classes.button}>
                            Buy
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </div>
    );
});

export default PricingCardDemo;