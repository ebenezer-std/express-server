const express = require('express')
const app = express()

const products = [
    {
        id : 1,
        name: "Iphone 12 pro",
        category: "Phones",
        price: 9900,
        currency: "usd",
        image: "https://pexels.com",
        stars: 4,
        review: "This is an amazing product!"
    },
    {
        id : 2,
        name: "Bread",
        category: "Food",
        price: 90,
        currency: "usd",
        image: "https://pexels.com",
        stars: 3,
        review: "This was not a great product"
    }
]

const customers =[
    {
        id: "1032",
        name: "Eben Abbey",
        gender: "male"
    },

    {
        id: "1032",
        name: "Eben Abbey",
        gender: "male"
    },

    {
        id: "1032",
        name: "Patty",
        gender: "female"
    }

]


app.get('/', (req,res) =>{
    res.send("Hey There! Welcome to my site")
    res.json({
        name: "Ebenezer Abbey Anertey",
        YoB: 1999
    })
})
app.get('/products', (req,res) =>{
    res.json(products)
})

app.get('/customers', (req,res) =>{
    res.json(customers)
})

app.get('/customers/:customerID',(req,res)=>
{
    const {customerID} = req.params;
    console.log(`The reqested cust`)
    res.json(customers[customerID-1]) 
})

app.listen(5050, ()=>{
    console.log('Server is up and running') 
})

