import memesData from "../memesData.jsx"

export default function Meme() {
    //const [memeImage, setMemeImage] = React.useState("")

    let url

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        url = memesArray[randomNumber].url
        console.log(url)
    }

    return (
        <main>
            <p>{url}</p>
            <div className="form">
                    <input
                        type="text"
                        placeholder="Top text"
                        className="form--input"
                />
                
                    <input 
                        type="text"
                        placeholder="Bottom text"
                        className="form--input"
                    />

                    <button
                        onClick={getMemeImage}
                        className="form--button"
                        >
                        Get a new meme image 🖼
                    </button>
                </div>
                <img src="{memeImage}" className="meme--image" />
        </main>
    )
}