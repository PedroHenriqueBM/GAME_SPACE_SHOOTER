function modalDelete() {

    return `
<div class="modal fade" id="autoOpenModalDelete" tabindex="-1" aria-modal="true" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
              <h5 class="modal-title" id="modal-title-delete"></h5>
              <button type="button" id="bt-close-delete" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
      </div>
      <div class="modal-body">
        <p id="modal-body-delete"><p>
      </div>
      <div class="modal-footer">
                <button type="button" id="bt-yes-delete" class="btn btn-secondary" data-bs-dismiss="modal">Sim</button>
                <button type="button" id="bt-no-delete" class="btn btn-secondary" data-bs-dismiss="modal">Não</button>
      </div>
    </div>
  </div>
</div>
    `


}

export { modalDelete };
