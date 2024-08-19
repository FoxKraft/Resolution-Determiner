document.getElementById('resolution-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const width = parseInt(document.getElementById('width').value);
    const height = parseInt(document.getElementById('height').value);
    const result = determineResolution(width, height);

    document.getElementById('result').textContent = `The resolution is: ${result}`;
});

document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fileInput = document.getElementById('imageUpload');
    const file = fileInput.files[0];
    
    if (file) {
        const img = new Image();
        img.onload = function() {
            const width = img.width;
            const height = img.height;
            const result = determineResolution(width, height);

            document.getElementById('result').textContent = `The resolution of the uploaded image is: ${result} (${width}x${height})`;
        };
        img.src = URL.createObjectURL(file);
    }
});

function determineResolution(width, height) {
    if (width === 1280 && height === 720) {
        return "HD (720p)";
    } else if (width === 1920 && height === 1080) {
        return "Full HD (1080p)";
    } else if (width === 2048 && height === 1080) {
        return "2K";
    } else if (width === 3840 && height === 2160) {
        return "4K UHD";
    } else if (width === 4096 && height === 2160) {
        return "DCI 4K";
    } else if (width === 5120 && height === 2880) {
        return "5K";
    } else if (width === 6144 && height === 3160) {
        return "6K";
    } else if (width === 7680 && height === 4320) {
        return "8K UHD";
    } else {
        return "Custom or Non-standard resolution";
    }
}

function changeLanguage(language) {
    const translations = {
        en: {
            title: "Resolution Determiner",
            width: "Width (pixels):",
            height: "Height (pixels):",
            determine: "Determine Resolution",
            upload: "Upload an Image:",
            check: "Check Image Resolution"
        },
        de: {
            title: "Auflösungsbestimmer",
            width: "Breite (Pixel):",
            height: "Höhe (Pixel):",
            determine: "Auflösung bestimmen",
            upload: "Bild hochladen:",
            check: "Bildauflösung prüfen"
        },
        fr: {
            title: "Déterminateur de résolution",
            width: "Largeur (pixels):",
            height: "Hauteur (pixels):",
            determine: "Déterminer la résolution",
            upload: "Télécharger une image:",
            check: "Vérifier la résolution de l'image"
        },
        it: {
            title: "Determinatore di risoluzione",
            width: "Larghezza (pixel):",
            height: "Altezza (pixel):",
            determine: "Determinare la risoluzione",
            upload: "Carica un'immagine:",
            check: "Verifica la risoluzione dell'immagine"
        },
        zh: {
            title: "分辨率确定器",
            width: "宽度（像素）：",
            height: "高度（像素）：",
            determine: "确定分辨率",
            upload: "上传图片：",
            check: "检查图像分辨率"
        }
    };

    const elements = {
        title: document.getElementById('title'),
        width: document.getElementById('label-width'),
        height: document.getElementById('label-height'),
        determine: document.getElementById('determine-button'),
        upload: document.getElementById('label-upload'),
        check: document.getElementById('upload-button')
    };

    for (const key in elements) {
        elements[key].textContent = translations[language][key];
    }
}
