const repoUrl = 'https://api.github.com/repos/WooRepo/tiinysite/contents/';

async function fetchFileList() {
    try {
        const response = await fetch(repoUrl);
        const data = await response.json();
        const fileList = document.getElementById('file-list');

        data.forEach(file => {
            if (file.type === 'file') {
                const listItem = document.createElement('li');
                const fileLink = document.createElement('a');
                fileLink.href = file.download_url;
                fileLink.textContent = file.name;
                fileLink.target = '_blank';
                fileLink.onclick = () => openInPlayer(file.download_url);
                listItem.appendChild(fileLink);
                fileList.appendChild(listItem);
            }
        });
    } catch (error) {
        console.error('Error fetching file list:', error);
    }
}

function openInPlayer(url) {
    // Modify this to redirect to your video player
    window.open(`video-player.html?file=${encodeURIComponent(url)}`, '_blank');
}

window.onload = fetchFileList;
