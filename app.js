const showView = function () {
    $('#add').hide();
    $('#verify').hide();
    $('#update').hide();
    $('#delete').hide();
    $('#view').show();
};

$('view').on('click', showView);


const showAdd = function () {
    $('#view').hide();
    $('#verify').hide();
    $('#update').hide();
    $('#delete').hide();
    $('#add').show();
};

$('add').on('click', showAdd);


const showVerify = function () {
    $('#add').hide();
    $('#view').hide();
    $('#update').hide();
    $('#delete').hide();
    $('#Verify').show();
};

$('verify').on('click', showVerify);


const showUpdate = function () {
    $('#add').hide();
    $('#verify').hide();
    $('#view').hide();
    $('#delete').hide();
    $('#update').show();
};

$('update').on('click', showUpdate);


const showDelete = function () {
    $('#add').hide();
    $('#verify').hide();
    $('#update').hide();
    $('#view').hide();
    $('#delete').show();
};

$('delete').on('click', showDelete);