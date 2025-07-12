window.addEventListener('DOMContentLoaded', () => {
    const modalEl = document.getElementById('autoOpenModal');
    if (modalEl) {
        const modal = new bootstrap.Modal(modalEl);
        modal.show();
    }


});


function redirect(url) {
    window.location.href = url;
}



function deletarMajor(majorIdToDelete) {
    console.log("veio aqui")
    fetch(`/major/remove/${majorIdToDelete}`, { method: 'POST' })
        .then(response => {
            if (response.ok) {
                console.log('Major deletado com sucesso');
                window.location.reload();
            } else {
                console.log('Erro ao deletar');
            }
        });
}

function deletarUser(userIdToDelete) {
    fetch(`/user/remove/${userIdToDelete}`, { method: 'POST' })
        .then(response => {
            if (response.ok) {
                console.log('User deletado com sucesso');
                window.location.reload();
            } else {
                console.log('Erro ao deletar');
            }
        });
}


function openModalDelete(text, title, justClose, operation, param) {


    console.log(text, title, justClose, param, operation);



    let modalTitleDelete = document.getElementById('modal-title-delete');
    let modalBodyDelete = document.getElementById('modal-body-delete');
    let btCloseDelete = document.getElementById('bt-close-delete');
    let btYesDelete = document.getElementById('bt-yes-delete');
    let btNoDelete = document.getElementById('bt-no-delete');
    modalTitleDelete.innerText = title;
    modalBodyDelete.innerText = text;
    btCloseDelete.onclick = justClose ? "" : "window.history.back()";
    btYesDelete.onclick = () => {
        operation(param);
    };
    btNoDelete.onclick = justClose ? "" : "window.history.back()";
    const modalElDel = document.getElementById('autoOpenModalDelete');
    const modalDel = new bootstrap.Modal(modalElDel);
    modalDel.show();




}

