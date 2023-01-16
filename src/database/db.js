const mongoose = require("mongoose");
mongoose.set("strictQuery", true);//Correção erro que estava aparecendo, estudar e corrigir este erro ((node:17334) [MONGOOSE] DeprecationWarning:)

const connetcDatabase = ()=> {
    console.log("Wait connecting to the database....");
    mongoose.connect(
        "mongodb+srv://root:root@cluster0.vf1scy5.mongodb.net/?retryWrites=true&w=majority",
        {useNewUrlParser: true, useUnifiedTopology: true}
    )
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error))
};

module.exports = connetcDatabase; 