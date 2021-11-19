import{ useState, useEffect } from 'react'
import AccountTimer from './AccountTimer'

function UserAccountPage() {
    const [ featuredDish, setFeaturedDish ] = useState("")

    useEffect(() => {
        fetch('https://random-data-api.com/api/food/random_food')
            .then((result) => {
                return result.json()
            })
            .then((jsonResult) => {
                setFeaturedDish(jsonResult.dish)
            })
    },[])
    return(
        <section>
            <h2>You now have access to your recipe account page</h2>
            <p>Today's featured recipe is {featuredDish} </p>
            <AccountTimer />
        </section>
    )
}

export default UserAccountPage