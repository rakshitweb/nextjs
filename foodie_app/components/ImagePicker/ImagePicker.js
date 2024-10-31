'use client'

import { useRef, useState } from 'react'
import classes from './ImagePicker.module.css'
import Image from 'next/image'

export default function ImagePicker({ label, name }) {
    const [pickedImage, setPickedImage] = useState()
    const imageInputRef = useRef()

    const handlePickClick = () => {
        imageInputRef.current.click()
    }

    const handleImageChange = (e) => {
        const [file] = e.target.files
        if (!file) {
            setPickedImage(null)
            return
        }
        const fileReader = new FileReader()
        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }
        fileReader.readAsDataURL(file)
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {pickedImage ? (
                        <Image src={pickedImage} alt="Picked Image" fill />
                    ) : (
                        <p>No image selected yet.</p>
                    )}
                </div>
                <input
                    onChange={handleImageChange}
                    ref={imageInputRef}
                    className={classes.input}
                    type="file"
                    id={name}
                    accept="image/png, image/jpeg"
                    name={name}
                    required
                />
                <button
                    className={classes.button}
                    type="button"
                    onClick={handlePickClick}
                >
                    Pick an Image
                </button>
            </div>
        </div>
    )
}
