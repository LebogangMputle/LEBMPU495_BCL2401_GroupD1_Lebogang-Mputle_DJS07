export default function Meme() {
    return (
        <main>
            <form className="form">
                <div>
                    <label htmlFor="top-text">Top Text</label>   
                    <input
                        id="top-text" 
                        type="text"
                        placeholder="Top text"
                        className="form--input"
                />
                </div>
                <div>
                    <label>Bottom Text
                    <input 
                        type="text"
                        placeholder="and take my money"
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