import { useState } from "react";
import "./App.css";

 function Likebutton() {
    const [like , setLike] = useState(0);

    const handleLike = () => {
        setLike(like + 1);
    };

   return (
        <div className="card">
            <h1>Like Button</h1>
            <button onClick={handleLike} className="btn">
                Like {like}
            </button>
        </div>
   );
}

export default Likebutton;