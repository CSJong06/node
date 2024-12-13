import expressLayouts from "express";
import express from "express";

const app = express();

app.use(expressLayouts);
app.set('layout', 'layouts/main');
app.set('view engine', 'ejs');

// Configure layout middleware
app.use((req, res, next) => {
    // Provide common data to all views
    res.locals.user = req.user;
    res.locals.currentPath = req.path;
    next();
});

//consoles the server
const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`);
});