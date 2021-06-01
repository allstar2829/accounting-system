<template>
  <div class="col-9">
    <div class="form-group">
      <label for="exampleInputFile"
        >刷卡單<span class="badge bg-secondary ml-2"
          >(僅收圖片檔/PDF)</span
        ></label
      >
      <div class="input-group">
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="exampleInputFile" />
          <label class="custom-file-label" for="exampleInputFile"
            >選擇檔案</label
          >
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <label>付款網址</label>
  </div>
</template>

<script>
export default {
    name: 'form-vendor-company-card'
}
</script>