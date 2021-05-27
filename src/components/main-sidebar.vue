<template>
    <aside class="main-sidebar sidebar-light-olive elevation-2">
        <!-- Brand Logo -->
        <a href="index3.html" class="brand-link">
        <span class="brand-text font-weight-light texr-align-center">COMPANY NAME</span>
        </a>

        <!-- Sidebar -->
        <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
            <img src="../assets/img/user4-128x128.jpg" class="img-circle elevation-1" alt="User Image">
            </div>
            <div class="info">
            <a href="#" class="d-block">Iris Chen</a>
            </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

            <li class="nav-item menu-open">
                <a href="#" class="nav-link">
                <i class="nav-icon fas fa-user"></i>
                <p>
                    個人功能頁
                </p>
                </a>
            </li>

            <li class="nav-item menu-open">
                <a href="#" class="nav-link active">
                <i class="nav-icon fas fa-calculator"></i>
                <p>
                    請款申請
                    <i class="right fas fa-angle-left"></i>
                </p>
                </a>
                <ul class="nav nav-treeview">
                <li class="nav-item">
                    <a href="#" class="nav-link active">
                    <i class="far fa-circle nav-icon"></i>
                    <p>申請表格</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>送審進度</p>
                    </a>
                </li>
                </ul>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                <i class="nav-icon fas fa-th"></i>
                <p>
                    其他報表
                    <span class="right badge badge-danger">New</span>
                </p>
                </a>
            </li>
            </ul>
        </nav>
        <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
    </aside>

</template>

<script>
export default {
    name: 'main-sidebar'
}
</script>