<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-3">申請表格</h1>
          </div>
          <!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">請款申請</a></li>
              <li class="breadcrumb-item active">申請表格</li>
            </ol>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content ml-3">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-11">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title text-danger">*為必填資料</h3>
              </div>
              <div class="card-body">
                  <router-view></router-view>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /.content -->
  </div>
</template>

<script>
export default {
  name: "content-form",
};
</script>