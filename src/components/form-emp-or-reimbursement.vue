<template>
  <div class="col-6">
    <div class="form-group">
      <label for="exampleInputEmail1">確認帳戶資訊</label>
      <div class="input-group mb-3">
        <input type="text" class="form-control" />
        <div class="input-group-append">
          <span class="input-group-text"><i class="fas fa-edit"></i></span>
        </div>
      </div>
    </div>
  </div>
  <div class="row float-right">
    <div class="col">
      <button type="button" class="btn btn-block btn-default">上一步</button>
    </div>
    <div class="col">
      <button
        type="button"
        class="btn btn-default"
        data-bs-toggle="modal"
        data-bs-target="#reminder"
      >
        下一步
      </button>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="reminder" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="reminderLabel">提醒</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">資訊正確，按下【申請】，進行申請。</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-primary">申請</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'form-emp-or-reimbursement'
}
</script>