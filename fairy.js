// JavaScript Document

window.fairy = {

    haloFrame: false,

    getHaloSrc: function(fp) {

        if (fp >= 90) {
            return this.haloFrame
                ? "image2/halo100a.png"
                : "image2/halo100b.png";
        }

        if (fp >= 75) return "image2/halo75.png";
        if (fp >= 50) return "image2/halo50.png";
        if (fp >= 25) return "image2/halo25.png";

        return "image2/halo0.png";
    },

    updateHalo: function(fp) {
        const haloImg = document.querySelector('.halo');
        if (!haloImg) return;

        haloImg.src = this.getHaloSrc(fp);
    }
};

setInterval(() => {

    if(window.kim.data.fp >= 90){
        window.fairy.haloFrame = !window.fairy.haloFrame;
        window.fairy.updateHalo(window.kim.data.fp);
    }

}, 500);