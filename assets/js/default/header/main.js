$(function () {
    var bar = '';
    bar += '<div class="header">';
        bar += '<div class="header-left">';
            bar += '<div class="menu-icon dw dw-menu"></div>';

            bar += '<!-- Search --';
            bar += '<div class="search-toggle-icon dw dw-search2" data-toggle="header_search"></div>';
            bar += '<div class="header-search">';
                bar += '<form>';
                    bar += '<div class="form-group mb-0">';
                        bar += '<i class="dw dw-search2 search-icon"></i>';
                        bar += '<input type="text" class="form-control search-input" placeholder="Search Here">';
                    bar += '</div>';
                bar += '</form>';
            bar += '</div>';
            bar += '<!-- Search -->';
        bar += '</div>';

        bar += '<div class="header-right">';
            bar += '<div class="dashboard-setting user-notification">';
                bar += '<div class="dropdown">';
                    bar += '<a class="dropdown-toggle no-arrow" href="javascript:;" data-toggle="right-sidebar">';
                        bar += '<i class="dw dw-settings2"></i>';
                    bar += '</a>';
                bar += '</div>';
            bar += '</div>';

            bar += '<div class="user-notification">';
                bar += '<div class="dropdown">';
                    bar += '<a class="dropdown-toggle no-arrow" href="#" role="button" data-toggle="dropdown">';
                        bar += '<i class="icon-copy dw dw-notification"></i>';
                        bar += '<span class="badge notification-active"></span>';
                    bar += '</a>';
                    bar += '<div class="dropdown-menu dropdown-menu-right">';
                        bar += '<div class="notification-list mx-h-350 customscroll">';
                            bar += '<ul>';

                                bar += '<li>';
                                    bar += '<a href="/product/ninja-beam/">';
                                        bar += '<img src="/assets/img/product/ninja-beam/mosyn (1).png" alt="Mosyn">';
                                        bar += '<h3>New Product</h3>';
                                        bar += '<p>Website Games Ninja Beam</p>';
                                    bar += '</a>';
                                bar += '</li>';

                                bar += '<li>';
                                    bar += '<a href="/product/link-avatar/">';
                                        bar += '<img src="/assets/img/product/link-avatar/mosyn.png" alt="Mosyn">';
                                        bar += '<h3>New Product</h3>';
                                        bar += '<p>Website Bio Menarik Tampilan Avatar</p>';
                                    bar += '</a>';
                                bar += '</li>';

                                bar += '<li>';
                                    bar += '<a href="/product/link-comic/">';
                                        bar += '<img src="/assets/img/product/link-comic/mosyn.png" alt="Mosyn">';
                                        bar += '<h3>New Product</h3>';
                                        bar += '<p>Website Bio Menarik Tampilan Comic</p>';
                                    bar += '</a>';
                                bar += '</li>';

                            bar += '</ul>';
                        bar += '</div>';
                    bar += '</div>';
                bar += '</div>';
            bar += '</div>';

            bar += '<div class="user-info-dropdown">';
                bar += '<div class="dropdown">';
                    bar += '<a class="dropdown-toggle" href="#" role="button" data-toggle="dropdown">';
                        bar += '<span class="user-icon">';
                            bar += '<img src="/assets/img/coming-soon/mosyn.png" alt="Mosyn">';
                        bar += '</span>';
                        bar += '<span class="user-name">Coming Soon</span>';
                    bar += '</a>';
                    bar += '<div class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">';
                        bar += '<a class="dropdown-item" href="/auth/otp/"><i class="dw dw-user1"></i> Profile</a>';
                        bar += '<a class="dropdown-item" href="/m/profile/"><i class="dw dw-settings2"></i> Setting</a>';
                        bar += '<a class="dropdown-item" href="/m/faq/"><i class="dw dw-help"></i> Help</a>';
                        bar += '<a class="dropdown-item" href="/m/login/"><i class="dw dw-logout"></i> Log Out</a>';
                    bar += '</div>';
                bar += '</div>';
            bar += '</div>';

        bar += '</div>';
    bar += '</div>';

    bar += '<div class="right-sidebar">';
        bar += '<div class="sidebar-title">';
            bar += '<h3 class="weight-600 font-16 text-blue">';
                bar += 'Layout Settings';
                bar += '<span class="btn-block font-weight-400 font-12">User Interface Settings</span>';
            bar += '</h3>';
            bar += '<div class="close-sidebar" data-toggle="right-sidebar-close">';
                bar += '<i class="icon-copy ion-close-round"></i>';
            bar += '</div>';
        bar += '</div>';
        bar += '<div class="right-sidebar-body customscroll">';
            bar += '<div class="right-sidebar-body-content">';
                bar += '<h4 class="weight-600 font-18 pb-10">Header Background</h4>';
                bar += '<div class="sidebar-btn-group pb-30 mb-10">';
                    bar += '<a href="javascript:void(0);" class="btn btn-outline-primary header-white active">White</a>';
                    bar += '<a href="javascript:void(0);" class="btn btn-outline-primary header-dark">Dark</a>';
                bar += '</div>';

                bar += '<h4 class="weight-600 font-18 pb-10">Sidebar Background</h4>';
                bar += '<div class="sidebar-btn-group pb-30 mb-10">';
                    bar += '<a href="javascript:void(0);" class="btn btn-outline-primary sidebar-light ">White</a>';
                    bar += '<a href="javascript:void(0);" class="btn btn-outline-primary sidebar-dark active">Dark</a>';
                bar += '</div>';

                bar += '<h4 class="weight-600 font-18 pb-10">Menu Dropdown Icon</h4>';
                bar += '<div class="sidebar-radio-group pb-10 mb-10">';
                    bar += '<div class="custom-control custom-radio custom-control-inline">';
                        bar += '<input type="radio" id="sidebaricon-1" name="menu-dropdown-icon" class="custom-control-input" value="icon-style-1" checked="">';
                        bar += '<label class="custom-control-label" for="sidebaricon-1"><i class="ax-keyboard_arrow_right"></i></label>';
                    bar += '</div>';
                    bar += '<div class="custom-control custom-radio custom-control-inline">';
                        bar += '<input type="radio" id="sidebaricon-2" name="menu-dropdown-icon" class="custom-control-input" value="icon-style-2">';
                        bar += '<label class="custom-control-label" for="sidebaricon-2"><i class="ax-add"></i></label>';
                    bar += '</div>';
                    bar += '<div class="custom-control custom-radio custom-control-inline">';
                        bar += '<input type="radio" id="sidebaricon-3" name="menu-dropdown-icon" class="custom-control-input" value="icon-style-3">';
                        bar += '<label class="custom-control-label" for="sidebaricon-3"><i class="ax-angle-double-right"></i></label>';
                    bar += '</div>';
                bar += '</div>';

                bar += '<h4 class="weight-600 font-18 pb-10">Menu List Icon</h4>';
                bar += '<div class="sidebar-radio-group pb-30 mb-10">';
                    bar += '<div class="custom-control custom-radio custom-control-inline">';
                        bar += '<input type="radio" id="sidebariconlist-1" name="menu-list-icon" class="custom-control-input" value="icon-list-style-1" checked="">';
                        bar += '<label class="custom-control-label" for="sidebariconlist-1"><i class="ax-subtract"></i></label>';
                    bar += '</div>';
                    bar += '<div class="custom-control custom-radio custom-control-inline">';
                        bar += '<input type="radio" id="sidebariconlist-2" name="menu-list-icon" class="custom-control-input" value="icon-list-style-2">';
                        bar += '<label class="custom-control-label" for="sidebariconlist-2"><i class="ax-circle"></i></label>';
                    bar += '</div>';
                    bar += '<div class="custom-control custom-radio custom-control-inline">';
                        bar += '<input type="radio" id="sidebariconlist-3" name="menu-list-icon" class="custom-control-input" value="icon-list-style-3">';
                        bar += '<label class="custom-control-label" for="sidebariconlist-3"><i class="ax-check"></i></label>';
                    bar += '</div>';
                    bar += '<div class="custom-control custom-radio custom-control-inline">';
                        bar += '<input type="radio" id="sidebariconlist-4" name="menu-list-icon" class="custom-control-input" value="icon-list-style-4" checked="">';
                        bar += '<label class="custom-control-label" for="sidebariconlist-4"><i class="ax-keyboard_arrow_right"></i></label>';
                    bar += '</div>';
                    bar += '<div class="custom-control custom-radio custom-control-inline">';
                        bar += '<input type="radio" id="sidebariconlist-5" name="menu-list-icon" class="custom-control-input" value="icon-list-style-5">';
                        bar += '<label class="custom-control-label" for="sidebariconlist-5"><i class="ax-angle-double-right"></i></label>';
                    bar += '</div>';
                    bar += '<div class="custom-control custom-radio custom-control-inline">';
                        bar += '<input type="radio" id="sidebariconlist-6" name="menu-list-icon" class="custom-control-input" value="icon-list-style-6">';
                        bar += '<label class="custom-control-label" for="sidebariconlist-6"><i class="ax-arrow-right"></i></label>';
                    bar += '</div>';
                bar += '</div>';

                bar += '<div class="reset-options pt-30 text-center">';
                    bar += '<button class="btn btn-danger" id="reset-settings">Reset Settings</button>';
                bar += '</div>';
            bar += '</div>';
        bar += '</div>';
    bar += '</div>';

    bar += '<div class="left-side-bar">';
        bar += '<div class="brand-logo">';
            bar += '<a href="/">';
                bar += '<img src="/assets/img/logo/mosyn-dark.png" alt="Mosyn" class="dark-logo">';
                bar += '<img src="/assets/img/logo/mosyn-light.png" alt="Mosyn" class="light-logo">';
            bar += '</a>';
            bar += '<div class="close-sidebar" data-toggle="left-sidebar-close">';
                bar += '<i class="ion-close-round"></i>';
            bar += '</div>';
        bar += '</div>';
        bar += '<div class="menu-block customscroll">';
            bar += '<div class="sidebar-menu">';
                bar += '<ul id="accordion-menu">';
                    bar += '<li>';
                        bar += '<a href="/" class="dropdown-toggle no-arrow">';
                            bar += '<i class="micon ax-home"></i><span class="mtext">Home</span>';
                        bar += '</a>';
                    bar += '</li>';

                    bar += '<li>';
                        bar += '<a href="/course" class="dropdown-toggle no-arrow">';
                            bar += '<i class="micon ax-bookmark"></i><span class="mtext">Kelas</span>';
                        bar += '</a>';
                    bar += '</li>';

                    bar += '<!-- Coming Soon --';
                    bar += '<li>';
                        bar += '<a href="javascript:;" class="dropdown-toggle">';
                            bar += '<span class="micon dw dw-list3"></span><span class="mtext">Course</span>';
                        bar += '</a>';
                        bar += '<ul class="submenu">';
                            bar += '<li class="dropdown">';
                                bar += '<a href="javascript:;" class="dropdown-toggle">';
                                    bar += '<span class="mtext">Coming Soon</span>';
                                bar += '</a>';
                                bar += '<ul class="submenu child">';
                                    bar += '<li><a href="javascript:;">Coming Soon</a></li>';
                                    bar += '<li><a href="javascript:;">Coming Soon</a></li>';
                                bar += '</ul>';
                            bar += '</li>';
                        bar += '</ul>';
                    bar += '</li>';
                    bar += '<!-- Coming Soon -->';

                    bar += '<li>';
                        bar += '<div class="dropdown-divider"></div>';
                    bar += '</li>';

                    bar += '<li>';
                        bar += '<div class="sidebar-small-cap">Lainnya</div>';
                    bar += '</li>';

                    bar += '<li>';
                        bar += '<a href="/m/faq/" class="dropdown-toggle no-arrow">';
                            bar += '<i class="micon ax-question"></i><span class="mtext">F.A.Q</span>';
                        bar += '</a>';
                    bar += '</li>';

                bar += '</ul>';
            bar += '</div>';
        bar += '</div>';
    bar += '</div>';
    bar += '<div class="mobile-menu-overlay"></div>';

    $("#header").html(bar);
});

function getValueByName(name) {
    var url = document.getElementById('mosyn').getAttribute('src');
    var param = new Array();
    if (url.indexOf("?") != -1) {
        var source = url.split("?")[1];
        items = source.split("&");
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var parameters = item.split("=");
            if (parameters[0] == "id") {
                return parameters[1];
            }
        }
    }
}