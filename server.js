const app = require('./src/app');

app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on: ${process.env.PORT}`);
});
