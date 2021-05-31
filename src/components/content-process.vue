<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-3">送審進度</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">請款申請</a></li>
                        <li class="breadcrumb-item active">送審進度</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->

        <!-- Main content -->
        <div class="content">
        <div class="container-fluid">
            <div class="col-12">
                <div class="card">
                <div class="card-header">
                    <div class="card-tools">
                        <div class="input-group input-group-sm" style="width: 250px;">
                            <input type="text" name="table_search" class="form-control float-right" placeholder="Search">

                            <div class="input-group-append">
                                <button type="submit" class="btn btn-default"><i class="fas fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.card-header -->
                <div class="card-body table-responsive p-0" style="height: 400px;">
                    <table class="table table-hover table-head-fixed">
                    <thead>
                        <tr>
                        <th>ID 員工編號</th>
                        <th>User 員工姓名</th>
                        <th>Date 申請日期</th>
                        <th>Status 申請狀態</th>
                        <th>Note 備註</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Iris</td>
                            <td>2021-5-27</td>
                            <td><span class="badge badge-success">簽核成功</span></td>
                            <td>報表通過審核</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Iris</td>
                            <td>2021-5-27</td>
                            <td><span class="badge badge-secondary">審核中</span></td>
                            <td>報表審核中</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Iris</td>
                            <td>2021-5-27</td>
                            <td><span class="badge badge-danger">審核失敗</span></td>
                            <td>資料填寫錯誤</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Iris</td>
                            <td>2021-5-27</td>
                            <td><span class="badge badge-warning">取消審核</span></td>
                            <td>已取消申請</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Iris</td>
                            <td>2021-5-27</td>
                            <td><span class="badge badge-success">簽核成功</span></td>
                            <td>報表通過審核</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Iris</td>
                            <td>2021-5-27</td>
                            <td><span class="badge badge-secondary">審核中</span></td>
                            <td>報表審核中</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Iris</td>
                            <td>2021-5-27</td>
                            <td><span class="badge badge-danger">審核失敗</span></td>
                            <td>資料填寫錯誤</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Iris</td>
                            <td>2021-5-27</td>
                            <td><span class="badge badge-warning">取消審核</span></td>
                            <td>已取消申請</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <!-- /.card-body -->
                </div>
                <!-- /.card -->
            </div>
            <!-- /.row -->
        </div><!-- /.container-fluid -->
            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->
    </div>
</template>

<script>
export default {
    name: 'content-process',
}
</script>