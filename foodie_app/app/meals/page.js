import Link from 'next/link'
import classes from './meals.module.css'
import MealsGrid from '@/components/Meals/MealsGrid'
import { getMeals } from '@/lib/meals'
import { Suspense } from 'react'
import LoadingMealPage from './loading-out'

export const metadata = {
    title: 'All meals',
    description: 'All the delicious meals are listed here',
}

async function Meals() {
    const meals = await getMeals()
    return <MealsGrid meals={meals} />
}

const MealPage = () => {
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, create{' '}
                    <span className={classes.highlight}>by you</span>
                </h1>
                <p>
                    Choose your favorite recipe and cook it yourself. It is easy
                    and fun!
                </p>
                <p className={classes.cta}>
                    <Link href="/meals/share">Share Your Favorite Recipe</Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<LoadingMealPage />}>
                    <Meals />
                </Suspense>
            </main>
        </>
    )
}

export default MealPage
