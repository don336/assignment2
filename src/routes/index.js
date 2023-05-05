import app from './v1/app';

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`server running on Port ${PORT}`));
