import memesData from "../memesData.jsx"

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage(){
        const memesArray = memesData.data.names
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage()
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
        </main>
    )
}