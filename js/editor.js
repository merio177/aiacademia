const titleField = document.querySelector('.write-post-title');
const contentField = document.querySelector('.write-post-content');
const publishBtn = document.querySelector('.publish-btn');

let months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

publishBtn.addEventListener("click", () => {
    console.log("button-press");
    if (contentField.value.length && titleField.value.length) {
        // generating id
        let letters = "abcdefghijklmnopqrstuvwxyz";
        let postTitle = titleField.value.split(" ").join("-");
        let id = "";
        for (let i = 0; i < 4; i++) {
            id += letters[Math.floor(Math.random() * letters.length)];
        }

        // set up docName
        let docName = `${postTitle}-${id}`;
        let date = new Date();
        // acess firestore with db variable
        db.collection("posts").doc(docName).set({
            title: titleField.value,
            content: contentField.value,
            publishedAt: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
        })
            .then(() => {
                console.log("date entered");
            })
            .catch((err) => {
                console.error(err);
            })
    }
})