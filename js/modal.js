let btnDownload = document.getElementById('download-game')
let btnClose = document.getElementById('modal-close')
let modal = document.getElementById('modal')
console.log(btnDownload)

btnDownload.onclick = function () {
	modal.style.display = 'block'
}

btnClose.onclick = function () {
	modal.style.display = 'none'
}
