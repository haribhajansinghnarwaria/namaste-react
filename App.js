// const heading = React.createElement("h1", {id:"heading"}, "Hello World From React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


const parent = React.createElement("div",{id: "Parent"},[
    React.createElement("div",{id: "Child1"},[
        React.createElement("h1",{},"I am an h1 tag"),
        React.createElement("h2",{},"I am an h2 tag")
    ]
    ),
    React.createElement("div",{id: "Child2"},[
        React.createElement("h1",{},"I am an h1 tag"),
        React.createElement("h2",{},"I am an h2 tag")
    ]
    ),
]

)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)

//To render nested elements and siblings we can use above method but its not the way we want it is making
//our code complex and hard to read and maintain. So we use JSX which is a syntax extension.
