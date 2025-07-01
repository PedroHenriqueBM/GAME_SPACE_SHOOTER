window.addEventListener('DOMContentLoaded', () => {
    const modalEl = document.getElementById('autoOpenModal');
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
});

function redirect(url) {
    window.location.href = url;
}

function deletarMajor(majorIdToDelete) {
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

