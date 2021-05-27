<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-3">申請表格</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">請款申請</a></li>
                <li class="breadcrumb-item active">申請表格</li>
                </ol>
            </div><!-- /.col -->
            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->

        <!-- Main content -->
        <div class="content ml-3">
        <div class="container-fluid">
            <div class="row">
            </div>
            <!--/.col (left) -->
            <!-- right column -->
            <div class="col-md-10">
            <!-- general form elements disabled -->
            <div class="card">
                <div class="card-header">
                <h3 class="card-title">* 請確實填寫資料</h3>
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                <form role="form">
                    <div class="row">
                    <div class="col-sm-6">
                        <!-- text input -->
                        <div class="form-group">
                        <label>客戶名稱</label>
                        <input type="text" class="form-control" placeholder="Enter ...">
                        </div>
                    </div>
                    <div class="form-group ml-2">
                        <label>付款金額</label>
                        <input type="text" class="form-control" placeholder="Enter ...">
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-sm-9">
                        <!-- textarea -->
                        <div class="form-group">
                        <label>付款摘要</label>
                        <textarea class="form-control" rows="3" placeholder="Enter ..."></textarea>
                        </div>
                    </div>
                    </div>

                    <div class="row">
                    <div class="col-sm-6">
                        <!-- select -->
                        <div class="form-group">
                        <label>銷帳月份 起始</label>
                        <select class="form-control">
                            <option>2020/1</option>
                            <option>2020/2</option>
                            <option>2020/3</option>
                            <option>2020/4</option>
                            <option>2020/5</option>
                        </select>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                        <label>銷帳月份 結束</label>
                        <select class="form-control">
                            <option disabled>2020/5</option>
                            <option>2020/6</option>
                            <option>2020/7</option>
                            <option>2020/8</option>
                            <option>2020/9</option>
                        </select>
                        </div>
                    </div>
                    </div>

                    <div class="row">
                    <div class="col-sm-6">
                        <!-- checkbox -->
                        <div class="form-group">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox">
                                <label class="form-check-label">驗證銷貨單</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox">
                                <label class="form-check-label">設定為已銷帳</label>
                            </div>
                        </div>
                    </div> 
                    <div class="col-sm-6">
                        <!-- radio -->
                        <!-- <div class="form-group">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="radio1">
                            <label class="form-check-label">Radio</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="radio1" checked>
                            <label class="form-check-label">Radio checked</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" disabled>
                            <label class="form-check-label">Radio disabled</label>
                        </div>
                        </div> -->
                    </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-12">
                            <button type="button" class="btn btn-block btn-default">完成送出</button>
                        </div>
                    </div>
                </form>
                </div>
                <!-- /.card-body -->
            </div>

            </div>
            <!-- /.row -->
        </div><!-- /.container-fluid -->
        </div>
        <!-- /.content -->
    </div>
</template>

<script>
export default {
    name: 'main-content',
}
</script>