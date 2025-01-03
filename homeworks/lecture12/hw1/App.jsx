import React from 'react'

class App extends React.Component {
    
    data = ['Frontend is the part of the website that users can see and interact with.', 
        'Frontend is also called client-side', 
        'Frontend is built with HTML, CSS, and JavaScript.'
    ];

    render() {
        return (
            <div>
                <h2>What is Frontend?</h2>
                <ul>
                    {
                        this.data.map((item, i) => <li key={i}>{item}</li>)
                    }
                </ul>
            </div>
        )
    }
}

export default App;