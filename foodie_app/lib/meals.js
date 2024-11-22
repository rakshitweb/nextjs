import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'
import fs from 'fs'

const db = sql('meals.db')

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    // throw new Error("Failed to fetch meals");
    return db.prepare('SELECT * FROM MEALS').all()
}

export async function getMeal(slug) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return db.prepare('SELECT * FROM MEALS WHERE SLUG=?').get(slug)
}

export async function saveMeal(meal) {
    meal.slug = slugify(meal.title, { lower: true })
    meal.instructions = xss(meal.instructions)
    const extention = meal.image.name.split('.').pop()
    const fileName = `${meal.slug}.${extention}`
    const stream = fs.createWriteStream(`public/images/${fileName}`)
    const bufferedImage = await meal.image.arrayBuffer()
    console.log(bufferedImage)
    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error('Failed to save the image')
        }
    })

    meal.image = `/images/${fileName}`

    console.log(meal)
    db.prepare(
        `
        INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug)
        VALUES (
            @title,
            @summary,
            @instructions,
            @creator,
            @creator_email,
            @image,
            @slug
        )
        `
    ).run(meal)
}
