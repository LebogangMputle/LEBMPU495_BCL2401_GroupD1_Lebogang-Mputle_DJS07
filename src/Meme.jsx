export default function Meme() {
    return (
        <main>
            <form className="form">
                <div>
                 <label>Top Text</label>   
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                </div>
                <div>
                    <label>
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                </label>
                <button 
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
                </div>
            </form>
        </main>
    )
}