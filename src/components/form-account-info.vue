<template>
  <div class="col-6">
    <div class="form-group">
      <label for="exampleInputEmail1" class="text-danger">*輸入匯款帳號</label>
      <div class="col">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <button
              type="button"
              class="btn btn-default dropdown-toggle"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              銀行代碼
            </button>
            <ul
              class="dropdown-menu"
              x-placement="bottom-start"
              style="
                position: absolute;
                will-change: transform;
                top: 0px;
                left: 0px;
                transform: translate3d(0px, 48px, 0px);
              "
            >
              <li class="dropdown-item"><a href="#">007 第一銀行</a></li>
              <li class="dropdown-item"><a href="#">013 國泰銀行</a></li>
              <li class="dropdown-item"><a href="#">808 玉山銀行</a></li>
            </ul>
          </div>
          <!-- /btn-group -->
          <input type="text" class="form-control" placeholder="銀行帳號" />
        </div>
        <input type="text" class="form-control" placeholder="戶名" />
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
        data-bs-target="#exampleModal"
      >
        下一步
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "form-account-info",
};
</script>