'use client'

export default function Error({ error }) {
    return (
        <main className="error">
            <h1>An error occured</h1>
            <p>Something went wrong while saving the meal.</p>
            <p>{error.message}</p>
        </main>
    )
}
