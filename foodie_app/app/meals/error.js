'use client'

export default function Error({ error }) {
    return <main className="error">
        <h1>An error occured</h1>
        <p>Something went wrong while fetching the meals.</p>
        <p>{error.message}</p>
    </main>
}