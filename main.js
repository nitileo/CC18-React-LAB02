function App(){
    const st1 = {color:'white',backgroundColor:'#23272F',padding:'32px 32px 24px 32px',}
    const st2 = {backgroundColor:'#343A46',padding:' 16px 24px',borderRadius:'12px'}
    return(
        <div style={st1}>
            <h1 style= {{marginBottom:'12px'}}>Quick Start</h1>
            <p style= {{marginBottom:'16px',fontSize:'20px'}}>Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.</p>
            <div style ={st2}>
                <h2 style= {{marginBottom:'16px'}}>You will learn</h2>
                <ul style={{marginLeft:'28px'}}>
                    <li>How to create and nest components</li>
                    <li>How to add markup and styles</li>
                    <li>How to display data</li>
                    <li>How to render conditions and lists</li>
                    <li>How to respond to events and update the screen</li>
                    <li>How to share data between components</li>
                </ul>
            </div>
        </div>
    )
}



ReactDOM.createRoot(document.querySelector('#root'))
.render(<App />)
