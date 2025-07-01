
function errorMessage(title: string, text: string, status: number, justClose: Boolean) {

    return `
<div class="modal fade show" id="autoOpenModal" tabindex="-1" style="display: block;" aria-modal="true" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Erro ${status} - ${title}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar" onclick=${justClose ? "" : "window.history.back()"}></button>
      </div>
      <div class="modal-body">
        <p>${text}<p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick=${justClose ? "" : "window.history.back()"}>Fechar</button>
      </div>
    </div>
  </div>
</div>
    `

}

export { errorMessage }