import ReactDOM from "react-dom/client"
function App(){
    return(
        <div>
            <Book/>
            <Book/>
            <Book/>
        </div>
    );
}

function Book(){
    return(
        <div>
            <img src="" width="200" height="200" alt="img"></img>
            <h3>Title : Physics</h3>
            <h4>Price: Rs 385/=</h4>
            <button>ADD TO CART</button>
        </div>
    );
}

const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(<App></App>)