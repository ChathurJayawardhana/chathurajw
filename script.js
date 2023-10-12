
        const text = document.querySelector(".sec-text");
        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "DataAnalyst";
            }, 0);
            setTimeout(() => {
                text.textContent = "FigmaDesigner";
            }, 4000);
            setTimeout(() => {
                text.textContent = "Networker";
            }, 8000);
            setTimeout(() => {
                text.textContent = "FrontendDeveloper";
            }, 12000); //1s = 1000 milliseconds
        }
        textLoad();
        setInterval(textLoad, 12000);