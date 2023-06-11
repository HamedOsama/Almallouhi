const mongoose=require('mongoose')

mongoose.set('strictQuery', true)
mongoose.connect('mongodb+srv://hamedsama1122021:UmTgEhy2txhw7Sub@main.ccs8u4y.mongodb.net/?retryWrites=true&w=majority',{
    autoIndex: true,
})
